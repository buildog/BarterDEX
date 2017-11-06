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
        const bots = botstatus.sort((a, b) => b.started - a.started);
        this.bots = JSON.parse(JSON.stringify(bots));
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


}
