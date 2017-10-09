/*
    portfolio Events handler
*/


export const portfolioEvents = ({ api, emitter, listener }) => {
    listener.on('enableCoin', (e, params) => {
        emitter.send('loading', { type: 'add', key: 4 });
        api.enableCoin(params);
    });

    listener.on('refreshPortfolio', () => api.fetchPortfolio());

    api.on('setPortfolio', (data) => {
        /* intercept callback from API and update the store */
        emitter.send('setPortfolio', data);
        emitter.send('loading', { type: 'delete', key: 4 });
        emitter.send('loading', { type: 'delete', key: 3 });
    })

    api.on('coinsList', (coins) => { emitter.send('coinsList', coins) })
}
