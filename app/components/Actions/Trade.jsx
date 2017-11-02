import React from 'react'
import { observer, inject } from 'mobx-react';
import classNames from 'classnames';

import { Buy, Sell, Balance } from '../';
import QRCode from 'qrcode.react';

import sell from '../../static/sell.svg';
import receive from '../../static/receive.svg';
import history from '../../static/history.svg';
import buy from '../../static/buy.svg';
import charts from '../../static/charts.svg';
import shuffle from '../../static/shuffle.svg';

@inject('app')
@observer
class Trade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flow: 'trade-buy'
        }
    }

    getClassState = () => {
        const self = this;
        return classNames({
            trade: true,
            [this.state.flow]: true
        })
    }

    setFlow = (type) => this.setState({ flow: `trade-${type.flow}` })

    render() {
        // portfolio
        const { tradeBase } = this.props.app.portfolio;

        return (
          <div className={this.getClassState()}>
            <section className="trade-body">

              <ul className="trade-type">
                <li className="trade-type-item trade-type-item-charts">
                  <button onClick={() => this.setFlow({ flow: 'charts' })}>
                    <div>
                      <i dangerouslySetInnerHTML={{ __html: charts }} />
                      <small>Charts</small>
                    </div>
                  </button>
                </li>
                <li className="trade-type-item trade-type-item-buy">
                  <button onClick={() => this.setFlow({ flow: 'buy' })}>
                    <div>
                      <i dangerouslySetInnerHTML={{ __html: shuffle }} />
                      <small>Exchange</small>
                    </div>
                  </button>
                </li>
                <li className="trade-type-item trade-type-item-wallet">
                  <button onClick={() => this.setFlow({ flow: 'wallet' })}>
                    <div>
                      <i><QRCode size={30} value={tradeBase.smartaddress} /></i>
                      <small>Wallet</small>
                    </div>
                  </button>
                </li>
                <li className="trade-type-item trade-type-item-orders">
                  <button onClick={() => this.setFlow({ flow: 'orders' })}>
                    <div>
                      <i dangerouslySetInnerHTML={{ __html: history }} />
                      <small>Orders</small>
                    </div>
                  </button>
                </li>
              </ul>

              { (this.state.flow === 'trade-charts' || this.state.flow === 'trade-orders') && <div className="trade-view-charts">
                <h3>{ '😰' }</h3>
                <h4>sorry!</h4>
                <p>this feature is not yet available</p>
                </div> }

              { this.state.flow === 'trade-buy' && <Buy /> }
              { this.state.flow === 'trade-wallet' && <Balance /> }
              { this.state.flow === 'trade-sell' && <Sell /> }

            </section>
          </div>
        );
    }
}


export default Trade
