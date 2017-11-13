import React from 'react'
import { inject, observer } from 'mobx-react'
import { Modal } from '../';
import classNames from 'classnames';
import CONSTANTS from '../../../constants';

import plus from '../../static/plus.svg';
import arrow from '../../static/arrow.svg';
import close from '../../static/close.svg';
import circles from '../../static/circlesWhite.svg';

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

    renderBtn = (clickable) => {
        if (!this.state.isPickerOpen) {
            const { tradeRel } = this.props.app.trade;

            return (<button className="action noTransformTranslate arrow-down" onClick={(e) => clickable && this.toggle(e)}>
              <span className={tradeRel.coin}>
                <span className="trade-base-icon coin-colorized">{tradeRel.icon}</span>
                <strong>{ tradeRel.name }</strong>
              </span>
              { clickable > 0 && <i dangerouslySetInnerHTML={{ __html: arrow }} /> }
            </button>)
        }

        return (<button className="action noTransformTranslate danger" onClick={(e) => this.toggle(e)}>
          <span>cancel</span>
          <i dangerouslySetInnerHTML={{ __html: close }} />
        </button>)
    }

    renderList = (coins) => {
        const { renderBalance } = this.props.app.portfolio;
        const { tradeBase } = this.props.app.trade;
        return (<div className={this.getListState()}>
          <ul className="coinList-list singleColumn coin-colorized-reset">
            {
                  coins.filter((coin) => coin.coin !== tradeBase.coin).map((coin, index) => (
                    <li
                      className={this.getCoinState(coin.coin)} onClick={(e) => {
                          this.setState({ coinToEnable: coin.coin })
                          this.props.onSelected(e, coin)
                      }} key={index}
                    >
                      <div className="coinList-coin_icon coin-colorized"> { coin.icon }</div>
                      <div className={`coinList-coin_balance`}>
                        <strong className="coinList-coin_name">{ coin.name }</strong>

                        <small>{ renderBalance(coin.balance, coin.coin) }</small>
                      </div>
                      <span className="coinList-coin_action" dangerouslySetInnerHTML={{ __html: arrow }} />
                      <span className="coinList-coin_action_loader" dangerouslySetInnerHTML={{ __html: circles }} />
                    </li>))
                      }
          </ul>
        </div>
        )
    }

    render() {
        const { installedCoins } = this.props.app.portfolio;


        return (
          <Modal show title={this.props.title} onClose={() => this.toggle()}>
            { this.state.picker && this.toggleOpen(this.state.picker) }
            { this.renderBtn(installedCoins.length) }
            { this.renderList(installedCoins) }
          </Modal>
        )
    }
}

export default CoinPicker
