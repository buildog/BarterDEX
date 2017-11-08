import { observable, action } from 'mobx';
import { ipcRenderer } from 'electron';
import CONSTANTS from '../constants';

export default class NotifierStore {
    @observable errors = [];


    constructor() {
      // listener for loading state change
        ipcRenderer.on('notifier', (e, args) => {
            if (args.error) {
                this.updateErrors(args);
            }
        });
    }

    @action updateErrors = (args) => {
        const code = args.error;
        let desc;
        const ghost = JSON.parse(JSON.stringify(this.errors));
        if (args.desc) {
            desc = args.desc;
        }
        const hasError = ghost.filter((error) => error.code === code)
        hasError.length === 0 && ghost.push({ code, desc });
        this.errors = ghost;
        console.log(ghost);
    }

    clearAllErrors = () => {
        this.errors.forEach((e) => {
          /*
            Check if there is some loading state linked with the currents errors stack
            and remove them from their store
          */
            if (CONSTANTS.error[e.code].loadingKeys) {
                CONSTANTS.error[e.code].loadingKeys.forEach((loadingKey) => {
                    ipcRenderer.send('loading', { type: 'delete', key: loadingKey });
                });
            }
        });
      /* Clear the error stack */
        this.errors = [];
    }

    refreshApp = () => {
        ipcRenderer.send('criticalRefresh');
    }


}
