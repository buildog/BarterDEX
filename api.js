import log from 'electron-log';
import request from 'request';
import { main } from './config/config';
import io from 'socket.io-client';
import fs from 'fs-extra';
import ps from 'ps-node';

const exec = require('child_process').exec;
const EventEmitter = require('events');

const osPlatform = main.osPlatform;
const homeDir = main.homeDir;
const defaultCoinsListFile = main.defaultCoinsListFile;
const marketmakerBin = main.marketmakerBin;
const marketmakerDir = main.marketmakerDir;

const isJsonString = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}


class Emitter extends EventEmitter {
    constructor({ config }) {
        super();
        this.config = config;
        this.userLogout = false;
    }

    apiRequest({ data, url }) {
        data.gui = 'buildog';
        const jsonData = JSON.stringify(data);
        // Custom Header pass
        const headersOpt = {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(jsonData)
        };

        return new Promise((resolve, reject) => {
            request(
                {
                    method: 'post',
                    url,
                    form: jsonData,
                    headers: headersOpt,
                    json: true
                }, (error, response, body) => {
                if (error) {
                    return reject(error);
                }

                return resolve(body);
            });
        });
    }

    logout() {
        this.userpass = '';
        this.mypubkey = '';
        this.coins = '';
        this.emit('logoutCallback', { type: 'success' });
    }


    bootstrap(data) {
        const self = this;
        self.userLogout = false;
        const passphrase = data.passphrase.trim();

        const coinsListFile = `${marketmakerDir}/coins.json`;
        const coinslist = fs.readJsonSync(defaultCoinsListFile, { throws: false });

        const copyFile = () => {
            fs.copy(defaultCoinsListFile, coinsListFile)
                .then(() => {
                    console.log('file copied!');
                    return self.execMarketMaker({ coinslist, passphrase });
                })
                .catch(err => {
                    console.error(err)
                })
        }


        return this.checkMMStatus().then((instance) => {
            if (instance === 0) {
                console.log('marketmaker not running')
                fs.pathExists(coinsListFile, (err, exists) => {
                    if (exists === true) {
                        console.log('coinslist file exist, updating');
                        fs.unlinkSync(coinsListFile);
                        copyFile();
                    } else if (exists === false) {
                        console.log('coinslist file doesn\'t exist');
                        copyFile();
                    }
                    if (err) {
                        console.log(err) // => null
                    }
                })
            } else {
                console.log(`found ${instance} marketmaker process`);
            }


            // Wait for endoint to respond before accepting others requests
            self.endpointCheckInterval = setInterval(() => {
                self.getUserpass(passphrase).then(() => {
                    clearInterval(self.endpointCheckInterval);
                }).catch(() => {
                    console.log('login endpoint not yet ready')
                });
            }, 1000);
        });
    }


    checkMMStatus() {
        const self = this;

        return new Promise((resolve) => ps.lookup({}, (err, instances) => {
            if (err) {
                throw new Error(err);
            }

            const countInstances = instances.filter((instance) => instance.command.indexOf('marketmaker') !== -1).length;
            self.emit('MMStatus', countInstances === 0 ? 'closed' : 'open');

            return resolve(countInstances)
        }));
    }

    execMarketMaker(data) {
        console.log('exec marketmaker');

        const self = this;
          // start marketmaker via exec
        let params = {
            gui: 'buildog',
            client: 1,
            userhome: homeDir,
            passphrase: data.passphrase.trim()
        };


        if (osPlatform !== 'win32') {
            params.coins = data.coinslist;
            params = JSON.stringify(params);
            params = `'${params}'`;
        } else {
            params = JSON.stringify(params);
            params = params.replace(/"/g, '\\"');
            params = `"${params}"`;
        }

        exec(`"${marketmakerBin}" ${params}`, { cwd: marketmakerDir }, (error, stdout, stderr) => {
            console.log(`stdout: ${stdout}`);
            if (stderr.length) {
                console.log(`stderr: ${stderr}`);
                !self.userLogout && self.emit('notifier', { error: 9, desc: stderr });
            }
        });
    }

    fetchMarket() {
        const self = this;
        request('http://coincap.io/front', (error, response, body) => {
            isJsonString(body) && self.emit('marketUpdate', { data: JSON.parse(body) });
        });
    }

    fetchCoins() {
        const self = this;

        self.getCoins().then((coinsList) => {
            self.emit('coinsList', coinsList);
        })
    }

    fetchBots() {
        const self = this;
        const data = { userpass: self.userpass, method: 'bot_list' };
        const url = 'http://127.0.0.1:7783';

        const fetch = new Promise((resolve, reject) => this.apiRequest({ data, url }).then((result) => {
            console.log('botIDs');
            console.log(result);
            resolve(result);
        }).catch((error) => {
            console.log(`error getcoin ${coin}`)
            reject(error);
        }));


        const getstatus = (botList) => botList.map((botID) => self.botstatus(botID).then((botStatus) => botStatus))

        return fetch.then((botList) => Promise.all(getstatus(botList))).then((botlist) => self.emit('botstatus', botlist))
    }

    getUserpass(passphrase) {
        const self = this;
        const data = { method: 'passphrase', passphrase };
        const url = 'http://127.0.0.1:7783';

        return new Promise((resolve, reject) => this.apiRequest({ data, url }).then((result) => {
            const { userpass, mypubkey } = result;
            console.log('logged in!');
            self.userpass = userpass;
            self.mypubkey = mypubkey;
            self.emit('updateUserInfo', { userpass, mypubkey, passphrase });


            self.getCoins(false).then((coinsList) => {
                // coinsList may return an object instead of an array if it's the first call which return the userpass.
                self.emit('coinsList', coinsList.coins || coinsList);
            })

            resolve('logged in');
        }).catch((error) => {
            reject(error);
        }));
    }


    balance({ coin, address }) {
        const self = this;
        const data = { userpass: self.userpass, method: 'balance', coin, address };
        const url = 'http://127.0.0.1:7783';

        return new Promise((resolve, reject) => this.apiRequest({ data, url }).then((result) => {
            resolve(result);
        }).catch((error) => {
            console.log(`error getbalance ${coin}`)
            reject(error);
        }));
    }


    getCoins(fetchBalance = true) {
        const self = this;
        const data = { userpass: self.userpass, method: 'getcoins' };
        const url = 'http://127.0.0.1:7783';

        const fetch = new Promise((resolve, reject) => this.apiRequest({ data, url }).then((result) => {
            resolve(result);
        }).catch((error) => {
            console.log(`error getcoin ${coin}`)
            reject(error);
        }));


        const updateBalance = (coinList) => coinList.map((coin) => {
            if (coin.electrum && fetchBalance) {
                return self.balance({ coin: coin.coin, address: coin.smartaddress }).then((coinBalance) => {
                    coin.balance = coinBalance.balance;
                    return coin;
                });
            }

            return coin;
        })

        return fetch.then((coinList) => Promise.all(updateBalance(coinList || [])))
    }

    disableCoin({ coin = '', type }) {
        const self = this;

        const data = { userpass: self.userpass, method: 'disable', coin };

        const url = 'http://127.0.0.1:7783';

        this.apiRequest({ data, url }).then((result) => {
            self.fetchPortfolio(() => this.emit('updateTrade', { coin, type }));
        }).catch((error) => {
            self.emit('notifier', { error: 3 })
        });
    }


    enableCoin({ coin = '', type, electrum = false, ipaddr, port }) {
        const self = this;
        let data;

        if (electrum) {
            data = { userpass: self.userpass, method: 'electrum', coin, ipaddr, port };
        } else {
            data = { userpass: self.userpass, method: 'enable', coin };
        }
        const url = 'http://127.0.0.1:7783';
        console.log(`enabling ${coin}`);

        this.apiRequest({ data, url }).then((result) => {
            if (result.error) {
                return self.emit('notifier', { error: 3, desc: result.error })
            }
            self.getCoins(false).then((coinsList) => {
                self.emit('coinsList', coinsList);
                self.emit('coinEnabled', { coin });
                if (type) {
                    self.emit('updateTrade', { coin, type });
                }
            })
        }).catch((error) => {
            self.emit('notifier', { error: 3 })
        });
    }

    fetchPortfolio() {
        const self = this;
        const data = { userpass: self.userpass, method: 'portfolio' };
        const url = 'http://127.0.0.1:7783';
        this.apiRequest({ data, url }).then((result) => {
            // body.portfolio.map((item) => item.balance = self.balance({ coin: item.coin, address: item.address }))

            self.emit('setPortfolio', { portfolio: result.portfolio });
        }).catch((error) => {
            self.emit('notifier', { error: 4, desc: marketmakerBin })
        });
    }

    orderbook({ base, rel }) {
        const self = this;
        const data = { userpass: this.userpass, method: 'orderbook', base, rel };
        const url = 'http://127.0.0.1:7783';
        this.apiRequest({ data, url }).then((result) => {
            self.emit('orderbook', { base, rel, data: result })
        }).catch((error) => {
            self.emit('notifier', { error: 5 })
        });
    }

    trade({ method = 'bot_sell', base, rel, price, volume, smartaddress }) {
        const self = this;

        console.log(smartaddress);
        const data = { userpass: self.userpass, method, base, rel };

        if (method === 'bot_sell') {
            data.basevolume = volume;
            data.minprice = price;
        } else {
            data.relvolume = volume;
            data.maxprice = price;
        }


        const url = 'http://127.0.0.1:7783';

        const tradeRequest = () => self.apiRequest({ data, url }).then((result) => {
            console.log(`${method} submitted`);
            console.log(result);
            if (!result.error) {
                self.emit('trade', result);
            } else {
                self.emit('notifier', { error: 7, desc: result.error })
            }
        }).catch((error) => {
            self.emit('notifier', { error: 7 })
        });


        return self.inventory({ coin: rel }).then(({ alice }) => {
            // volume/3 + 5*txfee <- 3 times and txfee 3 times
            if (alice.length < 6) {
                const txfee = (volume / 3 + (2 * (volume / 100)));
                const mainSplit = volume + (5 * txfee);

                self.emit('loading', { type: 'add', key: 7 });

                return self.withdraw({
                    address: smartaddress,
                    coin: rel,
                    amounts: [
                        { [smartaddress]: mainSplit },
                        { [smartaddress]: mainSplit },
                        { [smartaddress]: mainSplit },
                        { [smartaddress]: txfee },
                        { [smartaddress]: txfee },
                        { [smartaddress]: txfee }
                    ]
                }).then((withdrawResult) => {
                    self.sendrawtransaction({ coin: rel, signedtx: withdrawResult.hex }).then(() => {
                        setTimeout(() => {
                            self.emit('loading', { type: 'delete', key: 7 });
                            tradeRequest();
                        }, 80000);
                    })
                })
            }

            return tradeRequest();
        })
    }


    botstatus(botid) {
        const self = this;
        const data = { userpass: self.userpass, method: 'bot_status', botid };
        const url = 'http://127.0.0.1:7783';

        return new Promise((resolve, reject) => this.apiRequest({ data, url }).then((result) => {
            console.log(`${botid} status`);
            console.log(result);
            resolve(result);
        }).catch((error) => {
            console.log(`error botstatus ${botid}`)
            reject(error);
        }));
    }

    toggleBot({ botid, method }) {
        const self = this;
        const data = { userpass: self.userpass, method, botid };
        const url = 'http://127.0.0.1:7783';

        return new Promise((resolve, reject) => this.apiRequest({ data, url }).then((result) => {
            console.log(`${botid} ${method}`);
            if (method === 'bot_stop') {
                self.emit('botStopped', result);
            } else {
                self.emit('botResumed', result);
            }

            resolve(result);
        }).catch((error) => {
            console.log(`error botstop ${botid}`)
            reject(error);
        }));
    }

    sendrawtransaction({ coin, signedtx, confirmation }) {
        const self = this;
        const data = { userpass: self.userpass, method: 'sendrawtransaction', coin, signedtx };
        const url = 'http://127.0.0.1:7783';
        console.log(data);
        return new Promise((resolve, reject) => this.apiRequest({ data, url }).then((result) => {
            console.log(`sendWithdraw ${coin}`);
            console.log(result);
            resolve(result);
            confirmation && self.emit('sendrawtransaction', result);
        }).catch((error) => {
            console.log(`error sendWithdraw ${coin}`)
            reject(error);
        }));
    }

    withdraw({ address, coin, amount, amounts, confirmation }) {
        const outputs = amounts || [{ [address]: amount }];
        const self = this;
        const data = { userpass: self.userpass,
            method: 'withdraw',
            coin,
            outputs };

        console.log(data);
        const url = 'http://127.0.0.1:7783';
        return new Promise((resolve, reject) => this.apiRequest({ data, url }).then((result) => {
            confirmation && console.log(`withdraw for ${coin}`);
            !confirmation && console.log(`split balance into UTXOS for ${coin}`);
            console.log(result);
            if (result.complete) {
                confirmation && self.emit('confirmWithdraw', result);
            } else if (confirmation) {
                self.emit('notifier', { error: 10, desc: result.error })
            } else {
                self.emit('notifier', { error: 11 })
            }
            resolve(result);
        }).catch((error) => {
            console.log('error withdraw')
            reject(error);
        }));
    }

    inventory({ coin }) {
        const self = this;
        const data = { userpass: self.userpass, method: 'inventory', coin };
        const url = 'http://127.0.0.1:7783';
        console.log(`inventory for ${coin}`);

        return new Promise((resolve, reject) => this.apiRequest({ data, url }).then((result) => {
            console.log(result);
            resolve(result);
        }).catch((error) => {
            console.log(`error inventory ${coin}`)
            reject(error);
        }));
    }

    listunspent({ coin, address }) {
        const self = this;
        const data = { userpass: self.userpass, method: 'listunspent', coin, address };
        const url = 'http://127.0.0.1:7783';
        console.log(`listunspent for ${coin}`);

        return new Promise((resolve, reject) => this.apiRequest({ data, url }).then((result) => {
            console.log(result);
            resolve(result);
        }).catch((error) => {
            console.log('error listunspent')
            reject(error);
        }));
    }

}

export const API = () => new Emitter({ config: main, log });
