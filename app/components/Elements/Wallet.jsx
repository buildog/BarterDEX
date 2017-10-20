import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router';
import { Trade, Modal, CoinPicker } from '../';
import arrow from '../../static/arrow.svg';
import circles from '../../static/circles.svg';

@inject('app')
@observer
class Wallet extends React.Component {

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
        const { getCoin, tradeBase, tradeRel } = this.props.app.portfolio;
        const coin = getCoin(coinCode);

        /* activate the coins */

        return (
          <section className={`wallet`}>
            <header className={`wallet-wallets-header component-header component-header-centered ${coin.coin}`}>
              <Link className="wallet-wallets-header-back action primary right dark" to="/">
                <i className="wallet-wallets-list-item_action" dangerouslySetInnerHTML={{ __html: arrow }} />
                <span>back</span>
              </Link>
              <h2>
                <div className="wallet-icon coin-colorized">{ coin.icon }</div>
                <div className="wallet-coinName">{coin.name}</div>
                <div className="wallet-balance">{ coin.balance } {coin.coin}</div>
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
