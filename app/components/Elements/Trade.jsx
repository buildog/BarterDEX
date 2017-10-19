import React from 'react'

import { observer, inject } from 'mobx-react';
import Toggle from 'react-toggle'
import AutosizeInput from 'react-input-autosize';

import { CoinPicker } from '../';
import { colors } from '../../../constants';

import * as Icon from 'react-cryptocoins';
import zoro from '../../static/zoro.svg';
import invert from '../../static/invert.svg';


@inject('app')
@observer
class Trade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            privateTransaction: false,
            amountWith: '0.00',
            amountTo: '0.00',
            picker: false,
            rate: 0,
            validation: 'enter buy amount to continue'
        }
    }

    componentDidMount = () => {
        this.resetForm();
    }


    togglePrivate = () => {
        this.setState({ privateTransaction: !this.state.privateTransaction })
    }

    getRate = () => {
        const { orderbook } = this.props.app.orderbook;
        if (orderbook.asks) {
            if (orderbook.asks.length > 0) {
                const order = orderbook.asks.filter((ask) => ask.numutxos > 0);
                if (order.length > 0) {
                    return order[0].price + 0.1;
                }
                return 1;
            }
        }

        return 1;
    }


    resetForm = () => {
        this.amountWithInput.focus();
        this.amountWithInput.value = '';
        this.setState({ amountWith: 0, amountTo: 0, picker: false })
    }


    componentWillReact = () => {
        const amountWith = this.state.amountWith;
        this.updateAmountTo(amountWith);
    }

    trade = () => {
        const { orderbook } = this.props.app.orderbook;
        const { trade, tradeWith, tradeTo } = this.props.app.portfolio;

        console.log(JSON.stringify(orderbook.asks));
        trade({
            method: 'buy',
            base: tradeTo.coin,
            rel: tradeWith.coin,
            price: this.getRate(),
            relvolume: this.state.amountWith
        })
    }


    updateAmountWith = (amountWith) => {
        const { tradeWith } = this.props.app.portfolio;
        let validation = false;

        if (tradeWith.balance < amountWith) {
            validation = `not enough ${tradeWith.coin}`;
        } else if (amountWith === '0' || amountWith === '') {
            validation = `enter buy ${tradeWith.coin} amount`;
        }
        this.setState({ validation, amountWith, amountTo: amountWith / this.getRate() })
    }

    updateAmountTo = (amountWith) => {
        this.setState({ amountTo: amountWith / this.getRate() })
    }

    privateIcon = () => (<span className="private-icon" dangerouslySetInnerHTML={{ __html: zoro }} />)

    openPicker = (type) => { this.setState({ picker: type }) }
    closePicker = () => {
        this.resetForm();
        this.setState({ picker: false })
    }

    coinPicker = (type) => (<CoinPicker title={type === 'To' ? 'Select a coin to buy' : 'Select a coin to buy with'} type={type} onClose={() => this.closePicker()} />)

    render() {
        // portfolio
        const { portfolioRenderBalance, tradeTo, tradeWith } = this.props.app.portfolio;
        const { orderbook } = this.props.app.orderbook;

        // default colors if not set in constants
        if (!colors[tradeWith.coin]) {
            colors[tradeWith.coin] = '#DDD'
        }
        if (!colors[tradeTo.coin]) {
            colors[tradeTo.coin] = '#FFF'
        }

        const backgroundStyle = {
            background: `linear-gradient(180grad,${colors[tradeWith.coin]},${colors[tradeTo.coin]})`
        }

        return (
          <div className="trade">

            { this.state.picker && this.coinPicker(this.state.picker) }
            <span className="trade-bg-outside" style={backgroundStyle} />
            <section className="step1">

              <section className="step1-deposit">
                <div className="step1-coin">
                  <section className={`step1-coin-item step1-coin-item-head ${tradeTo.coin}`}>
                    <div className="step1-coin-logo">
                      <span className="step1-coin-item-head-icon coin-colorized">{ tradeTo.icon }</span>
                      <div className="step1-coin-picked">
                        <span className="step1-coin-logo-name coin-colorized"><strong>Buy</strong> { tradeTo.name }</span>
                        <a onClick={() => this.openPicker('To')} className="coin-colorized">change</a>
                      </div>
                    </div>
                  </section>

                  <section className="step1-coin-item-body">
                    <span className="trade-bg-inside" style={backgroundStyle} />

                    <section className={`step1-coin-item ${tradeWith.coin}`}>
                      <div className="step1-coin">
                        <div className="step1-coin-adr-wrapper">
                          <section className="step1-coin-item coin-colorized">
                            <label>
                              <span>with { tradeWith.name }</span>
                              <small className="step1-coin-balance">Current Balance: <small className="amount">{ portfolioRenderBalance(tradeWith.coin) }</small></small>
                              <div className="step1-coin-item-action">
                                <a onClick={() => this.openPicker('With')} className="coin-colorized">change</a>
                              </div>

                            </label>
                            <span className="step1-coin-item-amount">
                              <AutosizeInput
                                name="form-field-name"
                                type="number"
                                min="0"
                                inputRef={(input) => { this.amountWithInput = input; }}
                                style={{ fontSize: 16 }}
                                value={this.state.amountFrom}
                                onChange={(e) => this.updateAmountWith(e.target.value)}
                              />
                              <code className="step1-coin-code coin-colorized">
                                <span>{ tradeWith.coin }</span>
                                { tradeWith.icon }
                              </code>
                            </span>
                          </section>
                        </div>
                      </div>
                    </section>

                    <button className="step1-invert">
                      <small className="step1-coin-rate amount">
                            1 { orderbook.base } = { this.getRate() } { orderbook.rel }
                      </small>
                      <span dangerouslySetInnerHTML={{ __html: invert }} />
                    </button>

                    <section className={`step1-coin-item step1-coin-item-to ${tradeTo.coin}`}>
                      <div className="step1-coin">
                        <div className="step1-coin-adr-wrapper">
                          <section className="step1-coin-item coin-colorized">
                            <label>receive </label>
                            <span className="step1-coin-item-amount">
                              <AutosizeInput
                                name="form-field-name"
                                disabled="disabled"
                                inputRef={(input) => { this.amountToInput = input; }}
                                style={{ fontSize: 16 }}
                                value={this.state.amountTo}
                              />
                              <code className="step1-coin-code  coin-colorized">
                                <span>{ tradeTo.coin }</span>
                                { tradeTo.icon }
                              </code>
                            </span>
                          </section>
                        </div>
                      </div>
                    </section>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </section>


                </div>
              </section>

              { /*
              <section className="step1-private">
                <label className="step1-private-label">
                  <h2 className="step1-private-label-title">Private transaction { this.state.privateTransaction ? 'enabled' : 'disabled' }</h2>

                  <Toggle
                    defaultChecked={this.state.privateTransaction}
                    icons={{
                        checked: this.privateIcon(),
                        unchecked: null
                    }}
                    onChange={this.togglePrivate}
                  />
                </label>
              </section>
              */ }
              <section className={`step1-action ${tradeTo.coin}`}>
                <button className="withBorder primary" onClick={() => this.trade()} disabled={this.state.validation}>
                  { this.state.validation ? this.state.validation : 'open order'}
                </button>
              </section>

            </section>

          </div>
        );
    }
}


export default Trade
