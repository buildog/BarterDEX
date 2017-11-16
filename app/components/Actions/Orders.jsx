import React from 'react'

import { observer, inject } from 'mobx-react';
import classNames from 'classnames';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import buy from '../../static/buy.svg';
import sell from '../../static/sell.svg';
import stop from '../../static/stop.svg';
import play from '../../static/play.svg';
import pause from '../../static/pause.svg';
import shuffle from '../../static/shuffle.svg';

const formatNumber = (str) => str;


@inject('app')
@observer
class Orders extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    getClassState = () => classNames({
        'balance-action': true
    })

    getBtn = (type) => classNames({
        'order-stop action align-left onlyIcon danger': true,
        orange: type === 'pause',
        green: type === 'resume'

    })

    getBotClassState = (paused) => classNames({
        'orders-item': true,
        'order-item-stopped': paused
    })

    toggleBot = ({ botid, method }) => {
        const { toggleBot } = this.props.app.trade;
        toggleBot({ botid, method });
    }


    renderBotState = (bot) => (<div className={`orders-item-details-meta ${bot.base}`}>
      <progress className="progress_bar" value={bot.percentage || 0} data-amount={`${bot.volume || 0} ${bot.base}`} max="100" />

      <hr />

      <div className="orders-item-details-meta-more">
        <div className="orders-item-details-meta-more-data">
          <small>{ bot.trades.length > 0 && <small>{bot.trades.length} attempt{bot.trades.length > 1 && 's'} </small> }</small>
          <small className="coin-colorized"><strong>Max Price</strong> { bot.maxprice } { bot.rel }</small>
          <small className="coin-colorized"><strong>Total</strong> { bot.totalrelvolume } { bot.rel }</small>
        </div>

        <div className="orders-item-details-meta-more-data-buttons">
          { !bot.stopped && <button onClick={() => this.toggleBot({ botid: bot.botid, method: bot.paused ? 'bot_resume' : 'bot_pause' })} className={this.getBtn(bot.paused ? 'resume' : 'pause')}>
            <i dangerouslySetInnerHTML={{ __html: bot.paused ? play : pause }} />
          </button> }

          <button onClick={() => this.toggleBot({ botid: bot.botid, method: 'bot_stop' })} className={this.getBtn('stop')}>
            <i dangerouslySetInnerHTML={{ __html: stop }} />
          </button>
        </div>
      </div>

    </div>
    )

    renderBot = (bot, i) => {
        const { getIcon } = this.props.app.portfolio;
        return (
          <li className={this.getBotClassState(bot.paused)} key={i}><div className={`orders-item-details`}>
            <div className="orders-item-wrapper">
              <div className={`orders-item-details-coins`}>
                <section className={`orders-item-details-coin ${bot.rel}`}>
                  <span className="orders-item-details-coin-amount">{ bot.totalrelvolume }</span>
                  <div className="orders-item-details-coin-icon coin-colorized"> { getIcon(bot.rel) }</div>
                </section>
                <div className={`orders-item-details-type`}>
                  <span className="orders-item-details-type-label">Max { bot.action }</span>
                  <i className="orders-item-details-coins-tradeType" dangerouslySetInnerHTML={{ __html: shuffle }} />
                </div>
                <section className={`orders-item-details-coin ${bot.base}`}>
                  <div className="orders-item-details-coin-icon coin-colorized"> { getIcon(bot.base) }</div>
                  <span className="orders-item-details-coin-amount"> { bot.totalbasevolume }</span>
                </section>
              </div>
              {this.renderBotState(bot)}
            </div>
          </div>
          </li>
        )
    }

    renderSwap = (swap, i) => {
        const { getIcon } = this.props.app.portfolio;
        return (
          <li className={this.getBotClassState(swap.iambob)} key={i}>
            <div className="orders-item-wrapper">
              <div className={`orders-item-details`}>
                <div className={`orders-item-details-coins`}>
                  <section className={`orders-item-details-coin ${swap.iambob ? swap.bob : swap.alice}`}>
                    <span className="orders-item-details-coin-amount"> { swap.iambob ? swap.srcamount : swap.destamount }</span>
                    <div className="orders-item-details-coin-icon coin-colorized"> { swap.iambob ? getIcon(swap.bob) : getIcon(swap.alice) }</div>
                  </section>
                  <div className={`orders-item-details-type`}>
                    <span className="orders-item-details-type-label">{ swap.status }</span>
                    <i className="orders-item-details-coins-tradeType" dangerouslySetInnerHTML={{ __html: shuffle }} />
                  </div>
                  <section className={`orders-item-details-coin ${swap.iambob ? swap.alice : swap.bob}`}>
                    <div className="orders-item-details-coin-icon coin-colorized"> { swap.iambob ? getIcon(swap.alice) : getIcon(swap.bob) }</div>
                    <span className="orders-item-details-coin-amount"> { swap.iambob ? swap.destamount : swap.srcamount }</span>
                  </section>
                </div>
              </div>
            </div>
          </li>
        )
    }

    render() {
        const { bots, swaps, tradeBase } = this.props.app.trade;
        let elements;

        if (this.props.all) {
            elements = bots.concat(swaps)
        } else {
            const filteredBots = bots.filter((bot) => bot.base === tradeBase.coin);
            const filteredSwaps = swaps.filter((swap) => swap.bob === tradeBase.coin || swap.alice === tradeBase.coin);
            elements = filteredBots.concat(filteredSwaps)
        }


        const list = elements.map((data, i) => (data.botid ? this.renderBot(data, i) : this.renderSwap(data, i)));

        return (
          <section className={this.getClassState()}>
            { list.length > 0 ? (<ul className="orders-list singleColumn noHover">
              { list }
            </ul>) : '' }
          </section>
        );
    }
}


export default Orders
