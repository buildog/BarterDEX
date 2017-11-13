import { observable, action } from 'mobx';
import { ipcRenderer } from 'electron';

export default class OrderbookStore {

     @observable asks = [];
     @observable bids = [];

    constructor() {
        const self = this;
        ipcRenderer.on('orderbook', (e, data) => { self.updateOrderbook(data) });
    }

    updateOrderbook = ({ data }) => {
        console.log('orderbook update');
        if (data.asks) {
            const asks = data.asks.filter((ask) => ask.numutxos > 0);
            this.asks = JSON.parse(JSON.stringify(asks));
        } if (data.bids) {
            const bids = data.bids.filter((bid) => bid.numutxos > 0);
            this.bids = JSON.parse(JSON.stringify(bids));
        }
    }

    listenOrderbook = ({ base, rel }) => {
        if (base && rel) {
            this.listener = setInterval(() => ipcRenderer.send('orderbook', { base, rel }), 4000);
        }
    }

    killListener = () => {
        // reset orderbook and stop watching
        this.asks.replace([]);
        this.bids.replace([]);
        this.listener && clearInterval(this.listener);
    }

}
