import React from 'react'

import { observer, inject } from 'mobx-react';
import classNames from 'classnames';
import { Clipboard } from '../';
import gear from '../../static/gear.svg';
import buy from '../../static/buy.svg';
import sell from '../../static/sell.svg';

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


    render() {
        const { bots } = this.props.app.trade;

        const listBots = bots.map((bot, i) =>
          <li className="orders-item" key={i}>
            <div className={`orders-item-details ${bot.rel}`}>
              <strong className="">{ bot.totalbasevolume } { bot.base }</strong>
              <small className="coin-colorized">Price: { bot.maxprice } { bot.rel }</small>
              <small className="coin-colorized">Total: { bot.totalrelvolume } { bot.rel }</small>
            </div>
            <span className="orders-item-details_action" dangerouslySetInnerHTML={{ __html: gear }} />
          </li>

    );

        const hasBots = bots.length > 0;
        console.log(hasBots);
        console.log(bots)
        return (
          <section className={this.getClassState()}>
            { hasBots ? (
              <ul className="orders-list">
                { listBots }
              </ul>
          ) : '' }
          </section>
        );
    }
}


export default Orders
