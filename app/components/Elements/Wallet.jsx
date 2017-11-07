import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router';
import { Trade } from '../';
import classNames from 'classnames';
import arrow from '../../static/arrow.svg';
import circles from '../../static/circles.svg';

@inject('app')
@observer
class Wallet extends React.Component {

    static preload({ params, stores }, callback) {
        const { coin, installed } = params;
        const { autoSetTrade } = stores.app.portfolio;
        autoSetTrade({ coin, installed: installed === 'true' });
        /* wait for callaback?*/
        const loop = setTimeout(() => {
            const { tradeBase, tradeRel } = stores.app.portfolio;
            if (tradeBase && tradeRel) {
                clearInterval(loop);
                callback();
            }
        }, 1000)
    }

    getClassState = () => {
        const self = this;
        const { tradeBase, tradeRel } = this.props.app.portfolio;

        return classNames({
            wallet: true,
            'wallet-ready': tradeBase && tradeRel
        })
    }

    componentWillUnmount = () => {
        const { leave } = this.props.app.portfolio;
        leave();
    }

    renderTrade = () => {
        const { tradeBase, tradeRel } = this.props.app.portfolio;
        if (tradeBase && tradeRel) {
            return (<div className={`wallet-exchange`}>
              <Trade />
            </div>
            )
        }
    }


    render() {
        const { tradeBase, renderBalance } = this.props.app.portfolio;
        /* activate the coins */

        return (
          <section className={this.getClassState()}>
            <header className={`wallet-wallets-header component-header component-header-centered component-header-withBack`}>
              <Link className="wallet-wallets-header-back action primary right dark" to="/">
                <i className="wallet-wallets-list-item_action" dangerouslySetInnerHTML={{ __html: arrow }} />
              </Link>
              <h2 className={tradeBase.coin}>
                <div className="wallet-icon coin-colorized">{ tradeBase.icon }</div>
                <div className="wallet-coinName coin-colorized">{tradeBase.name}</div>
                <div className="wallet-balance">{ renderBalance(tradeBase.balance, tradeBase.coin) }</div>
              </h2>

            </header>

            <section className="wallet-trade">
              { this.renderTrade() }
            </section>
          </section>
        )
    }
}

export default Wallet
