import { observable } from 'mobx';
import { ipcRenderer } from 'electron';
import CONSTANTS from '../constants';

export default class GrowlerStore {
    @observable store = [];

    constructor() {
          // listener for loading state change
        ipcRenderer.on('growler', (e, arg) => {
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

        if (CONSTANTS.growler[key].loadingKeys) {
            CONSTANTS.growler[key].loadingKeys.forEach((loadingKey) => {
                ipcRenderer.send('loading', { type: 'delete', key: loadingKey });
            });
        }

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
