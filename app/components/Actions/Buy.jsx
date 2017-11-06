import React from 'react'

import { observer, inject } from 'mobx-react';
import classNames from 'classnames';
import QRCode from 'qrcode.react';


import { CoinPicker, Clipboard, Orderbook } from '../';

import * as Icon from 'react-cryptocoins';
import zoro from '../../static/zoro.svg';
import shuffle from '../../static/shuffle.svg';
import arrow from '../../static/arrow.svg';
import sell from '../../static/sell.svg';
import buy from '../../static/buy.svg';
import circles from '../../static/circles.svg';


const formatNumber = (str) => str;


@inject('app')
@observer
class Trade extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            privateTransaction: false,
            amountRel: 0,
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

        const params = {
            target: {
                validity: { valid: true },
                value: info.original.price
            }
        }

        this.updateRate(params, info.index)
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
        this.validation({});
    }


    componentWillReact = () => {
        // const { tradeRel, tradeBase } = this.props.app.portfolio;
        // this.setState({ orderBookMessage: `Fetching ${tradeBase.coin}/${tradeRel.coin} orderbook` });
        // this.validation({ amountRel: this.state.amountRel, rate: this.state.rate });
    }

    trade = () => {
        const { trade, tradeRel, tradeBase } = this.props.app.trade;

        const params = {
            method: 'bot_buy',
            base: tradeBase.coin,
            rel: tradeRel.coin,
            price: this.state.rate,
            volume: this.state.amountRel * this.state.rate
        };

        trade(params);

        this.resetForm();
    }

    validation = ({ amountRel, rate }) => {
        let validation = false;
        const { tradeRel } = this.props.app.portfolio;


        const amount = amountRel != null ? amountRel : this.state.amountRel;
        const price = rate != null ? rate : this.state.rate;

        if (!price) {
            validation = `price is empty`;
        } else if ((tradeRel.balance / price) < amount) {
            validation = (<div className="validation"><span>not enough {tradeRel.coin}</span><small>(max {tradeRel.balance})</small></div>);
        } else if (!amount) {
            validation = `${tradeRel.coin} amount is empty`;
        }

        this.setState({ validation });
    }


    setMax = () => {
        const { tradeRel } = this.props.app.portfolio;
        const params = {
            target: {
                validity: { valid: true },
                value: tradeRel.balance / this.state.rate
            }
        }
        this.updateAmountRel(params);
    }

    updateRate = (e, selected = false) => {
        if (e.target.validity.valid) {
            const rate = e.target.value;
            const parsed = formatNumber(rate);
            this.setState({ rate: parsed, selected });
            this.validation({ rate: parsed });

            this.state.autoMax && setTimeout(() => this.setMax())
        }
    }

    updateAmountRel = (e) => {
        if (e.target.validity.valid) {
            const amountRel = e.target.value;
            const parsed = formatNumber(amountRel);
            const { tradeRel } = this.props.app.portfolio;

            if (amountRel * this.state.rate === tradeRel.balance) {
                this.setState({ autoMax: true })
            } else {
                this.setState({ autoMax: false })
            }


            this.setState({ amountRel: parsed });
            this.validation({ amountRel: parsed });
        }
    }

    tradeWith = (e, coin) => {
        const { setTrade } = this.props.app.portfolio;
        setTrade(coin, 'Rel');
        // autoclose after selection
        this.props.onClose && this.props.onClose();
    }


    closeSelects = () => { this.setState({ picker: false, showOrderbook: false }) }


    renderPrice = () => (

      <section className="trade-amount_input_price">
        <span className="label">
          <strong className="label-title">Price</strong>
          <small>
            <button className="link" onClick={(e) => this.toggleOrderbook(e)}>{ this.state.showOrderbook ? 'Hide' : 'View'} orderbook</button>
          </small>
        </span>
        <div className="trade-amount_input-wrapper">
          <input
            name="form-price"
            type="number"
            min="0"
            step="any"
            placeholder="0.00"
            style={{ fontSize: 18 }}
            value={this.state.rate}
            onChange={(e) => this.updateRate(e)}
          />
          <CoinPicker onSelected={(e, coin) => this.tradeWith(e, coin)} trade />
        </div>

        { this.state.showOrderbook && <Orderbook placeholder={this.state.orderBookMessage} onSelected={(params) => this.pickRate(params)} /> }

      </section>

        )


    renderAmount = () => {
        const { tradeRel } = this.props.app.portfolio;
        return (
          <section className="trade-amount_input_amount">
            <span className="label">
              <strong className="label-title">Amount</strong>
            </span>
            <div className="trade-amount_input-wrapper">
              <input
                name="form-amount"
                type="number"
                min="0"
                step="any"
                placeholder="0.00"
                style={{ fontSize: 18 }}
                value={this.state.amountRel}
                onChange={(e) => this.updateAmountRel(e)}
              />
              { tradeRel.balance > 0 && this.state.rate > 0 && <button className="trade-setMax" onClick={() => this.setMax()}>Max</button> }
            </div>

          </section>
        )
    }


    renderButton = () => {
        const { loader } = this.props.app;
        const orderLoader = loader.getLoader(5);
        const { tradeBase, tradeRel } = this.props.app.portfolio;
        return (
          <section className={`trade-button-wrapper ${tradeBase.coin}`}>
            <button className="trade-button withBorder action primary coin-bg" disabled={orderLoader} onClick={() => this.trade()} disabled={this.state.validation}>
              <div className="trade-action-amountRel">
                <small className="trade-action-amountRel-title"> { this.state.validation ? 'VALIDATION' : 'BUY' }</small>
                { this.state.validation ? this.state.validation : <span>{this.state.amountRel} {tradeBase.coin}</span> }
                { this.state.validation ? '' : <small>(for {this.state.amountRel * this.state.rate } {tradeRel.coin})</small> }
              </div>
              <i dangerouslySetInnerHTML={{ __html: shuffle }} />
            </button>
          </section>
        )
    }

    renderDeposit = () => {
        const { tradeRel } = this.props.app.portfolio;
        return (
          <section className="trade-deposit">
            <div className={`trade-deposit-body`}>
              <section className="trade-deposit-amount">
                <section className={`trade-deposit-amount-left ${tradeRel.coin}`}><p>
                  <span>Awaiting {tradeRel.name} deposit of</span>
                </p>
                  <p className="coin-colorized">
                    <strong>{ (this.state.amountRel * this.state.rate) - tradeRel.balance } { tradeRel.coin }</strong>
                    <i>{tradeRel.icon}</i>
                  </p>
                  <p className="trade-deposit-amount-left-balance"><small>current balance {tradeRel.balance} {tradeRel.coin} </small></p>
                </section>
                <QRCode size={88} value={tradeRel.smartaddress} />
              </section>
              <section className="trade-deposit-address">
                <Clipboard copyLabel={tradeRel.smartaddress} value={tradeRel.smartaddress} />
              </section>

            </div>
          </section>
        )
    }

    renderLoader = () => (<div className="trade-processing">
      <i className="loader-svg" dangerouslySetInnerHTML={{ __html: circles }} />
      <h3>PROCESSING YOUR ORDER</h3>
    </div>)

    render() {
        // portfolio
        const { loader } = this.props.app;
        const orderLoader = loader.getLoader(5);
        const { tradeRel } = this.props.app.portfolio;

        return (
          <section className={this.getClassState()}>
            { orderLoader ? this.renderLoader() :
            <section className="trade-action-wrapper">
              <div className="trade-amount">
                <section className="trade-amount_input">
                  { this.renderPrice() }
                  { this.renderAmount() }
                </section>
              </div>
            </section> }

            { tradeRel.balance >= (this.state.amountRel * this.state.rate) ? this.renderButton() : this.renderDeposit() }

          </section>
        );
    }
}


export default Trade
