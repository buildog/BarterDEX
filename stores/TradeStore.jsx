import { observable, action } from 'mobx';
import { ipcRenderer } from 'electron';
import React from 'react'

const removeTrailingZeros = (value) => value

export default class TradeStore {

    @observable validation = 'enter amount to continue';
    @observable flow = 'buy';
    @observable method = 'bot_buy';
    @observable tradeBase = false;
    @observable tradeRel = false;
    @observable bots = [];
    @observable swaps = [];

    // @observable status = [];
    @observable rates = {
        ask: {
            price: 0,
            pricefree: 0,
            fees: 0
        },
        bid: {
            price: 0,
            pricefree: 0,
            fees: 0
        }
    };

    @observable amounts = {
        rel: 0,
        base: 0,
        isMax: false,
        autoMax: false
    };

    constructor({ portfolioStore }) {
        const self = this;
        this.portfolio = portfolioStore;

        ipcRenderer.on('trade', (e, result) => { self.tradeCb(result) });
        ipcRenderer.on('botstatus', (e, result) => { self.botstatus(result) });
        ipcRenderer.on('updateTrade', (e, { coin, type }) => { self.updateTrade(coin, type) });
        ipcRenderer.on('swaps', (e, { swaps }) => { self.updateSwaps(swaps) });
        ipcRenderer.on('recentswaps', (e, result) => { self.updateRecentSwaps(result) });
        ipcRenderer.on('swapstatus', (e, result) => { self.updateSwapStatus(result) });
    }

    @action reset = () => {
        this.rates = {
            ask: {
                price: 0,
                pricefree: 0,
                fees: 0
            },
            bid: {
                price: 0,
                pricefree: 0,
                fees: 0
            }
        };

        this.amounts = {
            rel: 0,
            base: 0,
            isMax: false,
            autoMax: false
        };

        this.validation = 'enter amount to continue';
    }

    formatSatoshi = (input) => input.toFixed(8);

    totalfee = (format) => {
        const fees = this.amounts.rel * this.rates.ask.fees;
        if (format) {
            return this.formatSatoshi(fees)
        }

        return fees
    }


    updateSwaps = () => {
        // this.swaps = swaps;
    }

    updateRecentSwaps = (recents) => {

    }

    updateSwapStatus = (update) => {
        if (!update) {
            console.log('not found');
            console.log(update);
            return
        }
        const swap = this.swaps.filter((item) => item.quoteid === update.quoteid);
        if (swap.length > 0) {
            const index = this.swaps.indexOf(swap[0]);
            this.swaps[index] = update;
        } else {
            this.swaps.push(update);
        }
    }

    botstatus = (update) => {
        const bot = this.bots.filter((item) => item.botid === update.botid);
        if (bot.length > 0) {
            const index = this.bots.indexOf(bot[0]);
            if (update.stopped) {
                this.bots.splice(index);
                return;
            }
            this.bots[index] = update;
        } else if (!update.stopped) {
            this.bots.push(update);
        }
    }


    @action updateMethod = (method) => {
        this.method = method;
    }


    @action updateTrade = (coin, type) => {
        this[`trade${type}`] = this.portfolio.getCoin(coin.coin);
        console.log(this[`trade${type}`])
    }

    @action autoSetTrade = (coin) => {
        // activate the coin and set as rradeBase
        this.updateTrade(coin, 'Base');
        // search for the highest balance and activate as tradeRel
        let Rel;
        if (coin.coin === 'KMD') {
            Rel = this.portfolio.getCoin('MNZ')
        } else {
            // default coin
            Rel = this.portfolio.getCoin('KMD')
        }
        this.updateTrade(Rel, 'Rel');
    }

    @action validator = ({ amount, rate }) => {
        let validation = false;

        if (rate === '') {
            this.rates.ask.price = 0;
        } else {
            if (rate) {
                rate = removeTrailingZeros(rate);
            }
            this.rates.ask.price = rate || this.rates.ask.price;
        }

        if (amount === '') {
            this.amounts.rel = 0;
        } else {
            if (amount) {
                amount = removeTrailingZeros(amount)
            }
            this.amounts.rel = amount || this.amounts.rel;
        }


        if (this.amounts.rel * this.rates.ask.price === this.tradeRel.balance) {
            this.amounts.autoMax = true;
        } else {
            this.amounts.autoMax = false;
        }

        if (!this.rates.ask.price) {
            validation = `price is empty`;
        } else if ((this.tradeRel.balance / this.rates.ask.price) < this.amounts.rel) {
            validation = (<div className="validation"><span>not enough {this.tradeRel.coin}</span><small>(max {this.tradeRel.balance})</small></div>);
        } else if (!this.amounts.rel) {
            validation = `${this.tradeRel.coin} amount is empty`;
        }

        this.validation = validation;
    }

    @action setMax = () => {
        this.updateAmount({ amount: this.tradeRel.balance / this.rates.ask.price });
    }

    @action updateRate = (values, type) => {
        values.pricefree = values.price;
        values.fees = (values.price * 0.0111).toFixed(8);
        values.price = (values.price * 1.0111).toFixed(8);
        this.rates[type] = JSON.parse(JSON.stringify(values));
        this.validator({ rate: values.price, amount: values.maxvolume });
        this.amounts.autoMax && setTimeout(() => this.setMax())
    }

    @action updateAmount = ({ amount }) => {
        this.validator({ amount });
    }

    @action toggleBot = ({ botid, method }) => {
        ipcRenderer.send('toggleBot', { botid, method })
    }


    @action trade = (params) => {
        ipcRenderer.send('trade', params)
    }

    @action tradeCb = (result) => {
        console.log(result);
    }

    @action leave = () => {
        const self = this;
        self.tradeBase = false;
        self.tradeRel = false;
    }

}
