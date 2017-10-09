import React from 'react'

const { PropTypes } = React;

import { observer, inject } from 'mobx-react';
import * as Icon from 'react-cryptocoins';
import ReactTable from 'react-table'
import moment from 'moment';
import { ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, Tooltip, XAxis } from 'recharts';
import formatCurrency from 'format-currency';

const getBalanceClass = (short) => `dashboard-balance dashboard-balance-${short} shadow`

const getBalanceEvolutionClass = (evolution) => {
    const base = `dashboard-balance-amount-evolution`;
    const extra = evolution > 0 ? 'amount-positive' : 'amount-negative';
    return `${base} ${extra}`;
}

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
      <AreaChart
        width={200} height={60} data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="#000" />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="total" stroke="url(#gradient)" strokeWidth={8} fill="#9D9CF8" fillOpacity="1" />
        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#FFF', strokeWidth: 1, fillOpacity: 1 }} />
        <XAxis tickFormatter={formatXAxis} dataKey="date" hide />
      </AreaChart>
    </ResponsiveContainer>
  );
    }
})


const capitalize = (string) => string.toLowerCase().charAt(0).toUpperCase() + string.slice(1).toLowerCase()

@inject('app')
@observer
class Dashboard extends React.Component {

    renderIcon = (coin) => {
        switch (coin) {
        case 'KMD':
            return (<Icon.KmdAlt size={42} />);
            break;
        case 'NEO':
            return (<Icon.Neos size={42} />);
            break;
        default:
            const TagName = Icon[capitalize(coin)];
            return <TagName size={42} />;
            break;

        }
    }

    render() {
        // portfolio
        const { portfolio, colors, portfolioRenderBTC, portfolioRenderFIAT, get24hEvolution, portfolioRenderBalance, portfolioTotal, portfolioEvolution, formatFIAT } = this.props.app.portfolio;
        const { market } = this.props.app.market;

        const balanceEvolution = portfolioEvolution();


        const columns = [{
            id: 'cryptoID', // Required because our accessor is not a string
            Header: '#',
            accessor: d => market.indexOf(d),
            width: 60
        },
        {
            Header: 'Name',
            accessor: 'long' // String-based value accessors!
        },
        {
            Header: 'Price',
            accessor: 'price', // String-based value accessors!
            Cell: props => <span className="amount">{ formatCurrency(props.value, formatFIAT) }</span> // Custom cell components!
        },
        {
            Header: 'Market Cap',
            accessor: 'mktcap', // String-based value accessors!
            Cell: props => <small className="amount">{ formatCurrency(props.value, formatFIAT) }</small> // Custom cell components!
        },
        {
            Header: '24H Volume',
            accessor: 'usdVolume', // String-based value accessors!
            Cell: props => <small className="amount">{ formatCurrency(props.value, formatFIAT) }</small> // Custom cell components!
        },
        {
            Header: '% 24hr',
            accessor: 'perc', // String-based value accessors!
            width: 80,
            Cell: props => <span className="amount">{props.value}%</span> // Custom cell components!
        }]

        return (
          <div className="dashboard">
            <aside className="dashboard-aside">
              <section className="dashboard-evolution">
                <h2 className="dashboard-evolution-title">Porfolio evolution</h2>
                <TinyAreaChart />
              </section>

              <section className="dashboard-market">
                <ReactTable
                  className="-striped -highlight"
                  data={market}
                  columns={columns}
                  defaultSorted={[
                      {
                          id: 'cryptoID'
                      }
                  ]}
                />
              </section>

            </aside>
            <section className="dashboard-balances shadow">
              <header>
                <h2>
                  <span className="dashboard-balance-amount">
                    <strong className="dashboard-balance-amount-balance xtra-large-number">{ portfolioTotal() }</strong>
                    <span className={getBalanceEvolutionClass(balanceEvolution)}>(
                                  { balanceEvolution > 0 ? '+' : '' }
                      { balanceEvolution }
                                  %)</span>
                  </span>
                  <PieChart className="dashboard-balances-pie " width={200} height={100}>
                    <Pie
                      data={portfolio}
                      dataKey="btcBalance"
                      cx={100}
                      cy={100}
                      startAngle={180}
                      endAngle={0}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                    >
                      {
                                      portfolio.map((coin) => <Cell stroke="transparent" fill={colors[coin.short]} />)
                              }
                    </Pie>
                  </PieChart>
                </h2>

                <footer className="dashboard-footer">
                  <button className="dashboard-add withBorder">ADD COIN</button>
                </footer>
              </header>


              <ul className="dashboard-balances-list">

                { portfolio.map((entry) => {
                    const evolution = get24hEvolution(entry.short)

                    return (<li className={getBalanceClass(entry.short)}>
                      <span className="dashboard-balance-amount">
                        <strong className="dashboard-balance-amount-balance large-number">
                          { portfolioRenderFIAT(entry.short) }
                        </strong>
                        <small><strong> { portfolioRenderBalance(entry.short) } </strong> </small>
                        {
                            entry.short !== 'BTC' ? <small className="dashboard-balance-amount-crypto"><strong> { portfolioRenderBTC(entry.short) } </strong> </small> : ''
                        }


                        <span className={getBalanceEvolutionClass(evolution)}>(
                              { evolution > 0 ? '+' : '' }
                          { evolution }
                              %)</span>
                      </span>
                      <u className="dashboard-balance-title coin-colorized">
                        <span className="dashboard-balance-title-logo">
                          { this.renderIcon(entry.short) }
                          <span className="dashboard-balance-title-logo-name">{ entry.name }</span>
                        </span>
                      </u>
                      <span className="coin-bg" />
                    </li>)
                }


                 )
                }
              </ul>
            </section>

          </div>
        );
    }
}


export default Dashboard
