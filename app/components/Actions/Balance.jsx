import React from 'react'

import { observer, inject } from 'mobx-react';
import classNames from 'classnames';
import QRCode from 'qrcode.react';


import { Clipboard } from '../';


@inject('app')
@observer
class Balance extends React.Component {
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
            'wallet-action': true
        })
    }


    renderDeposit = () => {
        const { tradeBase } = this.props.app.portfolio;
        return (
          <section className="balance-deposit">
            <div className={`balance-deposit-body ${tradeBase.coin}`}>
              <section className="balance-deposit-address">
                <Clipboard copyLabel={tradeBase.smartaddress} value={tradeBase.smartaddress} />
              </section>

            </div>
          </section>
        )
    }


    render() {
        return (
          <section className={this.getClassState()}>
            { this.renderDeposit() }
          </section>
        );
    }
}


export default Balance
