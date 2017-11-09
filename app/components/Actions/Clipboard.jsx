import React from 'react'

const { clipboard } = require('electron')

import copy from '../../static/copy.svg';

class Clipboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { copySuccess: this.props.copyLabel || 'Copy' }
    }

    copyToClipboard = () => {
        clipboard.writeText(this.props.value);
        this.setState({ copySuccess: 'Copied!' });
        setTimeout(() => this.setState({ copySuccess: this.props.copyLabel || 'Copy' }), 500)
    }

    render() {
        return (
          <button onClick={(e) => this.copyToClipboard(e)} className="Clipboard action lefttext normaltext dark">
            <span>{this.state.copySuccess}</span>
            <i className="Clipboard-icon" dangerouslySetInnerHTML={{ __html: copy }} />

          </button>
        );
    }
}


export default Clipboard
