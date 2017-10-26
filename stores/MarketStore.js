import { observable, action } from 'mobx';
import { ipcRenderer } from 'electron';

export default class MarketStore {

     @observable market = [];

    constructor() {
        const self = this;
        ipcRenderer.on('marketUpdate', (e, { data }) => { self.updateMarket(data) });
    }

    @action updateMarket = (data) => {
        this.market = data;
    }

    @action getMarket = () => this.market

}
