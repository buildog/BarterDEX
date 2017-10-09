/*
    Electron Events handler
*/

import log from 'electron-log';
import { Logging } from '../logging';

export const electronEvents = ({ app, mainWindow, api, listener, emitter }) => {
    // Start logging
    Logging.setLogging();

    // Listen API emitter for loading or errors and forward to stores
    api.on('loading', (args) => {
        emitter.send('loading', args);
    })

    api.on('notifier', (args) => {
        emitter.send('notifier', args);
    })


    // Close properly
    const close = () => {
        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        mainWindow.close();
        log.info('All windows closed. shutting down iguana...')
    }

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
        Logging.sendBugReport().then(() => mainWindow.reload())
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

    listener.on('close', () => {
        close();
    });
    app.on('will-quit', () => close());
}
