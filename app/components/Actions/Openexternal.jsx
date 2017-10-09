import React from 'react'
import { shell } from 'electron';
import browser from '../../static/browser.svg';

const defaultLabel = 'Open in browser';

class Openexternal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { openSuccess: defaultLabel }
    }

    openBrowser = () => {
        shell.openExternal(this.props.url);
        this.setState({ openSuccess: 'Opening!' });
        setTimeout(() => this.setState({ openSuccess: defaultLabel }), 2000)
    }


    render() {
        const classe = this.props.class || '';
        const classNames = `Openexternal ${classe}`;

        return (
          <button onClick={(e) => this.openBrowser(e)} className={classNames}>
            <i className="Openexternal-icon" dangerouslySetInnerHTML={{ __html: browser }} />
            <span>{this.state.openSuccess}</span>
          </button>
        );
    }
}


export default Openexternal
