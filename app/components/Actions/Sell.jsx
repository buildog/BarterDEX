import React from 'react'

import { observer, inject } from 'mobx-react';
import ReactTable from 'react-table'
import classNames from 'classnames';

import { CoinPicker } from '../';

import * as Icon from 'react-cryptocoins';
import zoro from '../../static/zoro.svg';
import shuffle from '../../static/shuffle.svg';
import arrow from '../../static/arrow.svg';
import sell from '../../static/sell.svg';
import buy from '../../static/buy.svg';
import circles from '../../static/circles.svg';

const formatNumber = (str) => str;

const orderbookColumns = [
    {
        Header: 'Bid Price',
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

        this.state = {
            privateTransaction: false,
            amountBase: 0,
            selected: 0,
            autoMax: false,
            picker: false,
            rate: 0,
            flow: 'buy',
            showOrderbook: false,
            validation: `enter amount to continue`

        }
    }

    getClassState = () => {
        const self = this;
        return classNames({
            'trade-action': true,
            'trade-action-max': this.state.autoMax
        })
    }

    componentDidMount = () => {
        const self = this;
        self.resetForm();
    }

    pickRate = (info) => {
        this.setState({
            showOrderbook: false
        })

        this.updateRate(info.original.price, info.index)
    }

    togglePrivate = () => {
        this.setState({ privateTransaction: !this.state.privateTransaction })
    }

    getRate = () => {
        const { bids } = this.props.app.orderbook;
        if (bids.length > 0) {
            return bids[0].price;
        }

        return 0;
    }

    toggleOrderbook = (e) => {
        this.setState({ showOrderbook: !this.state.showOrderbook });
        e.stopPropagation()
    }

    resetForm = () => {
        // this.amountBaseInput.focus();
        // this.amountBaseInput.value = '';
        const { tradeBase, tradeRel } = this.props.app.portfolio;
        this.setState({ amountBase: 0, picker: false, rate: 0, orderBookMessage: `Fetching ${tradeRel.coin}/${tradeBase.coin} orderbook` })
        this.validation({});
    }

    setMax = () => {
        const { tradeBase } = this.props.app.portfolio;
        this.updateamountBase(tradeBase.balance);
    }


    componentWillReact = () => {
        const { tradeBase, tradeRel } = this.props.app.portfolio;
        this.setState({ orderBookMessage: `Fetching ${tradeRel.coin}/${tradeBase.coin} orderbook` });
    }

    trade = () => {
        const { trade, tradeBase, tradeRel } = this.props.app.portfolio;

        const params = {
            method: 'sell',
            base: tradeBase.coin,
            rel: tradeRel.coin,
            price: this.state.rate,
            basevolume: this.state.amountBase
        };

        trade(params);

        this.resetForm();
    }

    validation = ({ amountBase, rate }) => {
        let validation = false;
        const { tradeBase } = this.props.app.portfolio;

        const amount = amountBase != null ? amountBase : this.state.amountBase;
        const price = rate != null ? rate : this.state.rate;

        if (!price) {
            validation = `price is empty`;
        } else if (tradeBase.balance < amount) {
            validation = (<div className="validation"><span>not enough {tradeBase.coin}</span><small>(max {tradeBase.balance})</small></div>);
        } else if (!amount) {
            validation = `${tradeBase.coin} amount is empty`;
        }

        this.setState({ validation });
    }

    updateRate = (rate, selected = false) => {
        const parsed = formatNumber(rate);
        this.setState({ rate: parsed, selected });
        this.validation({ rate: parsed });
    }

    updateamountBase = (amountBase) => {
        const parsed = formatNumber(amountBase);
        const { tradeBase } = this.props.app.portfolio;

        if (amountBase === tradeBase.balance) {
            this.setState({ autoMax: true })
        } else {
            this.setState({ autoMax: false })
        }

        this.setState({ amountBase: parsed });
        this.validation({ amountBase: parsed });
    }

    privateIcon = () => (<span className="private-icon" dangerouslySetInnerHTML={{ __html: zoro }} />)

    togglePicker = (e, type) => {
        this.setState({ picker: this.state.picker ? false : type });
        e.stopPropagation();
    }

    closeSelects = () => { this.setState({ picker: false, showOrderbook: false }) }

    coinPicker = (type) => (<CoinPicker title={type === 'Base' ? 'Select a coin to buy' : 'Select a coin to sell'} type={type} allowZero onClose={() => this.resetForm()} />)

    render() {
        // portfolio
        const self = this;
        const { tradeRel, tradeBase } = this.props.app.portfolio;
        const { asks, bids } = this.props.app.orderbook;
        const orderbook = bids;

        const { loader } = this.props.app;
        const orderLoader = loader.getLoader(5);


        return (
          <section className={this.getClassState()}>

            { orderLoader ? <div className="trade-processing">
              <i className="loader-svg" dangerouslySetInnerHTML={{ __html: circles }} />
              <h3>PROCESSING YOUR ORDER</h3>
            </div> : <section className="trade-action-wrapper">

              <div className={`trade-amount`}>


                <section className="trade-amount_input">
                  <section className="trade-amount_input_price">
                    <span className="label">
                      <span className="label-title">Price for 1 {tradeBase.coin}</span>
                      <small>
                        {
                              /*
                              <button className="link">Bid</button>
                              <button className="link">Ask</button>
                              */
                          }

                        <button className="link" onClick={(e) => this.toggleOrderbook(e)}>{ this.state.showOrderbook ? 'Hide' : 'View'} orderbook</button>
                      </small>
                    </span>
                    <div className="trade-amount_input-wrapper">
                      <input
                        name="form-price"
                        type="number"
                        min="0"
                        placeholder="0.00"
                        style={{ fontSize: 18 }}
                        value={this.state.rate}
                        onChange={(e) => this.updateRate(e.target.value)}
                      />
                      <div className={`${tradeRel.coin}`}>
                        { this.state.picker && this.coinPicker(this.state.picker) }
                        <button onClick={(e) => self.togglePicker(e, 'Rel')} className="trade-pair action small arrow-down coin-colorized">
                          <span><span className="trade-base-icon">{tradeRel.icon}</span> { tradeRel.name }</span>
                          <i dangerouslySetInnerHTML={{ __html: arrow }} />
                        </button>
                      </div>
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
                      <span className="label-title">{`Amount of ${tradeBase.coin} to sell`}</span>
                    </span>
                    <div className="trade-amount_input-wrapper">
                      <input
                        name="form-amount"
                        type="number"
                        min="0"
                        placeholder="0.00"
                        style={{ fontSize: 18 }}
                        value={this.state.amountBase}
                        onChange={(e) => this.updateamountBase(e.target.value)}
                      />
                      <button className="trade-setMax" onClick={() => this.setMax()}>Max</button>
                    </div>

                  </section>
                </section>

              </div>


              <section className={`trade-button-wrapper ${tradeBase.coin}`}>
                <button className="trade-button withBorder action primary coin-bg" onClick={() => this.trade()} disabled={this.state.validation}>
                  <div className="trade-action-amountRel">
                    <small className="trade-action-amountRel-title"> { this.state.validation ? 'VALIDATION' : 'SELL' }</small>
                    { this.state.validation ? this.state.validation : <span>{this.state.amountBase} {tradeBase.coin}</span> }
                    { this.state.validation ? '' : <small>(for {this.state.amountBase / this.state.rate } {tradeRel.coin})</small> }
                  </div>
                  <i dangerouslySetInnerHTML={{ __html: shuffle }} />
                </button>
              </section>


            </section> }

          </section>
        );
    }
}


export default Trade
