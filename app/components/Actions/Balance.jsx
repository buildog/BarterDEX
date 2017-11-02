import React from 'react'

import { observer, inject } from 'mobx-react';
import classNames from 'classnames';
import QRCode from 'qrcode.react';
import { Clipboard } from '../';
import send from '../../static/send.svg';

const formatNumber = (str) => str;


@inject('app')
@observer
class Balance extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            address: '',
            amount: 0,
            validation: `enter amount to continue`

        }
    }

    getClassState = () => {
        const self = this;
        return classNames({
            'balance-action': true
        })
    }


    setMax = () => {

    }


    componentWillReact = () => {
        this.validation({ amount: this.state.amount });
    }

    updateAddress = (address) => {
        this.setState({ address })
    }

    updateAmount = (amount) => {
        const parsed = formatNumber(amount);
        const { tradeRel } = this.props.app.portfolio;

        if (amount === tradeRel.balance) {
            this.setState({ autoMax: true })
        } else {
            this.setState({ autoMax: false })
        }


        this.setState({ amount: parsed });
        this.validation({ amount: parsed });
    }


    validation = ({ amount }) => {
        let validation = false;
        const { tradeBase } = this.props.app.portfolio;

        if (this.state.address === '') {
            validation = `address is empty`;
        } else if (tradeBase.balance < amount) {
            validation = (<div className="validation"><span>not enough {tradeBase.coin}</span><small>(max {tradeBase.balance})</small></div>);
        } else if (!amount) {
            validation = `${tradeBase.coin} amount is empty`;
        }

        this.setState({ validation });
    }


    withdraw = () => {}

    renderDeposit = () => {
        const { tradeBase } = this.props.app.portfolio;
        return (
          <section className="balance-deposit">
            <div className={`balance-deposit-body ${tradeBase.coin}`}>
              <section className="balance-qr">
                <QRCode size={124} value={tradeBase.smartaddress} />
              </section>
              <section className="balance-deposit-address">
                <span className="label">
                  <strong className="label-title">Your smartaddress</strong>
                </span>
                <Clipboard copyLabel={tradeBase.smartaddress} value={tradeBase.smartaddress} />
              </section>

            </div>
          </section>
        )
    }


    renderButton = () => {
        const { loader } = this.props.app;
        const orderLoader = loader.getLoader(6);
        const { tradeBase, tradeRel } = this.props.app.portfolio;
        return (
          <section className={`trade-button-wrapper ${tradeBase.coin}`}>
            <button className="trade-button withBorder action primary coin-bg" disabled={orderLoader} onClick={() => this.withdraw()} disabled={this.state.validation}>
              <div className="trade-action-amountRel">
                <small className="trade-action-amountRel-title"> { this.state.validation ? 'VALIDATION' : 'SEND' }</small>
                { this.state.validation ? this.state.validation : <span>{this.state.amount} {tradeBase.coin}</span> }
              </div>
              <i dangerouslySetInnerHTML={{ __html: send }} />
            </button>
          </section>
        )
    }

    renderAddress = () => {
        const { tradeBase } = this.props.app.portfolio;
        return (
          <section className="trade-amount_input_address">
            <span className="label">
              <strong className="label-title">Withdraw to</strong>
            </span>
            <div className="trade-amount_input-wrapper">
              <input
                name="form-amount"
                placeholder="addresse"
                style={{ fontSize: 18 }}
                value={this.state.address}
                onChange={(e) => this.updateAddress(e.target.value)}
              />
              { tradeBase.balance > 0 && <button className="trade-setMax" onClick={() => this.setMax()}>Max</button> }
            </div>

          </section>)
    }

    renderAmount = () => {
        const { tradeBase } = this.props.app.portfolio;
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
                placeholder="0.00"
                style={{ fontSize: 18 }}
                value={this.state.amount}
                onChange={(e) => this.updateAmount(e.target.value)}
              />
              { tradeBase.balance > 0 && <button className="trade-setMax" onClick={() => this.setMax()}>Max</button> }
            </div>

          </section>)
    }

    render() {
        return (
          <section className={this.getClassState()}>
            { this.renderDeposit() }
            { this.renderAddress() }
            { this.renderAmount() }
            { this.renderButton() }
          </section>
        );
    }
}


export default Balance
