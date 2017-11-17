import log from 'electron-log';
import request from 'requestretry';


import { main } from './config/config';
import { electrumConfig } from './constants'
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


process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});

class Emitter extends EventEmitter {
    constructor({ config }) {
        super();
        this.config = config;
        this.userLogout = false;
        this.loginAttempts = 0;
        this.looping = {};
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
                    method: 'POST',
                    url,
                    form: jsonData,
                    headers: headersOpt,
                    json: true,
                    maxAttempts: data.attempts || 10,
                    retryDelay: data.delay || 200,
                    timeout: 5000
                }, (error, response, body) => {
                if (error) {
                    return reject(error);
                }

                return resolve(body);
            });
        }).catch((e) => {
            console.log(`endpoint ${data.method} failed`)
            console.log(e);
            // self.emit('notifier', { error: 5 })
        });
    }

    logout() {
        this.userpass = '';
        this.mypubkey = '';
        this.coins = '';
        this.autosplitLoop && clearTimeout(this.autosplitLoop);
        this.endpointCheckInterval && clearInterval(this.endpointCheckInterval);
        this.emit('logoutCallback', { type: 'success' });
    }


    bootstrap(data) {
        const self = this;
        self.userLogout = false;
        const userpass = data.userpass;

        if (userpass) {
            /* already logged in*/
            self.userpass = userpass;
            self.prepareElectrum();
            self.emit('updateUserInfo', { userpass });
            return;
        }

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
            // HOTFIX: marketmaker launched via terminal
            if (instance === 1000) {
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
                self.loginAttempts += 1;
                if (self.loginAttempts < 10) {
                    self.getUserpass({ passphrase, userpass }).then(() => {
                        clearInterval(self.endpointCheckInterval);
                    }).catch((e) => {
                        console.log(e)
                        console.log('login endpoint not yet ready');
                        self.emit('growler', { key: 9, desc: e })
                    });
                } else {
                    self.loginAttempts = 0;
                    clearInterval(self.endpointCheckInterval);
                    self.bootstrap(data);
                }
            }, 3000);
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
                !self.userLogout && self.emit('notifier', { error: 4, desc: stderr });
            }
        });
    }

    fetchCoins() {
        const self = this;
        if (self.looping.coins) {
            return
        }

        self.looping.coins = true;
        self.getCoins().then((coinsList) => {
            self.looping.coins = false;
            self.emit('coinsList', coinsList);
        })
    }


    fetchMarket() {
        const self = this;
        request('http://coincap.io/front', (error, response, body) => {
            isJsonString(body) && self.emit('marketUpdate', { data: JSON.parse(body) });
        });
    }

    fetchBots() {
        const self = this;
        const data = { userpass: self.userpass, method: 'bot_list' };
        const url = 'http://127.0.0.1:7783';

        return new Promise((resolve, reject) => this.apiRequest({ data, url }).then((botList) => {
            self.emit('botlist', botList)
            botList.map((botID) => self.botstatus(botID));
            resolve(botList);
        }).catch((error) => {
            // console.log(`error fetch botid`)
            reject(error);
        }));
    }

    fetchRecentSwaps() {
        const self = this;
        const data = { userpass: self.userpass, method: 'recentswaps', limit: 20 };
        const url = 'http://127.0.0.1:7783';

        return new Promise((resolve, reject) => this.apiRequest({ data, url }).then((swapsList) => {
            self.emit('recentswaps', swapsList)
            resolve(swapsList);
        }).catch((error) => {
            reject(error);
        }));
    }


    fetchSwaps() {
        const self = this;
        const data = { userpass: self.userpass, method: 'swapstatus', limit: 20 };
        const url = 'http://127.0.0.1:7783';

        return new Promise((resolve, reject) => this.apiRequest({ data, url }).then((swapsList) => {
            self.emit('swaps', swapsList)
            swapsList.swaps.map((swap) => self.swapstatus(swap));
            resolve(swapsList);
        }).catch((error) => {
            reject(error);
        }));
    }


    prepareElectrum() {
        const self = this;
        self.getCoins(false).then((coins) => {
            const alreadyActivated = coins.filter((coin) => coin.electrum).map((coin) => coin.coin);
            return self.activateElectums(alreadyActivated);
        })
    }

    activateElectums(alreadyActivated) {
        const self = this;
        const toActivate = [];
        Object.keys(electrumConfig).map((key) => {
            if (alreadyActivated.indexOf(key) > -1) {
                console.log(`${key} already activated`)
                return false;
            }
            return electrumConfig[key].map((svr) => {
                console.log(`activating ${key}`)
                return toActivate.push({ coin: key, electrum: true, ipaddr: Object.keys(svr)[0], port: svr[Object.keys(svr)] });
            });
        })


        const promises = () => toActivate.map((svr) => self.enableCoin(svr));

        return Promise.all(promises()).then(() => {
            console.log('all electrums ready')
            self.emit('coinsActivated')
        });
    }

    getUserpass({ passphrase }) {
        const self = this;
        const data = { method: 'passphrase', passphrase };
        const url = 'http://127.0.0.1:7783';

        return new Promise((resolve, reject) => this.apiRequest({ data, url, attempts: 1 }).then((result) => {
            if (!result.error) {
                const { userpass, mypubkey } = result;

                console.log('logged in!');
                self.userpass = userpass;
                self.mypubkey = mypubkey;

                self.emit('updateUserInfo', { userpass, mypubkey, passphrase })
                self.prepareElectrum();

                resolve('logged in');
            } else {
                console.log('error login')
                console.log(result.error);
                reject(result.error);
            }
        }).catch((error) => {
            console.log('error login')
            console.log(error)
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
            // console.log(`error getbalance ${coin}`);
            // self.emit('growler', { key: 5 })
            reject(error);
        }));
    }


    getCoins(listunspent = true) {
        const self = this;
        const data = { userpass: self.userpass, method: 'getcoins' };
        const url = 'http://127.0.0.1:7783';
        const fetch = new Promise((resolve, reject) => this.apiRequest({ data, url }).then((result) => {
            resolve(result);
        }).catch((error) => {
            console.log(`error getcoins`);
            // console.log(error)
            reject(error);
        }));

        const updateBalance = (coinList) => coinList.map((coin) => {
            if (coin.electrum && listunspent) {
                return self.listunspent({ coin: coin.coin, address: coin.smartaddress }).then(() =>
                self.balance({ coin: coin.coin, address: coin.smartaddress }).then((coinBalance) => {
                    coin.balance = coinBalance.balance;
                    return coin;
                }).catch(() => coin))
            }

            return coin;
        })

        return fetch.then((coinList) => {
            if (coinList) {
                return Promise.all(updateBalance(coinList || []));
            }

            return [];
        })
    }

    enableCoin({ coin, type, electrum = false, ipaddr, port }) {
        const self = this;
        let data;

        if (electrum) {
            data = { userpass: self.userpass, method: 'electrum', coin, ipaddr, port };
        } else {
            data = { userpass: self.userpass, method: 'enable', coin };
        }
        const url = 'http://127.0.0.1:7783';


        return this.apiRequest({ data, url }).then((result) => {
            console.log(result);
            self.emit('coinEnabled', { coin });
            if (type) {
                self.emit('updateTrade', { coin, type });
            }
        }).catch((error) => {
            // retry
            console.log(error)
            // this.enableCoin({ coin, type, electrum, ipaddr, port });
            // self.emit('notifier', { error: 3, desc: error })
        });
    }

    fetchPortfolio() {
        const self = this;
        const data = { userpass: self.userpass, method: 'portfolio' };
        const url = 'http://127.0.0.1:7783';
        return this.apiRequest({ data, url }).then((result) => {
            // body.portfolio.map((item) => item.balance = self.balance({ coin: item.coin, address: item.address }))

            self.emit('setPortfolio', { portfolio: result.portfolio });
        }).catch((error) => {
            self.emit('growler', { key: 3, desc: marketmakerBin })
        });
    }

    orderbook({ base, rel }) {
        const self = this;
        const data = { userpass: this.userpass, method: 'orderbook', base, rel };
        const url = 'http://127.0.0.1:7783';
        return this.apiRequest({ data, url }).then((result) => {
            self.emit('orderbook', { base, rel, data: result })
        }).catch((error) => {
            self.emit('growler', { key: 4 })
        });
    }

    trade({ method = 'bot_sell', base, rel, price, volume }) {
        const self = this;
        const data = { userpass: self.userpass, method, base, rel, timeout: 30 };

        if (method === 'bot_sell') {
            data.basevolume = volume;
            data.minprice = price;
        }

        if (method === 'sell') {
            data.basevolume = volume;
            data.price = price;
        }

        if (method === 'bot_buy') {
            data.relvolume = volume;
            data.maxprice = price;
        }

        if (method === 'buy') {
            data.relvolume = volume;
            data.price = price;
        }

        const url = 'http://127.0.0.1:7783';

        const tradeRequest = () => self.apiRequest({ data, url }).then((result) => {
            console.log(`${method} submitted`);
            console.log(result);
            if (!result.error) {
                return self.emit('trade', result);
            }

            if (result.withdraw) {
                if (result.withdraw.complete === true) {
                    self.emit('loading', { type: 'add', key: 7 });

                    return self.sendrawtransaction({ coin: rel, signedtx: result.withdraw.hex }).then((confirm) => {
                        if (confirm.error) {
                            return self.emit('growler', { key: 8, desc: confirm.error })
                        }
                        self.autosplitLoop = setTimeout(() => {
                            self.emit('loading', { type: 'delete', key: 7 });
                            tradeRequest();
                        }, 40000);
                    })
                }
            } else {
                return self.emit('growler', { key: 6, desc: result.error });
            }
        }).catch((e) => {
            self.emit('growler', { key: 6 })
        });

        return tradeRequest();
    }


    botstatus(botid) {
        const self = this;
        const data = { userpass: self.userpass, method: 'bot_status', botid };
        const url = 'http://127.0.0.1:7783';

        return new Promise((resolve, reject) => this.apiRequest({ data, url }).then((botstatus) => {
            // console.log(`botstatus ${botid}`);
            self.emit('botstatus', botstatus)
            resolve(botstatus);
        }).catch((error) => {
            // console.log(`error botstatus ${botid}`)
            reject(error);
        }));
    }

    swapstatus({ requestid, quoteid }) {
        const self = this;
        const data = { userpass: self.userpass, method: 'swapstatus', requestid, quoteid };
        const url = 'http://127.0.0.1:7783';

        return new Promise((resolve, reject) => this.apiRequest({ data, url }).then((result) => {
            // console.log(`swap ${requestid} status`);
            // console.log(result);
            resolve(result);
            self.emit('swapstatus', result)
        }).catch((error) => {
            // console.log(`error botstatus ${requestid}`)
            reject(error);
        }));
    }

    toggleBot({ botid, method }) {
        const self = this;
        const data = { userpass: self.userpass, method, botid };
        const url = 'http://127.0.0.1:7783';

        return new Promise((resolve, reject) => this.apiRequest({ data, url }).then((botstatus) => {
            console.log(`${botid} ${method}`);
            if (method === 'bot_stop') {
                self.emit('growler', { key: 1 });
            } else if (method === 'bot_resume') {
                self.emit('growler', { key: 2 });
            } else if (method === 'bot_start') {
                self.emit('growler', { key: 10 });
            }

            resolve(botstatus);
        }).catch((error) => {
            // console.log(`error botstop ${botid}`)
            reject(error);
        }));
    }

    sendrawtransaction({ coin, signedtx, confirmation }) {
        const self = this;
        const data = { userpass: self.userpass, method: 'sendrawtransaction', coin, signedtx };
        const url = 'http://127.0.0.1:7783';

        return new Promise((resolve, reject) => this.apiRequest({ data, url }).then((result) => {
            console.log(`sendWithdraw ${coin}`);
            console.log(result);
            resolve(result);
            confirmation && self.emit('sendrawtransaction', result);
        }).catch((error) => {
            // console.log(`error sendWithdraw ${coin}`)
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

        const url = 'http://127.0.0.1:7783';
        return new Promise((resolve, reject) => this.apiRequest({ data, url }).then((result) => {
            confirmation && console.log(`withdraw for ${coin}`);
            !confirmation && console.log(`split balance into UTXOS for ${coin}`);
            console.log(result);
            if (result.complete) {
                confirmation && self.emit('confirmWithdraw', result);
            } else if (confirmation) {
                self.emit('growler', { key: 7, desc: result.error })
            } else {
                self.emit('growler', { key: 8 })
            }
            resolve(result);
        }).catch((error) => {
            // console.log('error withdraw')
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
            // console.log(`error inventory ${coin}`)
            reject(error);
        }));
    }

    listunspent({ coin, address }) {
        const self = this;
        const data = { userpass: self.userpass, method: 'listunspent', coin, address };
        const url = 'http://127.0.0.1:7783';
        return new Promise((resolve, reject) => this.apiRequest({ data, url }).then((result) => {
            resolve(result);
        }).catch((error) => {
            // console.log('error listunspent')
            reject(error);
        }));
    }

}

export const API = () => new Emitter({ config: main, log });
