import { observable, action } from 'mobx';
import { ipcRenderer } from 'electron';
import React from 'react'


import formatCurrency from 'format-currency';
import { colors } from '../constants'
import { coinName } from '../app/helpers'
import * as Icon from 'react-cryptocoins';

// const renderIcon = (coin, size = 200) => {
//     switch (coin) {
//     case 'MNZ':
//         return (<span className="coin-custom-logo" dangerouslySetInnerHTML={{ __html: mnz }} />);
//         break;
//     case 'KMD':
//         return (<Icon.KmdAlt size={size} />);
//         break;
//     case 'NEO':
//         return (<Icon.Neos size={size} />);
//         break;
//     default:
//         if (Icon[capitalize(coin)]) {
//             const TagName = Icon[capitalize(coin)];
//             return <TagName size={size} />;
//         }
//
//         return (<span />)
//
//         break;
//
//     }
// }


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
        item.icon = (<i className={`coin-icon-placeholder ${item.coin}`}>{ item.coin }</i>)
        item.hasSVGIcon = false;
    }

    item.name = coinName(item.coin);
    return item;
})


export default class PortfolioStore {
     @observable portfolio = [];
     @observable coinsList = [];
     @observable tradeTo = false;
     @observable tradeWith = false;

     @observable fiatRates = {
         eur: 3000,
         usd: 4000
     }

     @observable defaultCurrency = {};

    colors = colors;

    constructor({ defaultFiat, defaultCrypto, orderbookStore }) {
        this.orderbook = orderbookStore;
        this.defaultCurrency = defaultFiat;
        this.defaultCrypto = defaultCrypto;
        this.formatFIAT = { format: '%s%v', symbol: this.defaultCurrency.symbol }
        this.formatCrypto = { format: '%v %c', code: defaultCrypto, maxFraction: 8 };
        this.autorefresh = false;
        this.initializedTradeWith = false;

        const self = this;

        ipcRenderer.on('setPortfolio', (e, { portfolio }) => { this.setPortfolio(portfolio) });
        ipcRenderer.on('coinsList', (e, coinsList) => { self.prepareCoinsList(coinsList) });

        // trade methods after coin is activated
        ipcRenderer.on('updateTrade', (e, { coin, type }) => { self.updateTrade(coin, type) });
        ipcRenderer.on('trade', (e, result) => { self.tradeCb(result) });
    }

    getCoin = (short) => this.coinsList.filter((asset) => asset.coin === short)[0];
    getPortfolioCoin = (short) => this.portfolio.filter((asset) => asset.coin === short)[0];

    /* @params { method, base, rel, price, relvolume }
    */
    @action trade = (params) => {
        console.log(params);
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
    }

    @action setPortfolio = (portfolio) => {
        const self = this;

        if (!this.tradeWith && !this.initializedTradeWith) {
            // Set defaut tradeWith
            this.enableCoin(this.defaultCrypto, 'With');
            this.initializedTradeWith = true;
        }

        if (!self.autorefresh) {
            self.autorefresh = setInterval(() => self.refresh(), 6000)
        }

        this.portfolio = addIcons(portfolio)
    }


    @action updateTrade = (coin, type) => {
        this.orderbook.killListener();
        this[`trade${type}`] = this.getPortfolioCoin(coin);

        if (this.tradeTo && this.tradeWith) {
            this.orderbook.listenOrderbook({ base: this.tradeTo.coin, rel: this.tradeWith.coin });
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

    @action enableCoin = (coin, type) => {
        ipcRenderer.send('enableCoin', { coin, type })
    }

    @action refresh = () => { ipcRenderer.send('refreshPortfolio') }

    portfolioRenderBalance = (short) => {
        const opts = { format: '%v %c', code: short, maxFraction: 8 };
        return formatCurrency(this.getPortfolioCoin(short).balance, opts)
    }

    portfolioRenderBTC = (short) => {
        const self = this;
        const amount = this.getPortfolioCoin(short).btcBalance;
        return formatCurrency(amount, self.formatCrypto)
    }

    portfolioRenderFIAT = (short) => {
        const self = this;
        const amount = this.getPortfolioCoin(short)[this.defaultCurrency.type];
        return formatCurrency(amount, self.formatFIAT)
    }

    get24hEvolution = (short) => {
        const coin = this.getPortfolioCoin(short);
        return coin.perc;
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

    portfolioTotalBtc = (short = this.defaultCrypto) => {
        const self = this;
        const total = this.portfolioTotal(false);
        const coinValue = this.getCoin(short).price;
        return formatCurrency(total / coinValue, self.formatCrypto)
    }
}
