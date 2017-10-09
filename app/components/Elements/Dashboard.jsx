import React from 'react'
import { inject, observer } from 'mobx-react'
import { Trade, Modal, CoinPicker } from '../';

@inject('app')
@observer
class Dashboard extends React.Component {

    render() {
        const { tradeTo, tradeWith, coinsList } = this.props.app.portfolio;

        return (
          <section className="dashboard">
            { tradeTo && tradeWith && <Trade /> }
            { !tradeTo && coinsList.length > 0 && <CoinPicker type="To" title="Select a coin to buy" />}
          </section>
        )
    }
}

export default Dashboard
