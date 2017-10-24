/*
    Market Events handler
*/


export const marketEvents = ({ api, emitter, listener }) => {
    listener.on('trade', (e, params) => {
        emitter.send('loading', { type: 'add', key: 5 });
        api.trade(params)
    });

    // update trademethod when coins are activated
    api.on('updateTrade', (params) => { emitter.send('updateTrade', params) })

    // cb trade
    api.on('trade', (params) => {
        emitter.send('loading', { type: 'delete', key: 5 });
        emitter.send('trade', params);
    })
}
