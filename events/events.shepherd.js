/*
    Iguana Events handler
*/

const MMStates = {
    initial: false,
    open: 'open',
    close: 'closed'
};

let mmsState = MMStates.initial;
let checkMMInterval;
let passphrase;

const stopMMStatus = () => {
    mmsState = MMStates.initial;
    checkMMInterval && clearInterval(checkMMInterval);
}

export const shepherdEvents = ({ api, emitter, listener }) => {
    listener.on('refresh', () => {
        api.fetchMarket();
        api.fetchCoins();
    });

    listener.on('metarefresh', () => {
        api.fetchRecentSwaps();
        api.fetchSwaps();
        api.fetchBots();
    })


    listener.on('shepherd-command', (event, arg) => {
        switch (arg.command) {
        case 'ping':
            break;
        case 'login':
            stopMMStatus();
            checkMMInterval = setInterval(() => api.checkMMStatus(), 180000);
            emitter.send('loading', { type: 'add', key: 1 });
            api.bootstrap({ passphrase: arg.passphrase, userpass: arg.userpass });
            break;
        case 'logout':
            api.logout();
            break;
        default:
            break;
        }
    })

    api.on('logoutCallback', (data) => {
        if (!data.error) {
            stopMMStatus();
            passphrase = '';
            emitter.send('resetUserInfo', data);
        }
    });

    api.on('MMStatus', (status) => {
        // WIP:count and trigger and error if too much attemps
        if (status === MMStates.close && mmsState === MMStates.open) {
            emitter.send('notifier', { error: 9 });
        }

        if (status === MMStates.close && mmsState !== MMStates.close) {
            emitter.send('loading', { type: 'add', key: 2 });
            mmsState = MMStates.close;
        }
    })

    api.on('updateUserInfo', (data) => {
        emitter.send('updateUserInfo', data);
        emitter.send('loading', { type: 'delete', key: 1 });
        emitter.send('loading', { type: 'delete', key: 2 });
    })

    api.on('coinsActivated', () => emitter.send('coinsActivated'))
}
