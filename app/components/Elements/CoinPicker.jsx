import React from 'react'
import { inject, observer } from 'mobx-react'
import { Modal } from '../';

@inject('app')
@observer
class CoinPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isPickerOpen: true
        }
    }

    setTrade = (e, coin) => {
        const { setTrade } = this.props.app.portfolio;
        setTrade(coin, this.props.type);
        // autoclose after selection
        this.props.onClose && this.props.onClose();
    }

    render() {
        const { installedCoins, tradeBase, tradeRel } = this.props.app.portfolio;
        const currentTrade = { tradeBase, tradeRel };
        // const notSelf = this.props.type === 'Rel' ? 'tradeBase' : 'tradeRel';
        let coins = installedCoins.filter((item) => item.coin !== currentTrade.tradeBase.coin && item.coin !== currentTrade.tradeRel.coin);
        if (!this.props.allowZero) {
            coins = coins.filter((item) => item.balance > 0);
        }

        return (
          <Modal show={this.state.isPickerOpen} title={this.props.title} onClose={this.props.onClose}>
            <div className="coinList coin-colorized-reset">
              {
                      coins.map((coin) => (
                        <button key={coin.coin} onClick={(e) => this.setTrade(e, coin)} className={`coinList-coin withBorder`}>
                          <div className={`coinList-wrapper ${coin.coin}`}>
                            <div className="coinList-coin-logo coin-colorized">{ coin.icon }</div>
                            <div className={`${coin.coin} coinList-coin-name`}>
                              <h2 className="coin-colorized">
                                { coin.name }
                                <small>{ coin.smartaddress }</small>
                              </h2>
                            </div>
                          </div>
                        </button>))
                  }
            </div>
          </Modal>
        )
    }
}

export default CoinPicker
