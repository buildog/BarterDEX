import React from 'react'
import windowSize from 'react-window-size';

import { observer, inject } from 'mobx-react';
import ReactTable from 'react-table'

const orderbookColumns = (type, maxDepth, rel, coin) => [
    {
        Header: `${type} ${rel}`,
        accessor: 'price'
    },
    {
        Header: `Max ${coin}`,
        accessor: 'maxvolume'
    },
    {
        Header: `Min ${coin}`,
        accessor: 'minvolume'
    },
    {
        Header: 'Total KMD',
        accessor: 'depth',
        Cell: props => <span className={type}>{props.value}<span
          className="depth" style={{
              width: `${(props.value / maxDepth) * 30}%`
          }}
        /> </span>// Custom cell components!
    },
    {
        Header: 'Age',
        accessor: 'age'
    },
    {
        Header: 'UTXOs',
        accessor: 'numutxos'
    }

];

@inject('app')
@observer
class Orderbook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ''
        }
    }

    componentDidMount = () => {
        const { listenOrderbook } = this.props.app.orderbook;
        listenOrderbook({ base: this.props.base, rel: this.props.rel });
    }

    componentWillReceiveProps = (props) => {
        const { listenOrderbook, killListener } = this.props.app.orderbook;
        killListener();
        listenOrderbook({ base: props.base, rel: props.rel });
    }


    componentWillUnmount = () => {
        const { killListener } = this.props.app.orderbook;
        killListener();
    }

    render() {
        const self = this;
        const { asks, bids } = this.props.app.orderbook;
        const { tradeRel, tradeBase, updateRate, rates, updateMethod, amounts } = this.props.app.trade;
        const orderbook = { asks, bids };
        const height = (this.props.windowHeight - 300) / 2;

        return (
          <section className="trade-orderbook">
            <ReactTable
              className="-striped -highlight"
              data={orderbook.asks}
              columns={orderbookColumns('asks', Math.max(...orderbook.asks.map(q => q.depth)), tradeRel.coin, tradeBase.coin)}
              defaultSorted={[{ id: 'price' }]}
              noDataText={`${this.props.base}/${this.props.rel} orderbook`}
              showPaginationBottom={false}
              style={{ height }}
              getTrProps={(state, rowInfo) => ({
                  onClick: e => {
                      updateMethod('buy');
                      updateRate(rowInfo.original, 'ask')
                  },
                  className: rowInfo && rowInfo.original.price === rates.ask.pricefree && rowInfo.original.maxvolume === amounts.rel ? 'selected coin-colorized' : ''
              })}
            />
            <ReactTable
              className="-striped -highlight"
              data={orderbook.bids}
              columns={orderbookColumns('bids', Math.max(...orderbook.bids.map(q => q.depth)), tradeRel.coin, tradeBase.coin)}
              defaultSorted={[{ id: 'price' }]}
              noDataText={`${this.props.base}/${this.props.rel} orderbook`}
              showPaginationBottom={false}
              style={{ height }}
              getTrProps={(state, rowInfo) => ({
                  onClick: e => {
                      updateMethod('buy');
                      updateRate(rowInfo.original, 'bid')
                  },
                  className: rowInfo && rowInfo.original.price === rates.bid.pricefree && rowInfo.original.maxvolume === amounts.rel ? 'selected coin-colorized' : ''
              })}
            />
          </section>
        )
    }
}


export default windowSize(Orderbook)
