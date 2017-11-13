import React from 'react'

import { observer, inject } from 'mobx-react';
import classNames from 'classnames';
import QRCode from 'qrcode.react';
import { Clipboard } from '../';
import send from '../../static/send.svg';
import circles from '../../static/circles.svg';
import check from '../../static/check.svg';
import close from '../../static/close.svg';

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
        const { tradeBase } = this.props.app.trade;
        const { tx } = this.props.app.portfolio;
        const self = this;
        return classNames({
            'balance-action': true,
            'trade-action-max': this.state.amount === tradeBase.balance,
            'balance-showtx': tx
        })
    }


    setMax = () => {
        const { tradeBase } = this.props.app.trade;
        const params = {
            target: {
                validity: { valid: true },
                value: tradeBase.balance
            }
        }
        this.updateAmount(params);
    }


    componentWillReact = () => {
        this.validation({ amount: this.state.amount });
    }

    updateAddress = (address) => {
        this.setState({ address })
        this.validation({ address, amount: this.state.amount });
    }

    updateAmount = (e) => {
        if (e.target.validity.valid) {
            const amount = e.target.value;
            const parsed = formatNumber(amount);
            const { tradeBase } = this.props.app.trade;

            if (amount === tradeBase.balance) {
                this.setState({ autoMax: true })
            } else {
                this.setState({ autoMax: false })
            }


            this.setState({ amount: parsed });
            this.validation({ amount: parsed, address: this.state.address });
        }
    }


    validation = (params) => {
        let validation = false;
        const { tradeBase } = this.props.app.trade;
        const amount = params.amount;
        const address = params.address;

        if (address === '') {
            validation = `address is empty`;
        } else if (tradeBase.balance < amount) {
            validation = (<div className="validation"><span>not enough {tradeBase.coin}</span><small>(max {tradeBase.balance})</small></div>);
        } else if (!amount) {
            validation = `${tradeBase.coin} amount is empty`;
        }

        this.setState({ validation });
    }


    withdraw = () => {
        const { tradeBase } = this.props.app.trade;
        const { withdraw } = this.props.app.portfolio;

        const params = {
            address: this.state.address,
            coin: tradeBase.coin,
            amount: this.state.amount,
            confirmation: true
        };

        withdraw(params);
    }

    comfirmWithdraw = () => {
        const { confirmWithdraw } = this.props.app.portfolio;
        confirmWithdraw();
    }

    cancelWithdraw = () => {
        const { cancelWithdraw } = this.props.app.portfolio;
        cancelWithdraw();
    }

    renderDeposit = () => {
        const { tradeBase } = this.props.app.trade;
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
        const { tradeBase } = this.props.app.trade;
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

    renderAddress = () => (
      <section className="trade-amount_input_address">
        <span className="label">
          <strong className="label-title">Withdraw to</strong>
        </span>
        <div className="trade-amount_input-wrapper">
          <input
            name="form-amount"
            type="text"
            placeholder="address"
            style={{ fontSize: 18 }}
            value={this.state.address}
            onChange={(e) => this.updateAddress(e.target.value)}
          />
        </div>

      </section>)

    renderAmount = () => {
        const { tradeBase } = this.props.app.trade;
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
                value={this.state.amount}
                onChange={(e) => this.updateAmount(e)}
              />
              { tradeBase.balance > 0 && <button className="trade-setMax" onClick={() => this.setMax()}>Max</button> }
            </div>

          </section>)
    }

    renderConfirm = (withdrawConfirm) => {
        const self = this;
        return (
          <div className="deposit-withdrawConfirm">
            <h3>Confirm withdraw</h3>
            <ul>
              { withdrawConfirm.tx.vout.map((key, i) => (
                <li key={i}>
                  { i === 1 ? <strong>Fees</strong> : <strong>Total</strong> }
                  { (key.satoshis * 0.00000001) }
                </li>
                      ))}
              <li>
                <strong>To</strong> { self.state.address }
              </li>
            </ul>

            <div className="deposit-withdrawConfirm-actions">
              <button className="action primary" onClick={() => self.comfirmWithdraw()}>
                <span>confirm withdraw</span>
                <i dangerouslySetInnerHTML={{ __html: check }} />
              </button>


              <button className="action danger" onClick={() => self.cancelWithdraw()}>
                <span>cancel</span>
                <i dangerouslySetInnerHTML={{ __html: close }} />
              </button>
            </div>

          </div>
        )
    }

    renderTX = () => {
        const { resetTX, tx } = this.props.app.portfolio;

        return (
          <div className="deposit-tx">
            <h3>Withdraw sent</h3>
            <Clipboard copyLabel={tx} value={tx} />

            <div className="deposit-tx-actions">
              <button className="action primary" onClick={() => resetTX()}>
                <span>OK</span>
                <i dangerouslySetInnerHTML={{ __html: check }} />
              </button>

            </div>

          </div>
        )
    }

    renderWithdraw = () => (<div className="deposit-withdraw">
      { this.renderAddress() }
      { this.renderAmount() }
      { this.renderButton() }
    </div>)

    renderLoader = () => (<div className="trade-processing">
      <i className="loader-svg" dangerouslySetInnerHTML={{ __html: circles }} />
      <h3>PROCESSING YOUR WITHDRAW</h3>
    </div>)

    render() {
        const { withdrawConfirm, tx } = this.props.app.portfolio;
        const { tradeBase } = this.props.app.trade;
        const { loader } = this.props.app;
        const withdrawLoader = loader.getLoader(6);

        return (
          withdrawLoader ? this.renderLoader() : <section className={this.getClassState()}>
            { withdrawConfirm ? this.renderConfirm(withdrawConfirm) : this.renderDeposit() }
            { tx ? this.renderTX() : '' }
            { tradeBase.balance > 0 && !withdrawConfirm ? this.renderWithdraw() : '' }
          </section>
        );
    }
}


export default Balance
