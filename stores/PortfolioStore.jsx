import { observable, action } from 'mobx';
import { ipcRenderer } from 'electron';
import React from 'react'


import formatCurrency from 'format-currency';
import { colors } from '../constants'
import { coinName } from '../app/helpers'
import * as Icon from 'react-cryptocoins';

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
        this.autorefresh = false;
        this.initializedtradeRel = false;

        const self = this;

        ipcRenderer.on('setPortfolio', (e, { portfolio }) => { this.setPortfolio(portfolio) });
        ipcRenderer.on('coinsList', (e, coinsList) => { self.prepareCoinsList(coinsList) });

        // trade methods after coin is activated
        ipcRenderer.on('updateTrade', (e, { coin, type }) => { self.updateTrade(coin, type) });
        ipcRenderer.on('trade', (e, result) => { self.tradeCb(result) });
    }

    getPortfolioCoin = (short) => this.portfolio.filter((asset) => asset.coin === short)[0];
    getMarket = (short) => this.market.getMarket().filter((asset) => asset.short === short)[0];

    /* @params { method, base, rel, price, relvolume }
    */

    @action getCoin = (short) => this.coinsList.filter((asset) => asset.coin === short)[0];

    @action trade = (params) => {
        ipcRenderer.send('trade', params)
    }


    @action tradeCb = (result) => {
        console.log(result);
    }

    @action prepareCoinsList = (coins) => {
        const withIcons = addIcons(coins);
        const byIcon = withIcons.slice(0);
        byIcon.sort((a, b) => a.hasSVGIcon ? 0 : 1);
        this.coinsList = byIcon;
        this.installedCoins = addIcons(this.coinsList.filter((coin) => coin.height > 0).sort((a, b) => a.balance > 0 ? 0 : 1));
    }

    @action setPortfolio = (portfolio) => {
        const self = this;
        this.portfolio = addIcons(portfolio)
    }


    @action updateTrade = (coin, type) => {
        this.orderbook.killListener();
        this[`trade${type}`] = this.getPortfolioCoin(coin);

        if (this.tradeBase && this.tradeRel) {
            this.orderbook.listenOrderbook({ base: this.tradeBase.coin, rel: this.tradeRel.coin });
        }
    }

    // trade methods check if coin is activated
    @action setTrade = (coin, type) => {
        const self = this;

        // check if inside the portfolio, if not wait for backend event after activated
        if (!self.getPortfolioCoin(coin.coin)) {
            return self.enableCoin(coin.coin, type);
        }
        this.updateTrade(coin.coin, type);
    }

    @action autoSetTrade = (coin) => {
        // activate the coin and set as rradeBase
        this.setTrade({ coin }, 'Base');
        // search for the highest balance and activate as tradeRel
        const firstNotSelf = this.installedCoins.filter((installed) => installed.coin !== coin)[0];
        this.setTrade(firstNotSelf, 'Rel');
    }

    @action enableCoin = (coin, type) => {
        ipcRenderer.send('enableCoin', { coin, type })
    }

    @action refresh = () => { ipcRenderer.send('refreshPortfolio') }

    @action renderBalance = (short) => {
        const opts = { format: '%v %c', code: short, maxFraction: 8 };
        const coin = this.getPortfolioCoin(short);
        if (coin) {
            return formatCurrency(coin.balance, opts)
        }

        return 0;
    }


    portfolioRenderFIAT = (short) => {
        const self = this;
        const amount = this.getCoin(short).KMDvalue;

        const KMD = this.getMarket('KMD');

        if (KMD) {
            const price = KMD.price;
            return formatCurrency(amount * price, self.formatFIAT)
        }

        return '';
    }

    get24hEvolution = (short) => {
        const coin = this.getPortfolioCoin(short);
        return coin.perc;
    }

    @action kmdTotal = (format = true) => {
        const self = this;
        /* call reduce() on the array, passing a callback
        that adds all the values together */
        const amount = self.installedCoins.reduce((accumulator, coin) => accumulator + coin.KMDvalue, 0);
        if (format) {
            return formatCurrency(amount, self.formatCrypto)
        }

        return amount;
    }

    portfolioTotal = (format = true) => {
        const self = this;
        /* call reduce() on the array, passing a callback
        that adds all the values together */
        const amount = self.portfolio.reduce((accumulator, coin) => accumulator + coin[self.defaultCurrency.type], 0);
        if (format) {
            return formatCurrency(amount, self.formatFIAT)
        }

        return amount;
    }

    portfolioEvolution = () => {
        const self = this;
        const total = self.portfolio.reduce((accumulator, coin) => accumulator + ((coin[self.defaultCurrency.type] * coin.perc) / 100), 0);
        return ((total / this.portfolioTotal(false)) * 100).toFixed(2);
    }

    // portfolioTotalBtc = (short = this.defaultCrypto) => {
    //     const self = this;
    //     const total = this.portfolioTotal(false);
    //     const coinValue = this.getCoin(short).price;
    //     return formatCurrency(total / coinValue, self.formatCrypto)
    // }


    @action leave = () => {
        const self = this;
        self.tradeBase = false;
        self.tradeRel = false;
        self.orderbook.killListener();

        clearInterval(self.autorefresh);
    }

}
