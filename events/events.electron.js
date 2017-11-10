/*
    Electron Events handler
*/

import log from 'electron-log';
import { Logging } from '../logging';

export const electronEvents = ({ app, mainWindow, api, listener, emitter }) => {
    // api.removeAllListeners();

    // Start logging
    Logging.setLogging();

    // Listen API emitter for loading or errors and forward to stores
    api.on('loading', (args) => {
        emitter.send('loading', args);
    })

    api.on('notifier', (args) => {
        emitter.send('notifier', args);
    })

    api.on('growler', (args) => {
        emitter.send('growler', args);
    })

    // Close properly
    const close = (event) => {
        event && event.preventDefault();
        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        log.info('All windows closed. Shutting down')
        emitter.send('willClose');
    }

    listener.on('readyToQuit', () => {
        api.removeAllListeners();
        setTimeout(() => mainWindow.close(), 2000);
    })

    /*
        Send bug report
    */
    listener.on('sendBugReport', () => {
        Logging.sendBugReport()
    })


    /*
        Forward loading from the app to the LoaderStore
    */
    listener.on('loading', (event, arg) => event.sender.send('loading', arg));


    /*
        Forward notifier from the app to the LoaderStore
    */
    listener.on('notifier', (event, arg) => event.sender.send('notifier', arg));


    /*
        Refresh window
    */

    listener.on('criticalRefresh', () => {
        mainWindow.reload();
    });


    /*
        App restart
    */


    listener.on('restart', () => {
        app.relaunch();
        app.exit();
    });

    /*
        Toggle the fullscreen mode
    */
    listener.on('toggle-fullscreen-editor-window', () => {
        mainWindow.setFullScreen(!mainWindow.isFullScreen())
    });

    /*
        Minimize window
    */

    listener.on('minimize', () => {
        mainWindow.minimize()
    });

    /*
        Close window
    */

    listener.on('close', (event) => close(event));
    app.on('will-quit', () => close());

    app.on('window-all-closed', () => {
        app.quit();
    });
}
