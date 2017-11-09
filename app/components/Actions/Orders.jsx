import React from 'react'

import { observer, inject } from 'mobx-react';
import classNames from 'classnames';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import buy from '../../static/buy.svg';
import sell from '../../static/sell.svg';
import stop from '../../static/stop.svg';
import play from '../../static/play.svg';
import pause from '../../static/pause.svg';

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

    getBotClassState = (stopped) => classNames({
        'orders-item': true,
        'order-item-stopped': stopped
    })

    toggleBot = ({ botid, method }) => {
        const { toggleBot } = this.props.app.trade;
        toggleBot({ botid, method });
    }


    render() {
        const { tradeBase } = this.props.app.portfolio;
        let { bots } = this.props.app.trade;
        bots = bots.filter((bot) => bot.base === tradeBase.coin);

        const listBots = bots.map((bot, i) => (
          <li className={this.getBotClassState(bot.stopped)} key={i}>
            <div className={`orders-item-details`}>

              <div className={`orders-item-details-action progress-container ${bot.base}`}>
                <span className="orders-item-details-action-type">
                  <span className="orders-item-details-action-type-title">{bot.action}</span>
                  { bot.trades.length > 0 && <small>{bot.trades.length} attempts </small> }
                </span>
                <span className="coin-colorized orders-item-details_action" dangerouslySetInnerHTML={{ __html: bot.action === 'buy' ? buy : sell }} />
                <span>{ bot.totalbasevolume } { bot.base }</span>
              </div>

              <progress className="progress_bar" value={bot.percentage || 0} data-amount={`${bot.volume || 0} ${bot.base}`} max="100" />

              <hr />
              <div className={`orders-item-details-meta ${bot.base}`}>
                <div>
                  <small className="coin-colorized"><strong>Max Price</strong> { bot.maxprice } { bot.rel }</small>
                  <small className="coin-colorized"><strong>Total</strong> { bot.totalrelvolume } { bot.rel }</small>
                </div>


                { !bot.stopped && <button onClick={() => this.toggleBot({ botid: bot.botid, method: bot.paused ? 'bot_resume' : 'bot_pause' })} className={this.getBtn(bot.paused ? 'resume' : 'pause')}>
                  <i dangerouslySetInnerHTML={{ __html: bot.paused ? play : pause }} />
                </button> }

                { bot.stopped ? <strong>STOPPED</strong> : <button onClick={() => this.toggleBot({ botid: bot.botid, method: 'bot_stop' })} className={this.getBtn('stop')}>
                  <i dangerouslySetInnerHTML={{ __html: stop }} />
                </button> }

              </div>
            </div>
          </li>
            )


    );

        const hasBots = bots.length > 0;

        return (
          <section className={this.getClassState()}>
            { hasBots ? (
              <ul className="orders-list singleColumn noHover">
                { listBots }
              </ul>
          ) : '' }
          </section>
        );
    }
}


export default Orders
