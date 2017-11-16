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

        const self = this;

        ipcRenderer.on('coinsList', (e, coinsList) => { self.prepareCoinsList(coinsList) });
        ipcRenderer.on('confirmWithdraw', (e, result) => { self.withdrawConfirm = result });
        ipcRenderer.on('sendrawtransaction', (e, result) => {
            self.withdrawConfirm = false;
            self.tx = result;
        });
    }

    getMarket = (short) => this.market.getMarket().filter((asset) => asset.short === short)[0];

    @action getCoin = (short) => this.installedCoins.filter((asset) => asset.coin === short)[0];

    @action getIcon = (short) => {
        const coin = this.getCoin(short);
        if (coin) {
            return coin.icon
        }
        return short
    }


    /* @params { method, base, rel, price, relvolume }
    */

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
            const fix = a.electrum ? -1 : 0;
            return a.balance - b.balance - fix;
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


        this.installedCoins = this.coinsList.filter((coin) => coin.electrum);

        if (self.tradeRel) {
            self.tradeRel.balance = self.getCoin(self.tradeRel.coin).balance
        }

        if (self.tradeBase) {
            self.tradeBase.balance = self.getCoin(self.tradeBase.coin).balance
        }

        self.portfolioTotal();
    }

    portfolioTotal = () => {
        const self = this;
        const amount = self.installedCoins.reduce((accumulator, coin) => accumulator + coin.rel, 0);
        if (amount > 0) {
            const relMarket = self.getMarket(self.defaultCrypto);
            self.total.fiat = formatCurrency(amount * relMarket.price, self.formatFIAT);
            if (relMarket) {
                self.total.rel = formatCurrency(amount, self.formatCrypto);
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


}
