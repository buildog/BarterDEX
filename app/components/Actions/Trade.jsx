import React from 'react'

import { observer, inject } from 'mobx-react';
import Toggle from 'react-toggle'
import AutosizeInput from 'react-input-autosize';
import ReactTable from 'react-table'
import classNames from 'classnames';

import { CoinPicker } from '../';

import * as Icon from 'react-cryptocoins';
import zoro from '../../static/zoro.svg';
import invert from '../../static/invert.svg';
import shuffle from '../../static/shuffle.svg';
import arrow from '../../static/arrow.svg';
import sell from '../../static/sell.svg';
import send from '../../static/send.svg';
import receive from '../../static/receive.svg';
import history from '../../static/history.svg';
import buy from '../../static/buy.svg';
import charts from '../../static/charts.svg';

const orderbookColumns = [
    {
        Header: 'Ask Price',
        accessor: 'price' // String-based value accessors!
    },
    {
        Header: 'Volume',
        accessor: 'maxvolume' // String-based value accessors!
    },
    {
        Header: 'UTXOs',
        accessor: 'numutxos' // String-based value accessors!
    }
];

@inject('app')
@observer
class Trade extends React.Component {
    constructor(props) {
        super(props);

        const { tradeBase, tradeRel } = this.props.app.portfolio;

        this.state = {
            privateTransaction: false,
            amountRel: '0.00',
            amountBase: '0.00',
            selected: 0,
            picker: false,
            rate: 0,
            showOrderbook: false,
            validation: `enter amount to continue`

        }
    }

    getClassState = () => {
        const self = this;
        return classNames({
            trade: true,
            'trade-ratePicked': true,
            'trade-openedOrderbook': this.state.showOrderbook

        })
    }

    componentDidMount = () => {
        const self = this;
        self.resetForm();
    }

    pickRate = (info) => {
        this.setState({
            selected: info.index,
            rate: info.original.price,
            showOrderbook: false
        })
    }

    togglePrivate = () => {
        this.setState({ privateTransaction: !this.state.privateTransaction })
    }

    getRate = () => {
        const { asks } = this.props.app.orderbook;
        if (asks.length > 0) {
            return asks[0].price;
        }

        return 0;
    }

    toggleOrderbook = (e) => {
        this.setState({ showOrderbook: !this.state.showOrderbook });
        e.stopPropagation()
    }

    resetForm = () => {
        // this.amountRelInput.focus();
        // this.amountRelInput.value = '';
        const { tradeRel, tradeBase } = this.props.app.portfolio;
        this.setState({ amountRel: 0, amountBase: 0, picker: false, rate: 0, orderBookMessage: `Fetching ${tradeBase.coin}/${tradeRel.coin} orderbook` })
    }


    componentWillReact = () => {
        const { trade, tradeRel, tradeBase } = this.props.app.portfolio;
        const amountRel = this.state.amountRel;

        if (this.state.rate === 0) {
            this.setState({ rate: this.getRate() });
        }

        this.setState({ orderBookMessage: `Fetching ${tradeBase.coin}/${tradeRel.coin} orderbook` });
        this.updateAmountBase(amountRel);
    }

    trade = () => {
        const { trade, tradeRel, tradeBase } = this.props.app.portfolio;

        trade({
            method: 'buy',
            base: tradeBase.coin,
            rel: tradeRel.coin,
            price: this.state.rate,
            relvolume: this.state.amountRel
        })

        resetForm();
    }


    updateRate = (rate) => {
        this.setState({ rate, selected: false })
    }

    updateAmountRel = (amountRel) => {
        const { tradeRel } = this.props.app.portfolio;
        let validation = false;

        if (tradeRel.balance < amountRel) {
            validation = (<div className="validation"><span>not enough {tradeRel.coin}</span><small>(max {tradeRel.balance})</small></div>);
        } else if (amountRel === '0' || amountRel === '') {
            validation = `enter buy ${tradeRel.coin} amount`;
        }
        this.setState({ validation, amountRel, amountBase: amountRel / this.state.rate })
    }

    updateAmountBase = (amountRel) => {
        this.setState({ amountBase: amountRel / this.state.rate })
    }

    privateIcon = () => (<span className="private-icon" dangerouslySetInnerHTML={{ __html: zoro }} />)

    togglePicker = (e, type) => {
        this.setState({ picker: this.state.picker ? false : type });
        e.stopPropagation();
    }
    closeSelects = () => { this.setState({ picker: false, showOrderbook: false }) }

    coinPicker = (type) => (<CoinPicker title={type === 'Base' ? 'Select a coin to buy' : 'Select a coin to sell'} type={type} onClose={() => this.resetForm()} />)

    setMax = (amount) => {
        this.setState({ amountRel: amount });
    };

    render() {
        // portfolio
        const self = this;
        const { tradeBase, tradeRel } = this.props.app.portfolio;
        const { asks, bids } = this.props.app.orderbook;
        const orderbook = asks;


        return (
          <div className={this.getClassState()} onClick={() => this.closeSelects()}>


            <section className="trade-body">

              <ul className="trade-type">

                <li className="trade-type-item current">
                  <button>
                    <div>
                      <i dangerouslySetInnerHTML={{ __html: shuffle }} />
                      <small>Exchange</small>
                    </div>
                  </button>
                </li>

                <li className="trade-type-item">
                  <button>
                    <div>
                      <i dangerouslySetInnerHTML={{ __html: charts }} />
                      <small>Charts</small>
                    </div>
                  </button>
                </li>

                <li className="trade-type-item">
                  <button>
                    <div>
                      <i dangerouslySetInnerHTML={{ __html: history }} />
                      <small>History</small>
                    </div>
                  </button>
                </li>

                <li className="trade-type-item">
                  <button>
                    <div>
                      <i dangerouslySetInnerHTML={{ __html: receive }} />
                      <small>Wallet</small>
                    </div>
                  </button>
                </li>


              </ul>

              <section className={`trade-action`}>
                <section className="trade-action-wrapper">

                  <div className={`trade-amount`}>

                    <span className={`label trade-rel ${tradeRel.coin}`}>
                      <div className="select-container">
                        <button className="action small arrow-down">
                          <span>Buy with</span>
                          <i dangerouslySetInnerHTML={{ __html: arrow }} />
                        </button>
                      </div>

                      <div className="select-container">
                        { this.state.picker && this.coinPicker(this.state.picker) }

                        <button onClick={(e) => self.togglePicker(e, 'Rel')} className="action small arrow-down coin-colorized">
                          <span><span className="trade-base-icon">{tradeRel.icon}</span> { tradeRel.name }</span>
                          <i dangerouslySetInnerHTML={{ __html: arrow }} />
                        </button>
                      </div>
                    </span>

                    <section className="trade-amount_input">
                      <section className="trade-amount_input_price">
                        <span className="label">
                          <span>Price in {tradeRel.coin}</span>
                          <small><button className="link">Ask</button> <button className="link" onClick={(e) => this.toggleOrderbook(e)}>{ this.state.showOrderbook ? 'Hide' : 'View'} orderbook</button></small>
                        </span>
                        <div className="trade-amount_input-wrapper">
                          <input
                            name="form-field-name"
                            type="number"
                            min="0"
                            placeholder="0.00"
                            style={{ fontSize: 18 }}
                            value={this.state.rate}
                            onChange={(e) => this.updateRate(e.target.value)}
                          />
                        </div>

                        { this.state.showOrderbook && <section className="trade-orderbook">
                          <ReactTable
                            className="-striped -highlight"
                            data={orderbook}
                            columns={orderbookColumns}
                            defaultSorted={[{ id: 'price' }]}
                            noDataText={this.state.orderBookMessage}
                            showPaginationBottom={false}
                            style={{ height: '280px' }}
                            getTrProps={(state, rowInfo) => ({
                                onClick: e => { self.pickRate(rowInfo) },
                                className: rowInfo && rowInfo.index === self.state.selected ? 'selected coin-colorized' : ''
                            })}
                          /> </section>}

                      </section>
                      <section className="trade-amount_input_amount">
                        <span className="label">
                          <span>Amount of { tradeRel.coin }</span>
                          <small>
                            { this.state.amountRel !== tradeRel.balance && <button className="link" onClick={() => this.setMax(tradeRel.balance)}>Max</button> }
                          </small>
                        </span>

                        <div className="trade-amount_input-wrapper">
                          <input
                            name="form-field-name"
                            type="number"
                            min="0"
                            placeholder="0.00"
                            style={{ fontSize: 18 }}
                            value={this.state.amountRel}
                            onChange={(e) => this.updateAmountRel(e.target.value)}
                          />
                          { this.state.amountRel === tradeRel.balance && <code>MAX</code> }

                        </div>

                      </section>
                    </section>

                    <section className={`${tradeBase.coin}`}>
                      <button className="trade-button withBorder action centered primary coin-bg" onClick={() => this.trade()} disabled={this.state.validation}>
                        <span>{ this.state.validation ? this.state.validation :
                        <div className="trade-action-amountRel">
                          <span>ORDER</span>
                          <span>{this.state.amountBase}</span>
                          <span>{tradeBase.coin}</span>
                        </div> }
                        </span>
                        <i dangerouslySetInnerHTML={{ __html: shuffle }} />
                      </button>
                    </section>
                  </div>

                </section>

              </section>

            </section>

          </div>
        );
    }
}


export default Trade
