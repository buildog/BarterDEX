import { observable, action } from 'mobx';
import { ipcRenderer } from 'electron';

export default class TradeStore {

     @observable bots = [];

    constructor() {
        const self = this;
        ipcRenderer.on('trade', (e, result) => { self.tradeCb(result) });
        ipcRenderer.on('botstatus', (e, result) => { self.botstatus(result) });
    }

    botstatus = (botstatus) => {
        this.bots = JSON.parse(JSON.stringify(botstatus));
    }

    @action stopBot = (botid) => {
        ipcRenderer.send('stopBot', botid)
    }

    @action trade = (params) => {
        ipcRenderer.send('trade', params)
    }

    @action tradeCb = (result) => {
        console.log(result);
    }


}
