/*
    Market Events handler
*/


export const tradeEvents = ({ api, emitter, listener }) => {
    listener.on('trade', (e, params) => {
        emitter.send('loading', { type: 'add', key: 5 });
        api.trade(params)
    });

    listener.on('toggleBot', (e, params) => {
        api.toggleBot(params)
    });

    // update trademethod when coins are activated
    api.on('updateTrade', (params) => {
        emitter.send('loading', { type: 'delete', key: 4 });
        emitter.send('updateTrade', params);
    })

    // cb trade
    api.on('trade', (params) => {
        emitter.send('loading', { type: 'delete', key: 5 });
        emitter.send('growler', { key: 0 });
        emitter.send('trade', params);
    })

    api.on('botlist', (result) => emitter.send('botlist', result))
    api.on('botstatus', (result) => emitter.send('botstatus', result))
    api.on('swaps', (result) => emitter.send('swaps', result))
    api.on('recentswaps', (result) => emitter.send('recentswaps', result))
    api.on('swapstatus', (result) => emitter.send('swapstatus', result))
}
