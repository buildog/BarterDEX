import { observable, action } from 'mobx';
import { ipcRenderer } from 'electron';

export default class TradeStore {

    @observable bots = [];
    // @observable status = [];

    constructor() {
        const self = this;
        ipcRenderer.on('trade', (e, result) => { self.tradeCb(result) });
        ipcRenderer.on('botstatus', (e, result) => { self.botstatus(result) });
    }


    botstatus = (update) => {
        const ghost = JSON.parse(JSON.stringify(this.bots));

        const bot = ghost.filter((item) => item.botid === update.botid);
        if (bot.length > 0) {
            bot[0] = update;
        } else {
            ghost.push(update);
        }
        this.bots = ghost.sort((a, b) => b.started - a.started);
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
