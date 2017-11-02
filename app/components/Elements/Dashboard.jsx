import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router';
import classNames from 'classnames';

import { CoinPicker } from '../';
import arrow from '../../static/arrow.svg';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

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
              <CoinPicker onSelected={(e, coin) => this.enableCoin(e, coin)} />
            </header>


            { installedCoins.length === 0 && this.noticeNoCoin() }
            { installedCoins.length === 1 && this.noticeSingle() }


            <ul className="dashboard-wallets-list">
              { installedCoins.map((installed) => (
                <li key={installed.coin} className={this.getClassState(installed.coin)}>
                  <Link onClick={() => this.setCoinToEnable(installed.coin)} className={installed.coin} to={`/wallet/${installed.coin}/${installed.installed}`} activeClassName="active">
                    <div className="coinList-coin_icon coin-colorized"> { installed.icon }</div>
                    <div className="coinList-coin_balance">
                      <strong>{ installed.name }</strong>
                      <small>{ installed.balance } { installed.coin }</small>
                    </div>
                    <button className="coinList-coin_action" dangerouslySetInnerHTML={{ __html: arrow }} />
                  </Link>
                </li>))}
            </ul>
          </section>

        )
    }

    noticeNoCoin = () =>
         (<div className="dashboard-empty">
           <h3>No active coin detected</h3>
           <p>We didn't detected any coin wallet running on your machine. Run a coin wallet or add electrum coin via the top right button.</p>
         </div>)

    noticeSingle = () =>
          (<div className="dashboard-empty">
            <h3>Only one active coin detected</h3>
            <p>In order to trade coins, BarterDEX require at least <strong>two coin</strong>. Run a coin wallet or add electrum coin via the top right button.</p>
          </div>)


    render() {
        return (
          <section className="dashboard">
            { this.renderDashboard() }
          </section>
        )
    }
}

export default Dashboard
