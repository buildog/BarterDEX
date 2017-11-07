import React from 'react'

import { observer, inject } from 'mobx-react';
import ReactTable from 'react-table'

const orderbookColumns = [
    {
        Header: 'Ask Price',
        accessor: 'price' // String-based value accessors!
    },
    {
        Header: 'Max Volume',
        accessor: 'maxvolume' // String-based value accessors!
    },
    {
        Header: 'UTXOs',
        accessor: 'numutxos' // String-based value accessors!
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
        const orderbook = { asks, bids };
        const orderbookData = orderbook[this.props.type];

        return (
          <section className="trade-orderbook">
            <ReactTable
              className="-striped -highlight"
              data={orderbookData}
              columns={orderbookColumns}
              defaultSorted={[{ id: 'price' }]}
              noDataText={`Fetching ${this.props.base}/${this.props.rel} orderbook`}
              showPaginationBottom={false}
              style={{ height: '280px' }}
              getTrProps={(state, rowInfo) => ({
                  onClick: e => {
                      self.props.onSelected(rowInfo);
                      // self.setState({ selected: rowInfo.index })
                  },
                  className: rowInfo && rowInfo.index === self.state.selected ? 'selected coin-colorized' : ''
              })}
            /> </section>
        )
    }
}


export default Orderbook
