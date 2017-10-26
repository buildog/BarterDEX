/*
    portfolio Events handler
*/


export const portfolioEvents = ({ api, emitter, listener }) => {
    listener.on('enableCoin', (e, params) => {
        emitter.send('loading', { type: 'add', key: 4 });
        api.enableCoin(params);
    });

    listener.on('disableCoin', (e, params) => {
        api.disableCoin(params);
    });

    listener.on('refreshPortfolio', () => {
        api.fetchMarket();
        api.fetchCoins();
    });

    api.on('setPortfolio', (data) => {
        /* intercept callback from API and update the store */
        emitter.send('setPortfolio', data);
    })

    api.on('marketUpdate', (data) => emitter.send('marketUpdate', data))

    api.on('coinsList', (coins) => { emitter.send('coinsList', coins) })
}
