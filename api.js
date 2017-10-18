import log from 'electron-log';
import request from 'request';
import { main } from './config/config';
import io from 'socket.io-client';
import fs from 'fs-extra';
import portscanner from 'portscanner';

const exec = require('child_process').exec;
const EventEmitter = require('events');

const osPlatform = main.osPlatform;
const defaultCoinsListFile = main.defaultCoinsListFile;
const marketmakerBin = main.marketmakerBin;
const marketmakerDir = main.marketmakerDir;


class Emitter extends EventEmitter {
    constructor({ config }) {
        super();
        this.config = config;
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

    startIguana() {
        const data = { herd: 'iguana' };
        const url = 'http://127.0.0.1:17777/shepherd/herd';

        this.apiRequest({ data, url }).then((result) => {
            const AjaxOutputData = JSON.parse(data);
        })
    }

    startCorsproxy() {
        const data = { herd: 'corsproxy' };
        const url = 'http://127.0.0.1:17777/shepherd/herd';

        this.apiRequest({ data, url }).then((result) => {
            const AjaxOutputData = JSON.parse(result);
        })
    }


    startKomodod() {
        const data = { herd: 'komodod' };
        const url = 'http://127.0.0.1:17777/shepherd/herd';

        this.apiRequest({ data, url }).then((result) => {
            const AjaxOutputData = JSON.parse(result);
        })
    }


    // kill rogue marketmaker copies on start
    killMarketmaker(data) {
        const self = this;
        if (data === true) {
            let marketmakerGrep;

            switch (osPlatform) {
            case 'darwin':
                marketmakerGrep = 'ps -p $(ps -A | grep -m1 marketmaker | awk \'{print $1}\') | grep -i marketmaker';
                break;
            case 'linux':
                marketmakerGrep = 'ps -p $(pidof marketmaker) | grep -i marketmaker';
                break;
            case 'win32':
                marketmakerGrep = 'tasklist';
                break;
            default:
                break;
            }

            exec(marketmakerGrep, (error, stdout, stderr) => {
                if (stdout.indexOf('marketmaker') > -1) {
                    const pkillCmd = osPlatform === 'win32' ? 'taskkill /f /im marketmaker.exe' : 'pkill -15 marketmaker';

                    console.log('found another marketmaker process(es)');

                    exec(pkillCmd, (error, stdout, stderr) => {
                        console.log(`${pkillCmd} is issued`);

                        if (error !== null) {
                            console.log(`${pkillCmd} exec error: ${error}`);
                        }
                    });
                }

                if (error !== null) {
                    console.log(`${marketmakerGrep} exec error: ${error}`);
                } else {
                    self.emit('logoutCallback', { type: 'success' });
                    self.userpass = '';
                    self.mypubkey = '';
                    self.coins = '';
                }
            });
        }
    }


    startMarketMaker(data) {
        const self = this;
          // console.log(data.passphrase);
        try {
          // check if marketmaker instance is already running
            portscanner.checkPortStatus(7783, '127.0.0.1', (error, status) => {
            // Status is 'open' if currently in use or 'closed' if available
                if (status === 'closed') {
                    const passphrase = data.passphrase;
                    const coinsListFile = `${marketmakerDir}/coinslist.json`;
                    const coinslist = fs.readJsonSync(coinsListFile, { throws: false });
                    fs.pathExists(coinsListFile, (err, exists) => {
                        if (exists === true) {
                            self.execMarketMaker({ coinslist, passphrase });
                        } else if (exists === false) {
                            console.log('coinslist file doesn\'t exist');
                            fs.copy(defaultCoinsListFile, coinsListFile)
                            .then(() => {
                                console.log('file copied!');
                                self.execMarketMaker({ coinslist, passphrase });
                            })
                            .catch(err => {
                                console.error(err)
                            })
                        }
                        if (err) {
                            console.log(err) // => null
                        }
                    })
                } else {
                    console.log(`port 7783 marketmaker is already in use`);
                    this.emit('notifier', { error: 1 });
                }
            });
        } catch (e) {
            console.log(`failed to start marketmaker err: ${e}`);
        }
    }


    execMarketMaker(data) {
        const self = this;
          // start marketmaker via exec
        const customParam = {
            gui: 'buildog',
            client: 1,
            userhome: `${process.env.HOME}`,
            passphrase: data.passphrase.trim(),
            coins: data.coinslist
        };
        exec(`${marketmakerBin} '${JSON.stringify(customParam)}'`, {
            cwd: marketmakerDir
            // maxBuffer: 1024 * 10000 // 10 mb
        }, (error, stdout, stderr) => {
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            console.log('exed');
        });

        self.emit('loginCallback', { type: 'success' });
    }

    checkMMStatus() {
        const self = this;
        portscanner.checkPortStatus(7783, '127.0.0.1', (error, status) => {
            self.emit('MMStatus', status);
        })
    }

    getUserpass() {
        const self = this;
        const data = { userpass: null, method: 'enable', coin: '' };
        const url = 'http://127.0.0.1:7783';

        this.apiRequest({ data, url }).then((result) => {
            const { coins, userpass, mypubkey } = result;
            self.emit('updateUserInfo', { coins, userpass, mypubkey });
            self.userpass = userpass;
            self.mypubkey = mypubkey;
            self.coins = coins;
            console.log('logged in')
            self.emit('coinsList', coins);
        }).catch((error) => {
            self.emit('notifier', { error: 2, desc: error })
        });
    }


    enableCoin({ coin = '', type }) {
        const self = this;

        // const data = { userpass: self.userpass, method: 'enable', coin };
        // electrum
        const data = { userpass: self.userpass, method: 'electrum', coin, ipaddr: '173.212.225.176', port: 50001 };

        const url = 'http://127.0.0.1:7783';

        this.apiRequest({ data, url }).then((result) => {
            if (result.error) {
                return self.emit('notifier', { error: 3, desc: result.error })
            }

            console.log(`${coin} enabled for Trade${type}`);
            console.log(result);
            self.fetchPortfolio(() => this.emit('updateTrade', { coin, type }));
        }).catch((error) => {
            self.emit('notifier', { error: 3 })
        });
    }

    fetchPortfolio(cb) {
        const self = this;
        const data = { userpass: self.userpass, method: 'portfolio' };
        const url = 'http://127.0.0.1:7783';
        this.apiRequest({ data, url }).then((result) => {
            // body.portfolio.map((item) => item.balance = self.balance({ coin: item.coin, address: item.address }))
            self.emit('setPortfolio', { portfolio: result.portfolio });
            cb && cb();
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

    balance({ coin, address }) {
        const self = this;
        const data = { userpass: self.userpass, method: 'balance', coin, address };
        const url = 'http://127.0.0.1:7783';

        this.apiRequest({ data, url }).then((result) => result).catch((error) => {
            self.emit('notifier', { error: 6 })
        });
    }

    trade({ method = 'buy', base, rel, price, relvolume }) {
        const self = this;
        const data = { userpass: self.userpass, method, base, rel, relvolume, price };
        const url = 'http://127.0.0.1:7783';
        self.inventory({ coin: rel }).then(() => {
            self.apiRequest({ data, url }).then((result) => {
                console.log(`buy order submitted`);
                console.log(result);
                if (!result.error) {
                    self.emit('trade', result);
                } else {
                    self.emit('notifier', { error: 7, desc: result.error })
                }
            }).catch((error) => {
                self.emit('notifier', { error: 7 })
            });
        })
    }


    sendrawtransaction({ coin, signedtx }) {
        const self = this;
        const data = { userpass: self.userpass, method: 'sendrawtransaction', coin, signedtx };
        const url = 'http://127.0.0.1:7783';

        return new Promise((resolve, reject) => this.apiRequest({ data, url }).then((result) => {
            console.log(`sendWithdraw ${coin}`);
            console.log(result);
            resolve(result);
        }).catch((error) => {
            console.log(`error sendWithdraw ${coin}`)
            reject(error);
        }));
    }

    withdraw({ address, coin }) {
        const self = this;
        const data = { userpass: self.userpass,
            method: 'withdraw',
            coin,
            outputs: [{ [address]: 0.001 }, { [address]: 0.002 }] };
        const url = 'http://127.0.0.1:7783';
        return new Promise((resolve, reject) => this.apiRequest({ data, url }).then((result) => {
            console.log(`withdraw for ${coin}`);
            console.log(result);
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

        return new Promise((resolve, reject) => this.apiRequest({ data, url }).then((result) => {
            console.log(`inventory for ${coin}`);
            console.log(result);
            if (result.alice.length < 3) {
                self.withdraw({ address: result.alice[0].address, coin: result.alice[0].coin }).then((withdrawResult) => {
                    self.sendrawtransaction({ coin, signedtx: withdrawResult.hex }).then(() => {
                        resolve(result);
                    })
                })
            } else {
                resolve(result);
            }
        }).catch((error) => {
            console.log(`error inventory ${coin}`)
            reject(error);
        }));
    }

    listunspent({ coin, address }) {
        const self = this;
        const data = { userpass: self.userpass, method: 'listunspent', coin, address };
        const url = 'http://127.0.0.1:7783';

        return new Promise((resolve, reject) => this.apiRequest({ data, url }).then((result) => {
            console.log(`listunspent for ${coin}`);
            console.log(result);
            resolve(result);
        }).catch((error) => {
            console.log('error listunspent')
            reject(error);
        }));
    }

}

export const API = () => new Emitter({ config: main, log });
