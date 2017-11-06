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
    render() {
        const self = this;
        const { asks } = this.props.app.orderbook;
        return (
          <section className="trade-orderbook">
            <ReactTable
              className="-striped -highlight"
              data={asks}
              columns={orderbookColumns}
              defaultSorted={[{ id: 'price' }]}
              noDataText={this.props.placeholder}
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
