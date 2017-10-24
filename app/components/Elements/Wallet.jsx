import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router';
import { Trade, Modal, CoinPicker } from '../';
import classNames from 'classnames';

import arrow from '../../static/arrow.svg';
import circles from '../../static/circles.svg';

@inject('app')
@observer
class Wallet extends React.Component {

    getClassState = () => {
        const self = this;
        const { tradeBase, tradeRel } = this.props.app.portfolio;

        return classNames({
            wallet: true,
            'wallet-ready': tradeBase && tradeRel
        })
    }

    renderTrade = () => {
        const { tradeBase, tradeRel } = this.props.app.portfolio;
        if (tradeBase && tradeRel) {
            return (<div className={`wallet-exchange`}>
              <Trade />
            </div>
            )
        }

        return (<i className="loader-svg" dangerouslySetInnerHTML={{ __html: circles }} />);
    }

    componentDidMount = () => {
        const coinCode = this.props.params.coin;
        const { autoSetTrade } = this.props.app.portfolio;
        autoSetTrade(coinCode);
    }

    componentWillUnMount = () => {
        const { leave } = this.props.app.portfolio;
        leave();
    }


    render() {
        const coinCode = this.props.params.coin;
        const { getCoin, tradeBase, tradeRel, renderBalance, portfolioRenderFIAT } = this.props.app.portfolio;
        const coin = getCoin(coinCode);

        /* activate the coins */

        return (
          <section className={this.getClassState()}>
            <header className={`wallet-wallets-header component-header component-header-centered component-header-withBack ${coin.coin}`}>
              <Link className="wallet-wallets-header-back action primary right dark" to="/">
                <i className="wallet-wallets-list-item_action" dangerouslySetInnerHTML={{ __html: arrow }} />
                <span className="wallet-wallets-header-back-helper">Back</span>
              </Link>
              <h2>
                <div className="wallet-icon coin-colorized">{ coin.icon }</div>
                <div className="wallet-coinName coin-colorized">{coin.name}</div>
                <div className="wallet-balance">{ renderBalance(coin.coin) }</div>
                <small className="wallet-balance">({ portfolioRenderFIAT(coin.coin) })</small>
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
