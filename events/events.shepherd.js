/*
    Iguana Events handler
*/

const MMStates = {
    initial: false,
    open: 'open',
    close: 'closed'
};

let checkMMInterval;

export const shepherdEvents = ({ api, emitter, listener }) => {
    let mmsState = '';

    listener.on('shepherd-command', (event, arg) => {
        switch (arg.command) {
        case 'ping':
            break;
        case 'login':
            emitter.send('loading', { type: 'add', key: 1 });
            api.startMarketMaker({ passphrase: arg.passphrase });

            break;
        case 'logout':
            api.killMarketmaker(true);
            break;
        default:
            break;
        }
    })

    api.on('logoutCallback', (data) => {
        if (!data.error) {
            mmsState = MMStates.initial;
            clearInterval(checkMMInterval);
            emitter.send('resetUserInfo', data);
        }
    });

    api.on('loginCallback', (data) => {
        emitter.send('loading', { type: 'delete', key: 1 });

        if (!data.error) {
            // start to check if MMS is running
            checkMMInterval = setInterval(() => api.checkMMStatus(), 1000);
        } else {
            // trigger login error
            console.log('error login');
        }
    })

    api.on('MMStatus', (status) => {
        // WIP:count and trigger and error if too much attemps
        if (status === MMStates.close && mmsState !== MMStates.close) {
            emitter.send('loading', { type: 'add', key: 2 });
            mmsState = MMStates.close;
        }

        if (status === MMStates.open && mmsState !== MMStates.open) {
            // first market open > store userpass
            api.getUserpass();
            mmsState = MMStates.open;
        }
    })

    api.on('updateUserInfo', (data) => {
        emitter.send('updateUserInfo', data);
        emitter.send('watchPortfolio');
        emitter.send('loading', { type: 'delete', key: 2 });
    })
}
