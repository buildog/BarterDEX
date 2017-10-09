import { observable, action } from 'mobx';
import { ipcRenderer } from 'electron';

export default class WinStore {
  @observable fullscreen = false;


    constructor() {
      // keep toggle state
        ipcRenderer.on('fullscreen-toggled', (e, arg) => {
            this.fullscreen = arg;
        });
    }

  // @action startIguana = () => {
  //     ipcRenderer.send('startIguana');
  // }
  //
  // @action watchMarket = () => {
  //     ipcRenderer.send('watchMarket');
  // }
  //
  //
  // @action initializePortfolio = () => {
  //     ipcRenderer.send('initializePortfolio');
  // }


  @action toggle = () => {
      ipcRenderer.send('toggle-fullscreen-editor-window');
  }

}
