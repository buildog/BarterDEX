import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router';
import classNames from 'classnames';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

import { CoinPicker } from '../';
import circles from '../../static/circlesWhite.svg';
import arrow from '../../static/arrow.svg';

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

    noticeNoCoin = () =>
         (<div className="dashboard-empty">
           <h3>No active coin detected</h3>
           <p>We didn't detected any coin wallet running on your machine. Run a coin wallet or add electrum coin via the top right button.</p>
         </div>)

    renderDashboard = () => {
        const { installedCoins, colors, total, renderBalance } = this.props.app.portfolio;
        const hasRel = installedCoins.filter((coin) => coin.rel > 0);
        return (
          <section className="dashboard-wallets">
            <header className="dashboard-wallets-header component-header">
              <h2>
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

                <div>Portfolio</div>
                <small><span>{ total.rel }</span></small>

              </h2>
              <CoinPicker onlyElectrum onSelected={(e, coin) => this.enableCoin(e, coin)} />
            </header>


            { installedCoins.length === 0 && this.noticeNoCoin() }


            <ul className="dashboard-wallets-list">
              { installedCoins.map((installed) => {
                  const isNative = !installed.electrum;
                  console.log(installed)

                  return (
                    <li key={installed.coin} className={this.getClassState(installed.coin)}>
                      <Link onClick={() => this.setCoinToEnable(installed.coin)} className={installed.coin} to={`/wallet/${installed.coin}/${isNative}`} activeClassName="active">
                        <div className="coinList-coin_icon coin-colorized"> { installed.icon }</div>
                        <div className="coinList-coin_balance">
                          <strong>{ installed.name }</strong>
                          <small>{ renderBalance(installed.balance, installed.coin) } </small>
                          <small>{ isNative ? 'Native mode' : 'Electrum mode' } </small>
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
