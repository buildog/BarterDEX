import React from 'react'

import { observer, inject } from 'mobx-react';
import classNames from 'classnames';
import QRCode from 'qrcode.react';


import { CoinPicker, Clipboard } from '../';

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
    }

    getClassState = () => {
        const self = this;
        return classNames({
            'trade-action': true,
            'trade-action-max': this.props.app.trade.amounts.autoMax
        })
    }

    componentDidMount = () => {
        const self = this;
        self.resetForm();
    }


    getRate = () => {
        const { asks } = this.props.app.orderbook;
        if (asks.length > 0) {
            return asks[0].price;
        }

        return 0;
    }


    resetForm = () => {
        const { reset } = this.props.app.trade;
        reset();
    }

    //
    // componentWillReact = () => {
    //     this.validation({ amountRel: this.state.amountRel, rate: this.props.app.trade.rates.ask.price });
    // }

    trade = () => {
        const { tradeRel, tradeBase, amounts, rates, method } = this.props.app.trade;
        const { trade } = this.props.app.trade;

        const params = {
            method,
            base: tradeBase.coin,
            rel: tradeRel.coin,
            price: rates.ask.price,
            volume: amounts.rel * rates.ask.pricefree,
            smartaddress: tradeRel.smartaddress
        };

        trade(params);
        this.resetForm();
    }


    updateRate = (e) => {
    //    if (e.target.validity.valid) {
        const { updateRate, updateMethod } = this.props.app.trade;
        const rate = e.target.value;
        updateMethod('buy');
        updateRate({ price: rate }, 'ask');
    //    }
    }

    updateAmount = (e) => {
    //    if (e.target.validity.valid) {
        const { updateAmount, updateMethod } = this.props.app.trade;
        const amount = e.target.value;
        updateMethod('bot_buy');
        updateAmount({ amount });
    //    }
    }

    tradeWith = (e, coin) => {
        const { updateTrade } = this.props.app.trade;
        updateTrade(coin, 'Rel');
        // autoclose after selection
        this.props.onClose && this.props.onClose();
    }


    renderPrice = () => (

      <section className="trade-amount_input_price">
        <span className="label">
          <strong className="label-title">Price</strong>
        </span>
        <div className="trade-amount_input-wrapper">
          <input
            name="form-price"
            type="number"
            min="0"
            step="any"
            placeholder="0.00"
            style={{ fontSize: 18 }}
            value={this.props.app.trade.rates.ask.pricefree}
            onChange={(e) => this.updateRate(e)}
          />
          <CoinPicker onSelected={(e, coin) => this.tradeWith(e, coin)} trade />
        </div>
      </section>

        )


    renderAmount = () => {
        const { tradeRel, setMax, totalfee } = this.props.app.trade;
        return (
          <section className="trade-amount_input_amount">
            <span className="label">
              <strong className="label-title">Amount</strong>
              { totalfee() > 0 && <small>fees { totalfee(true) } { tradeRel.coin }</small> }

            </span>
            <div className="trade-amount_input-wrapper">
              <input
                name="form-amount"
                type="number"
                min="0"
                step="any"
                placeholder="0.00"
                style={{ fontSize: 18 }}
                value={this.props.app.trade.amounts.rel}
                onChange={(e) => this.updateAmount(e)}
              />
              { tradeRel.balance > 0 && this.props.app.trade.rates.ask.price > 0 && <button className="trade-setMax" onClick={() => setMax()}>Max</button> }
            </div>

          </section>
        )
    }


    renderButton = () => {
        const { loader } = this.props.app;
        const orderLoader = loader.getLoader(5);
        const { tradeBase, tradeRel, rates, amounts, validation, formatSatoshi } = this.props.app.trade;

        return (
          <section className={`trade-button-wrapper ${tradeBase.coin}`}>
            <button className="trade-button withBorder action primary coin-bg" disabled={orderLoader} onClick={() => this.trade()} disabled={validation}>
              <div className="trade-action-amountRel">
                <small className="trade-action-amountRel-title"> { validation ? 'VALIDATION' : 'BUY' }</small>
                { validation || <span>{amounts.rel} {tradeBase.coin}</span> }
                { validation ? '' : <small>(for { formatSatoshi(amounts.rel * rates.ask.price) } {tradeRel.coin})</small> }
              </div>
              <i dangerouslySetInnerHTML={{ __html: shuffle }} />
            </button>
          </section>
        )
    }

    renderDeposit = () => {
        const { tradeRel, amounts, rates, formatSatoshi } = this.props.app.trade;

        return (
          <section className="trade-deposit">
            <div className={`trade-deposit-body`}>
              <section className="trade-deposit-amount">
                <section className={`trade-deposit-amount-left ${tradeRel.coin}`}><p>
                  <span>Awaiting deposit of</span>
                </p>
                  <p className="coin-colorized">
                    <strong>{ formatSatoshi((amounts.rel * rates.ask.price) - tradeRel.balance) } { tradeRel.coin }</strong>
                    <i>{tradeRel.icon}</i>
                  </p>
                  <p className="trade-deposit-amount-left-balance"><small>current balance <br /> {tradeRel.balance} {tradeRel.coin} </small></p>
                </section>
                <QRCode className="deposit-qr" size={88} value={tradeRel.smartaddress} />
              </section>
              <section className="trade-deposit-address">
                <Clipboard copyLabel={tradeRel.smartaddress} value={tradeRel.smartaddress} />
              </section>

            </div>
          </section>
        )
    }

    renderLoader = () => {
        const { loader } = this.props.app;
        const orderLoader = loader.getLoader(5);
        const utxosLoader = loader.getLoader(7);

        return (<div className="trade-processing">
          <i className="loader-svg" dangerouslySetInnerHTML={{ __html: circles }} />
          { orderLoader && !utxosLoader && <h3>PROCESSING YOUR ORDER</h3> }
          { utxosLoader && <h3>AUTO SPLITING BALANCE INTO UTXOS</h3> }
        </div>)
    }

    render() {
        // portfolio
        const { loader } = this.props.app;
        const orderLoader = loader.getLoader(5);
        const { tradeBase, tradeRel } = this.props.app.trade;

        let action = null;

        if (!orderLoader) {
            action = tradeRel.balance >= (this.props.app.trade.amounts.rel * this.props.app.trade.rates.ask.price) ? this.renderButton() : this.renderDeposit()
        }

        return (
          <section className={this.getClassState()}>
            { orderLoader ? this.renderLoader() :
            <section className="trade-action-wrapper">
              <div className="trade-amount">
                <section className="trade-amount_input">
                  { this.renderPrice(tradeBase, tradeRel) }
                  { this.renderAmount() }
                </section>
              </div>
            </section> }

            { action }

          </section>
        );
    }
}


export default Trade
