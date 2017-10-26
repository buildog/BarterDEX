import React from 'react'
import { observer, inject } from 'mobx-react';
import classNames from 'classnames';

import { Buy, Sell } from '../';

import sell from '../../static/sell.svg';
import receive from '../../static/receive.svg';
import history from '../../static/history.svg';
import buy from '../../static/buy.svg';
import charts from '../../static/charts.svg';

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
                      <i dangerouslySetInnerHTML={{ __html: buy }} />
                      <small>Buy</small>
                    </div>
                  </button>
                </li>
                <li className="trade-type-item trade-type-item-sell">
                  <button onClick={() => this.setFlow({ flow: 'sell' })}>
                    <div>
                      <i dangerouslySetInnerHTML={{ __html: sell }} />
                      <small>Sell</small>
                    </div>
                  </button>
                </li>
                <li className="trade-type-item trade-type-item-wallet">
                  <button onClick={() => this.setFlow({ flow: 'wallet' })}>
                    <div>
                      <i dangerouslySetInnerHTML={{ __html: receive }} />
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

              { (this.state.flow === 'trade-charts' || this.state.flow === 'trade-wallet' || this.state.flow === 'trade-orders') && <div className="trade-view-charts">
                <h3>{ '😰' }</h3>
                <h4>sorry!</h4>
                <p>this feature is not yet available</p>
                </div> }


            </section>
            { this.state.flow === 'trade-buy' && <Buy /> }
            { this.state.flow === 'trade-sell' && <Sell /> }

          </div>
        );
    }
}


export default Trade
