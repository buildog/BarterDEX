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

    removeKey = (code) => {
        let ghost = JSON.parse(JSON.stringify(this.store));
        ghost = ghost.filter((error) => error.code !== code)
        this.store = ghost;
    }


    updateGrowler = (args) => {
        const self = this;
        const code = args.key;
        let desc;
        const ghost = JSON.parse(JSON.stringify(this.store));

        const item = { code };
        if (args.desc) {
            item.desc = args.desc;
        }
        const hasError = ghost.filter((error) => error.code === code)
        hasError.length === 0 && ghost.push(item);
        this.store = ghost;

        if (CONSTANTS.growler[code].loadingKeys) {
            CONSTANTS.growler[code].loadingKeys.forEach((loadingKey) => {
                ipcRenderer.send('loading', { type: 'delete', key: loadingKey });
            });
        }

        setTimeout(() => {
            self.removeKey(code)
        }, 4000)
    }

    getLoader = (key) => {
        const store = this.store;
        const result = store.filter((item) => item === key)[0];

        return CONSTANTS.loading[result];
    }
}
