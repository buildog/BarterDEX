import React from 'react'
import { inject, observer } from 'mobx-react'
import { Modal } from '../';
import classNames from 'classnames';

import plus from '../../static/plus.svg';
import arrow from '../../static/arrow.svg';
import close from '../../static/close.svg';

@inject('app')
@observer
class CoinPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isPickerOpen: false
        }
    }

    getListState = () => {
        const self = this;
        // const { loader } = this.props.app;
        // const activationLoader = loader.getLoader(4);
        return classNames({
            'modal-content-overlay': true,
            'modal-display-content': self.state.isPickerOpen
        })
    }

    getCoinState = (coin) => {
        const self = this;
        // const { loader } = this.props.app;
        // const activationLoader = loader.getLoader(4);
        return classNames({
            'coinList-coin': true,
            [coin]: true,
            enabling: self.state.coinToEnable === coin
        })
    }

    toggle = () => {
        this.setState({ isPickerOpen: !this.state.isPickerOpen })
    }

    renderBtn = () => {
        if (!this.state.isPickerOpen) {
            const { tradeRel } = this.props.app.portfolio;

            if (this.props.trade && tradeRel) {
                return (<button className="action arrow-down " onClick={(e) => this.toggle(e)}>
                  <span className={tradeRel.coin}>
                    <span className="trade-base-icon coin-colorized">{tradeRel.icon}</span>
                    <strong>{ tradeRel.name }</strong>
                  </span>
                  <i dangerouslySetInnerHTML={{ __html: arrow }} />
                </button>)
            }

            return (<button className="action primary" onClick={(e) => this.toggle(e)}>
              <span>add coins</span>
              <i dangerouslySetInnerHTML={{ __html: plus }} />
            </button>)
        }
        return (<button className="action danger" onClick={(e) => this.toggle(e)}>
          <span>cancel</span>
          <i dangerouslySetInnerHTML={{ __html: close }} />
        </button>)
    }

    renderList = () => {
        const { coinsList, tradeBase, tradeRel } = this.props.app.portfolio;
        const currentTrade = { tradeBase, tradeRel };
        // const notSelf = this.props.type === 'Rel' ? 'tradeBase' : 'tradeRel';
        const coins = coinsList.filter((item) => item.coin !== currentTrade.tradeBase.coin && item.coin !== currentTrade.tradeRel.coin);


        return (<div className={this.getListState()}>
          <ul className="coinList-list coin-colorized-reset">
            {
              coins.map((coin) => (
                <li className={this.getCoinState(coin.coin)} onClick={(e) => this.props.onSelected(e, coin)} key={coin.coin}>
                  <div className="coinList-coin_icon coin-colorized"> { coin.icon }</div>
                  <div className={`coinList-coin_balance ${coin.coin}`}>
                    <strong className="coin-colorized">{ coin.name }</strong>
                    <small>{ coin.balance } { coin.coin }</small>
                  </div>
                  <span className="coinList-coin_action" dangerouslySetInnerHTML={{ __html: arrow }} />
                </li>))
                  }
          </ul>
        </div>
        )
    }

    render() {
        return (
          <Modal show title={this.props.title} onClose={() => this.toggle()}>
            { this.renderBtn() }
            { this.state.picker && this.toggleOpen(this.state.picker) }
            { this.renderList() }
          </Modal>
        )
    }
}

export default CoinPicker
