/*
    Bootstrap of Electron 🚀
*/
import { app, BrowserWindow, Menu, ipcMain } from 'electron';
import { menuTemplate } from './menu';
import { API } from './api';
import { electronEvents, shepherdEvents, tradeEvents, portfolioEvents, orderbookEvents } from './events';
import { main } from './config/config';

const api = new API();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow = null
let menu

const installExtensions = async () => {
    if (process.env.NODE_ENV === 'development') {
        require('electron-debug')();

        const installer = require('electron-devtools-installer') // eslint-disable-line global-require

        const extensions = ['REACT_DEVELOPER_TOOLS', 'REACT_PERF']

        const forceDownload = !!process.env.UPGRADE_EXTENSIONS
        for (const name of extensions) {
            try {
                await installer.default(installer[name], forceDownload);
          } catch (e) {} // eslint-disable-line
        }
    }
}

app.on('ready', async () => {
    await installExtensions()

    mainWindow = new BrowserWindow({
        width: 900,
        height: 786,
        minWidth: 720,
        show: false,
        backgroundColor: '#25282A'
    })

    // Bootstrap listeners
    const eventsConfig = { api, emitter: mainWindow.webContents, listener: ipcMain, config: main };
    const eventsElectron = { app, emitter: mainWindow.webContents, mainWindow, api, config: main, listener: ipcMain };

    electronEvents(eventsElectron);

    shepherdEvents(eventsConfig);
    tradeEvents(eventsConfig);
    portfolioEvents(eventsConfig);
    orderbookEvents(eventsConfig);


    mainWindow.loadURL(`file://${__dirname}/app/index.html`)

    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.show()
        mainWindow.focus()
    });

    mainWindow.on('closed', () => { mainWindow = null })

    mainWindow.on('enter-full-screen', () => {
      // Send async message to renderer process to update the store
        mainWindow.webContents.send('fullscreen-toggled', true);
    });

    mainWindow.on('leave-full-screen', () => {
      // Send async message to renderer process to update the store
        mainWindow.webContents.send('fullscreen-toggled', false);
    });

    if (process.env.NODE_ENV === 'development') {
        mainWindow.openDevTools()
        mainWindow.webContents.on('context-menu', (e, props) => {
            const { x, y } = props

            Menu.buildFromTemplate([{
                label: 'Inspect element',
                click() {
                    mainWindow.inspectElement(x, y)
                }
            }]).popup(mainWindow)
        });
    }

    // Check if we are on a MAC
    if (process.platform === 'darwin') {
      // Create our menu entries so that we can use MAC shortcuts
        Menu.setApplicationMenu(Menu.buildFromTemplate([
            {
                label: 'Edit',
                submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
            { role: 'pasteandmatchstyle' },
            { role: 'delete' },
            { role: 'selectall' },
            { role: 'quit' }
                ]
            },
            {
                label: 'View',
                submenu: [
                { role: 'reload' },
                { role: 'forcereload' },
                { role: 'toggledevtools' },
                { type: 'separator' },
                { role: 'resetzoom' },
                { role: 'zoomin' },
                { role: 'zoomout' },
                { type: 'separator' },
                { role: 'togglefullscreen' }
                ]
            },
            {
                role: 'window',
                submenu: [
                { role: 'minimize' },
                { role: 'close' }
                ]
            }
        ]));
    }
})
