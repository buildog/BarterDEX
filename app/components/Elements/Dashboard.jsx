import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router';
import classNames from 'classnames';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

import { Orders } from '../';
import circles from '../../static/circlesWhite.svg';
import arrow from '../../static/arrow.svg';
import logo from '../../static/favicon.svg';

@inject('app')
@observer
class Dashboard extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            coinToEnable: ''
        }
    }

    setCoinToEnable = (coinToEnable) => {
        this.setState({ coinToEnable })
    }

    getClassState = (coin) => {
        const self = this;
        // const { loader } = this.props.app;
        // const activationLoader = loader.getLoader(4);
        return classNames({
            'coinList-coin': true,
            [coin]: true,
            enabling: self.state.coinToEnable === coin
        })
    }

    enableCoin = (e, coin) => {
        const { enableElectrum } = this.props.app.portfolio;
        enableElectrum(coin);
    }
    noticeBalance = () =>
         (<div className="dashboard-empty dashboard-empty-balance">

           <h3>No funds detected</h3>
           <p className="dashboard-empty-centered">Wait a minute for synchronization or add funds.</p>
         </div>)

    noticeNoCoin = () =>
         (<div className="dashboard-empty">

           <h3>No active coin detected</h3>
           <p>We didn't detected any coin wallet running on your machine.</p>
           <p>Run a coin wallet or add electrum coin via the top right button.</p>
         </div>)

    renderDashboard = () => {
        const { installedCoins, colors, total, renderBalance, getCoin } = this.props.app.portfolio;
        const { swaps } = this.props.app.trade;
        const hasRel = installedCoins.filter((coin) => coin.rel > 0);
        const hasBalance = installedCoins.filter((coin) => coin.balance > 0);
        return (
          <section className="dashboard-wallets">

            <header className="dashboard-wallets-header component-header">
              <i className="dashboard-empty-logo" dangerouslySetInnerHTML={{ __html: logo }} />

              { hasRel.length > 0 && <ResponsiveContainer className="dashboard-balances-pie">
                <PieChart>
                  <Pie
                    data={hasRel}
                    dataKey="rel"
                    startAngle={180}
                    endAngle={0}
                    isAnimationActive={false}
                  >
                    {hasRel.map((coin) => <Cell key={coin.coin} stroke="transparent" fill={colors[coin.coin]} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer> }
              { total.rel && <h1>
                <label>Estimated balance</label>
                <span>{ total.rel }</span>
                <small>{ total.fiat }</small>
              </h1> }

              { (hasBalance.length === 0 && installedCoins.length > 0) && this.noticeBalance() }

              <button>view swaps</button>

            </header>

            { installedCoins.length > 0 && <Orders /> }


            <ul className="dashboard-wallets-list">

              { installedCoins.map((installed) => {
                  const isElectrum = installed.electrum;
                  const isNative = !installed.electrum && installed.installed && installed.height > 0;
                  return (
                    <li key={installed.coin} className={this.getClassState(installed.coin)}>
                      <Link onClick={() => this.setCoinToEnable(installed.coin)} className={installed.coin} to={`/wallet/${installed.coin}/${isNative}`} activeClassName="active">
                        <div className="coinList-coin_icon coin-colorized"> { installed.icon }</div>
                        <div className={`coinList-coin_balance ${installed.coin}`}>
                          <strong className="coinList-coin_balance-name">{ installed.name }</strong>
                          { (isElectrum || isNative) ? <strong className="coinList-coin_balance-amount">{ renderBalance(installed.balance, installed.coin) } </strong> : ''}
                          { isElectrum && <small>Electrum mode</small> }
                          { isNative && <small>Native mode</small> }
                        </div>
                        <span className="coinList-coin_action" dangerouslySetInnerHTML={{ __html: arrow }} />
                        <span className="coinList-coin_action_loader" dangerouslySetInnerHTML={{ __html: circles }} />

                      </Link>
                    </li>
                  )
              }
            )}
            </ul>


          </section>

        )
    }


    render() {
        return (
          <section className="dashboard">
            { this.renderDashboard() }

          </section>
        )
    }
}

export default Dashboard
