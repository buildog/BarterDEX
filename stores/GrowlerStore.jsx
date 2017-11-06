import { observable } from 'mobx';
import { ipcRenderer } from 'electron';
import CONSTANTS from '../constants';

export default class GrowlerStore {
    @observable store = []; /* initial is pending Iguana bootstrap*/

    constructor() {
          // listener for loading state change
        ipcRenderer.on('growler', (e, arg) => {
            console.log('growler!')
            this.updateGrowler(arg);
        });
    }

    removeKey = (key) => {
        const ghost = JSON.parse(JSON.stringify(this.store));
        ghost.splice(ghost.indexOf(key), 1);
        this.store = ghost;
    }


    updateGrowler = (args) => {
        const self = this;
        const { key } = args;
        const ghost = JSON.parse(JSON.stringify(this.store));

        ghost.push(key);

        this.store = ghost;

        console.log(this.store);

        setTimeout(() => {
            self.removeKey(key)
        }, 1500)
    }

    getLoader = (key) => {
        const store = this.store;
        const result = store.filter((item) => item === key)[0];

        return CONSTANTS.loading[result];
    }
}
