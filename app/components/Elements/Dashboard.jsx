import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router';
import classNames from 'classnames';

import { CoinPicker } from '../';
import plus from '../../static/plus.svg';
import arrow from '../../static/arrow.svg';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

@inject('app')
@observer
class Dashboard extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            coinToEnable: '',
            picker: false
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
            'dashboard-wallets-list-item': true,
            [coin]: true,
            enabling: self.state.coinToEnable === coin
        })
    }
    togglePicker = (e) => {
        this.setState({ picker: !this.state.picker });
        e.stopPropagation();
    }

    electrumPicker = () => (<ul>
      <li>test</li>
    </ul>)

    renderDashboard = () => {
        // const { tradeBase, tradeRel, coinsList } = this.props.app.portfolio;
        const { installedCoins, colors, kmdTotal, portfolioRenderFIAT } = this.props.app.portfolio;
        const nullValue = installedCoins.filter((coin) => coin.balance > 0 && coin.KMDvalue === 0);
        const hasBalances = installedCoins.filter((coin) => coin.balance > 0).length > 0;

        return (
          <section className="dashboard-wallets">
            <header className="dashboard-wallets-header component-header">
              <h2>
                { !nullValue.length && hasBalances && <ResponsiveContainer className="dashboard-balances-pie">
                  <PieChart>
                    <Pie
                      data={installedCoins.filter((coin) => coin.KMDvalue > 0)}
                      dataKey="KMDvalue"
                      startAngle={180}
                      endAngle={0}
                      isAnimationActive={false}
                    >
                      {installedCoins.map((coin) => <Cell key={coin.coin} stroke="transparent" fill={colors[coin.coin]} />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer> }

                <div>Portfolio</div>
                <small><span>{ !nullValue.length && hasBalances && kmdTotal()}</span></small>

              </h2>
              <div>
                <button className="dashboard-wallets-header-add action primary" onClick={(e) => this.togglePicker(e)}>
                  <span>add coins</span>
                  <i dangerouslySetInnerHTML={{ __html: plus }} />
                </button>
                { this.state.picker && this.electrumPicker(this.state.picker) }
              </div>
            </header>
            <ul className="dashboard-wallets-list">
              { installedCoins.map((installed) => (
                <li key={installed.coin} className={this.getClassState(installed.coin)}>
                  <Link onClick={() => this.setCoinToEnable(installed.coin)} to={`/wallet/${installed.coin}`} activeClassName="active">
                    <div className="dashboard-wallets-list-item_icon coin-colorized"> { installed.icon }</div>
                    <div className="dashboard-wallets-list-item_balance">
                      <strong>{ installed.name }</strong>
                      <small>{ installed.balance } { installed.coin }</small>
                    </div>
                    <button className="dashboard-wallets-list-item_action" dangerouslySetInnerHTML={{ __html: arrow }} />
                  </Link>
                </li>))}
            </ul>
          </section>

        )
    }

    noticeNoCoin = () =>
        // const { installedCoins } = this.props.app.portfolio;
        // const { updateErrors } = this.props.app.notifier;
        // updateErrors({ error: 1, desc: 'you must have at least 2 coin wallet running in order to trade them on BarterDEX' });
         (<div className="dashboard-empty">
           <h3>No coin detected</h3>
           <p>We didn't detected any coin wallet running on your machine. Run a coin wallet or add electrum coin.</p>
         </div>)

    noticeSingle = () =>
             // const { installedCoins } = this.props.app.portfolio;
             // const { updateErrors } = this.props.app.notifier;
             // updateErrors({ error: 1, desc: 'you must have at least 2 coin wallet running in order to trade them on BarterDEX' });
              (<div className="dashboard-empty">
                <h3>Only one coin detected</h3>
                <p>In order to trade coins, BarterDEX require at least two coin. Run a coin wallet or add electrum coin.</p>
              </div>)


    render() {
        const { installedCoins } = this.props.app.portfolio;

        return (
          <section className="dashboard">
            { this.renderDashboard() }
            { installedCoins.length === 0 && this.noticeNoCoin() }
            { installedCoins.length === 1 && this.noticeSingle() }
          </section>
        )
    }
}

export default Dashboard
