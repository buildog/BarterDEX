import { observable, action } from 'mobx';
import { ipcRenderer } from 'electron';

export default class TradeStore {

     @observable bots = [];

    constructor() {
        const self = this;
        ipcRenderer.on('trade', (e, result) => { self.tradeCb(result) });
    }

    @action trade = (params) => {
        ipcRenderer.send('trade', params)
    }

    @action tradeCb = (result) => {
        console.log(result);
    }


}
