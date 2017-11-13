import React from 'react'

const { PropTypes } = React;
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router';
import { Trade, Orderbook } from '../';
import classNames from 'classnames';

import moment from 'moment';
import { ResponsiveContainer, LineChart, Line, Tooltip, XAxis } from 'recharts';
import formatCurrency from 'format-currency';


import arrow from '../../static/arrow.svg';
import circles from '../../static/circles.svg';


const formatXAxis = (tickItem) => moment(moment.unix(tickItem).format('YYYY-MM-DD HH:mm')).fromNow();


const CustomTooltip = React.createClass({
    propTypes: {
        type: PropTypes.string,
        payload: PropTypes.array,
        label: PropTypes.string
    },

    render() {
        const { active } = this.props;
        if (active) {
            const { payload, label } = this.props;
            return (
              <div className="custom-tooltip shadow">
                <span className="label">{formatXAxis(label)}</span>
                <span className="amount-negative">(-15.2%)</span>
                <strong className="amount">{formatCurrency(payload[0].value)}</strong>
              </div>
            );
        }

        return null;
    }
});


const data = [
      { date: moment().subtract(3, 'day').unix(), total: 35958.01 },
      { date: moment().subtract(2, 'day').unix(), total: 49958.01 },
      { date: moment().subtract(1, 'day').unix(), total: 31958.01 },
      { date: moment().unix(), total: 55958.01 }
];

const TinyAreaChart = React.createClass({
    render() {
  	return (
    <ResponsiveContainer width="100%" height={300} className="chart">
      <LineChart
        width={200} height={60} data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <Line dataKey="total" stroke="#FFF" strokeWidth={2} />
        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#FFF', strokeWidth: 1, fillOpacity: 1 }} />
        <XAxis tickFormatter={formatXAxis} dataKey="date" hide />
      </LineChart>
    </ResponsiveContainer>
  );
    }
})

@inject('app')
@observer
class Wallet extends React.Component {

    static preload({ params, stores }, callback) {
        const { coin, installed } = params;
        const { autoSetTrade } = stores.app.trade;
        autoSetTrade({ coin, installed: installed === 'true' });
        /* wait for callaback?*/
        const loop = setInterval(() => {
            const { tradeBase, tradeRel } = stores.app.trade;
            if (tradeBase && tradeRel) {
                clearInterval(loop);
                callback();
            }
        }, 1000)
    }

    getClassState = () => {
        const self = this;
        const { tradeBase, tradeRel } = this.props.app.trade;

        return classNames({
            wallet: true,
            'wallet-ready': tradeBase && tradeRel
        })
    }

    componentWillUnmount = () => {
        const { leave } = this.props.app.trade;
        leave();
    }

    renderTrade = () => {
        const { tradeBase, tradeRel } = this.props.app.trade;
        if (tradeBase && tradeRel) {
            return (<div className={`wallet-exchange`}>
              <Trade />
            </div>
            )
        }
    }


    render() {
        const { renderBalance } = this.props.app.portfolio;
        const { tradeBase, tradeRel } = this.props.app.trade;

        return (
          <section className="wallet-wrapper">
            <section className={this.getClassState()}>
              <header className={`wallet-wallets-header component-header component-header-centered component-header-withBack`}>
                <Link className="wallet-wallets-header-back action primary right dark" to="/">
                  <i className="wallet-wallets-list-item_action" dangerouslySetInnerHTML={{ __html: arrow }} />
                </Link>
                <h2 className={tradeBase.coin}>
                  <div className="wallet-icon coin-colorized">{ tradeBase.icon }</div>
                  <div className="wallet-coinName">{tradeBase.name}</div>
                  <div className="wallet-balance">{ renderBalance(tradeBase.balance, tradeBase.coin) }</div>
                </h2>

              </header>

              <section className="wallet-trade">
                { this.renderTrade() }
              </section>
            </section>

            <section className="wallet-orderbooks">
              <section className="wallet-orderbooks-chart">
                { /* <TinyAreaChart /> */ }
                <h3>no chart data</h3>
              </section>
              <Orderbook base={tradeBase.coin} rel={tradeRel.coin} type="asks" />
            </section>
          </section>
        )
    }
}

export default Wallet
