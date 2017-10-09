import { observable, action } from 'mobx';
import { ipcRenderer } from 'electron';

export default class OrderbookStore {

     @observable orderbook = {};


    constructor() {
        const self = this;
        ipcRenderer.on('orderbook', (e, data) => { self.updateOrderbook(data) });
    }

    @action updateOrderbook = ({ base, rel, data }) => {
        this.orderbook = data;
    }

    @action listenOrderbook = ({ base, rel }) => {
        this.listener = setInterval(() => ipcRenderer.send('orderbook', { base, rel }), 1000);
    }

    @action killListener = () => {
        // reset orderbook and stop watching
        this.orderbook = {};
        this.listener && clearInterval(this.listener);
    }

}
