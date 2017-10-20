import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router';
import { Trade, Modal, CoinPicker } from '../';
import plus from '../../static/plus.svg';
import arrow from '../../static/arrow.svg';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

@inject('app')
@observer
class Dashboard extends React.Component {


    renderDashboard = () => {
        // const { tradeBase, tradeRel, coinsList } = this.props.app.portfolio;
        const { installedCoins, colors, kmdTotal } = this.props.app.portfolio;

        return (
          <section className="dashboard-wallets">
            <header className="dashboard-wallets-header component-header">
              <h2>

                  { installedCoins.filter((coin) => coin.KMDvalue > 0).length > 0 && <ResponsiveContainer className="dashboard-balances-pie">
                    <PieChart>
                      <Pie
                        data={installedCoins}
                        dataKey="KMDvalue"
                        startAngle={180}
                        endAngle={0}
                      >
                        {installedCoins.map((coin) => <Cell key={coin.coin} stroke="transparent" fill={colors[coin.coin]} />)}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                }
                <div>Portfolio</div>
                <small><span>{kmdTotal()}</span></small>

              </h2>
              <button className="dashboard-wallets-header-add action primary" disabled>
                <span>electrum (soon)</span>
                <i dangerouslySetInnerHTML={{ __html: plus }} />
              </button>
            </header>
            <ul className="dashboard-wallets-list">
              { installedCoins.map((installed) => (
                <li key={installed.coin} className={`dashboard-wallets-list-item ${installed.coin}`}>
                  <Link to={`/wallet/${installed.coin}`} activeClassName="active">
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

    renderNotice = () => {
        const { installedCoins } = this.props.app.portfolio;
        const { updateErrors } = this.props.app.notifier;
        updateErrors({ error: 1, desc: 'you must have at least 2 coin wallet running in order to trade them on BarterDEX' });
    }

    render() {
        const { installedCoins } = this.props.app.portfolio;

        return (
          <section className="dashboard">
            { installedCoins.length > 1 ? this.renderDashboard() : this.renderNotice() }
          </section>
        )
    }
}

export default Dashboard
