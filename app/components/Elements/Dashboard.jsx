import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router';
import classNames from 'classnames';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

import { Orders } from '../';
import circles from '../../static/circles.svg';
import circlesW from '../../static/circlesWhite.svg';
import arrow from '../../static/arrow.svg';
import logo from '../../static/favicon.svg';
import history from '../../static/history.svg';

@inject('app')
@observer
class Dashboard extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            coinToEnable: '',
            viewSwap: false
        }
    }

    setCoinToEnable = (coinToEnable) => {
        this.setState({ coinToEnable })
    }

    getDashboardState = (hasCoin) => {
        const self = this;
        const { installedCoins } = this.props.app.portfolio;

        return classNames({
            dashboard: true,
            enabling: installedCoins.length === 0
        })
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

    noticeBalance = () =>
         (<div className="dashboard-empty dashboard-empty-balance">

           <h3>No funds detected</h3>
           <p className="dashboard-empty-centered">Wait a minute for synchronization or add funds.</p>
         </div>)

    noticeNoCoin = () =>
         (<div className="dashboard-empty">

           <i className="loader-svg" dangerouslySetInnerHTML={{ __html: circles }} />
           <p>Getting your coins ready.</p>
           <p>it could take up to a minute.</p>
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

              { installedCoins.length > 0 && <button className="action dark" onClick={() => this.setState({ viewSwap: !this.state.viewSwap })}>
                { this.state.viewSwap ? <span>close history</span> : <span>swap history</span> }
                <i dangerouslySetInnerHTML={{ __html: history }} />
              </button> }

            </header>

            { installedCoins.length === 0 && this.noticeNoCoin() }
            { installedCoins.length > 0 && this.state.viewSwap && <section className="dashboard-swaps"><Orders all /></section>}


            { !this.state.viewSwap && <ul className="dashboard-wallets-list">

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
                        <span className="coinList-coin_action_loader" dangerouslySetInnerHTML={{ __html: circlesW }} />

                      </Link>
                    </li>
                  )
              }
            )}
            </ul> }


          </section>

        )
    }


    render() {
        return (
          <section className={this.getDashboardState()}>
            { this.renderDashboard() }

          </section>
        )
    }
}

export default Dashboard
