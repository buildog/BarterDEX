import { observable } from 'mobx';
import { ipcRenderer } from 'electron';

export default class LoaderStore {
      @observable store = []; /* initial is pending Iguana bootstrap*/

    constructor() {
          // listener for loading state change
        ipcRenderer.on('loading', (e, arg) => {
            this.updateLoading(arg);
        });
    }

    updateLoading = (args) => {
        const { type, key } = args;
        const ghost = JSON.parse(JSON.stringify(this.store));

        if (type === 'delete') {
            ghost.indexOf(key) > -1 && ghost.splice(ghost.indexOf(key), 1);
        }
        if (type === 'add') {
            ghost.indexOf(key) === -1 && ghost.push(key);
        }

        this.store = ghost;
    }
}
