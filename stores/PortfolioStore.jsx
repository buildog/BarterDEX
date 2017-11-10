import { observable, action } from 'mobx';
import { ipcRenderer } from 'electron';
import React from 'react'


import formatCurrency from 'format-currency';
import { colors, electrumConfig } from '../constants'
import { coinName } from '../app/helpers'
import * as Icon from 'react-cryptocoins';
import MNZ from '../app/static/coins/mnz.svg';
import CONSTANTS from '../constants';


const capitalize = (string) => string.toLowerCase().charAt(0).toUpperCase() + string.slice(1).toLowerCase()


const addIcons = (coins) => coins.map((item) => {
    let coin = item.coin;
    coin = capitalize(coin);

    if (coin === 'Kmd') { coin = 'KmdAlt'; } else {
        coin = capitalize(coin);
    }

    if (Icon[coin]) {
        const TagName = Icon[coin];
        item.icon = (<TagName />);
        item.hasSVGIcon = true;
    } else if (coin === 'Mnz') {
        item.icon = (<i className={`coin-icon-svg ${item.coin}`} dangerouslySetInnerHTML={{ __html: MNZ }} />)
        item.hasSVGIcon = true;
    } else {
        item.icon = (<i className={`coin-icon-placeholder ${item.coin}`}>{ item.coin[0] }</i>)
        item.hasSVGIcon = false;
    }

    item.name = coinName(item.coin);
    return item;
})


export default class PortfolioStore {
     @observable portfolio = [];
     @observable coinsList = [];
     @observable installedCoins = [];
     @observable tradeBase = false;
     @observable tradeRel = false;
     @observable rates = {
         ask: 0,
         bid: 0,
         indexes: {
             ask: '',
             bid: ''
         }
     };
     @observable withdrawConfirm = false;
     @observable tx = false;
     @observable total = {
         fiat: '',
         rel: ''
     };

     @observable fiatRates = {
         eur: 3000,
         usd: 4000
     }

     @observable defaultCurrency = {};

    colors = colors;

    constructor({ defaultFiat, defaultCrypto, orderbookStore, marketStore }) {
        this.orderbook = orderbookStore;
        this.market = marketStore;
        this.defaultCurrency = defaultFiat;
        this.defaultCrypto = defaultCrypto;
        this.formatFIAT = { format: '%s%v', symbol: this.defaultCurrency.symbol }
        this.formatCrypto = { format: '%v %c', code: defaultCrypto, maxFraction: 8 };

        this.initializedtradeRel = false;

        const self = this;

        ipcRenderer.on('coinsList', (e, coinsList) => { self.prepareCoinsList(coinsList) });
        ipcRenderer.on('updateTrade', (e, { coin, type }) => { self.updateTrade(coin, type) });
        ipcRenderer.on('confirmWithdraw', (e, result) => { self.withdrawConfirm = result });
        ipcRenderer.on('sendrawtransaction', (e, result) => {
            self.withdrawConfirm = false;
            self.tx = result;
        });
    }

    getMarket = (short) => this.market.getMarket().filter((asset) => asset.short === short)[0];

    @action getCoin = (short) => this.installedCoins.filter((asset) => asset.coin === short)[0];

    updateTrade = (coin, type) => {
        this[`trade${type}`] = this.getCoin(coin);
    }

    /* @params { method, base, rel, price, relvolume }
    */

    @action updateRate = ({ price, type }, index) => {
        this.rates[type] = parseFloat(price);
        this.rates.indexes[type] = index;
    }

    @action resetTX = () => {
        this.tx = false;
    }

    @action withdraw = (params) => {
        ipcRenderer.send('withdraw', params)
    }

    @action confirmWithdraw = () => {
        const self = this;
        ipcRenderer.send('confirmWithdraw', { coin: self.tradeBase.coin, signedtx: self.withdrawConfirm.hex, confirmation: true })
    }

    @action cancelWithdraw = () => {
        this.withdrawConfirm = false
    }

    @action prepareCoinsList = (coins = this.coinsList || []) => {
        const self = this;
        const withIcons = addIcons(coins);
        const byIcon = withIcons.slice(0);
        byIcon.sort((a, b) => {
            const x = a.hasSVGIcon;
            return x ? a.balance - b.balance : -1;
        }).reverse();
        this.coinsList = byIcon;

        const relMarket = self.getMarket(self.defaultCrypto);

        // prepend rel
        if (relMarket) {
            this.coinsList.map((coin) => {
                const market = self.getMarket(coin.coin);
                if (market && coin.coin !== self.defaultCrypto && market.price) {
                    coin.rel = (market.price / relMarket.price) * coin.balance;
                } else if (coin.KMDvalue) {
                    const KMDmarket = self.getMarket('KMD');
                    if (KMDmarket && coin.coin !== self.defaultCrypto) {
                        coin.rel = (KMDmarket.price / relMarket.price) * coin.KMDvalue;
                    }
                } else {
                    coin.rel = 0;
                }

                return coin;
            })
        }


        this.installedCoins = this.coinsList.filter((coin) => (coin.installed && coin.height > 0) || electrumConfig[coin.coin]);

        if (self.tradeRel) {
            self.tradeRel.balance = self.getCoin(self.tradeRel.coin).balance
        }

        if (self.tradeBase) {
            self.tradeBase.balance = self.getCoin(self.tradeBase.coin).balance
        }

        self.portfolioTotal();
    }

    @action enableElectrum = (coin, type = false) => {
        const electrumConf = electrumConfig[coin.coin];
        electrumConf.map((svr) => ipcRenderer.send('enableCoin', { coin: coin.coin, electrum: true, ipaddr: Object.keys(svr)[0], port: svr[Object.keys(svr)], type }));
    }

    @action setTrade = (coin, type) => {
        const installedCoin = this.getCoin(coin.coin);
        console.log(installedCoin.height <= 0 && !installedCoin.electrum);
        if (installedCoin.height <= 0) {
            const electrum = !coin.installed;
            if (!electrum) {
                console.log(`activate native coin ${coin.coin}`)
                ipcRenderer.send('enableCoin', { coin: coin.coin, type })
            } else {
                console.log(`activate electrum coin ${coin.coin}`)
                this.enableElectrum(coin, type)
            }
        } else {
            console.log(`trade ${coin.coin} as ${type} `)
            type && this.updateTrade(coin.coin, type)
        }
    }

    @action autoSetTrade = (coin) => {
        // activate the coin and set as rradeBase
        this.setTrade(coin, 'Base');
        // search for the highest balance and activate as tradeRel
        let Rel;
        if (coin.coin === 'KMD') {
            Rel = this.getCoin('MNZ')
        } else {
            // default coin
            Rel = this.getCoin('KMD')
        }
        this.setTrade(Rel, 'Rel');
    }


    @action refresh = () => { ipcRenderer.send('refreshPortfolio') }


    portfolioTotal = () => {
        const self = this;
        const amount = self.installedCoins.reduce((accumulator, coin) => {
            const market = self.getMarket(coin.coin);
            if (market) {
                return accumulator + (market.price * coin.balance)
            }

            return accumulator
        }, 0);

        if (amount > 0) {
            self.total.fiat = formatCurrency(amount, self.formatFIAT);
            const relMarket = self.getMarket(self.defaultCrypto);
            if (relMarket) {
                self.total.rel = formatCurrency(amount / relMarket.price, self.formatCrypto);
            }
        } else {
            self.total.fiat = '';
            self.total.rel = '';
        }
    }

    portfolioEvolution = () => {
        const self = this;
        const total = self.portfolio.reduce((accumulator, coin) => accumulator + ((coin[self.defaultCurrency.type] * coin.perc) / 100), 0);
        return ((total / this.portfolioTotal(false)) * 100).toFixed(2);
    }

    renderBalance = (amount, code) => formatCurrency(amount, { format: '%v %c', code, maxFraction: 8 })


    @action leave = () => {
        const self = this;
        self.tradeBase = false;
        self.tradeRel = false;
    }

}
