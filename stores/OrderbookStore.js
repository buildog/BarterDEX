import { observable, action, toJS } from 'mobx';
import { ipcRenderer } from 'electron';

export default class OrderbookStore {

     @observable orderbook = {};
     @observable asks = [];
     @observable bid = [];


    constructor() {
        const self = this;
        ipcRenderer.on('orderbook', (e, data) => { self.updateOrderbook(data) });
    }

    @action updateOrderbook = ({ data }) => {
        this.orderbook = data;
        this.asks = toJS(data.asks);
        this.bids = toJS(data.bids);
        console.log(data);
        // this.asks = data.asks.filter((ask) => ask.numutxos > 0);
        // this.bids = data.bids.filter((bid) => bid.numutxos > 0);
    }

    @action listenOrderbook = ({ base, rel }) => {
        this.listener = setInterval(() => ipcRenderer.send('orderbook', { base, rel }), 6000);
    }

    @action getAsks = () => toJS(this.asks);
    @action getBids = () => toJS(this.bids);

    @action killListener = () => {
        // reset orderbook and stop watching
        this.orderbook = {};
        this.asks = [];
        this.bids = [];
        this.listener && clearInterval(this.listener);
    }

}
