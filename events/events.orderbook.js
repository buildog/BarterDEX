/*
    portfolio Events handler
*/


export const orderbookEvents = ({ api, emitter, listener }) => {
    listener.on('orderbook', (e, params) => api.orderbook(params));
    // update trademethod when coins are activated
    api.on('orderbook', (params) => { emitter.send('orderbook', params) })
}
