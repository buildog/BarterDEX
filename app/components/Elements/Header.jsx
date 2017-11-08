import React from 'react'
import { ipcRenderer } from 'electron';
import { hashHistory } from 'react-router';
import { observer, inject } from 'mobx-react';
import close from '../../static/traffic-light-close.svg';
import minimize from '../../static/traffic-light-minimize.svg';
import logo from '../../static/favicon.svg';


@inject('app')
@observer
class Header extends React.Component {


    logout = () => {
        this.props.app.logout();
        hashHistory.push('/');
    }

    render() {
        const { userpass } = this.props.app;

        return (
          <header className="window-header">
            <ul>
              <li className="window__title">
                <i className="window-header-logo" dangerouslySetInnerHTML={{ __html: logo }} />
                <h1>Barter<strong>DEX</strong></h1>
                <small className="window-header-appversion">{ this.props.app.appVersion }</small>

              </li>
              <li className="window__controls_right">
                { userpass.length > 0 && <button className="action danger" onClick={() => this.logout()}>logout</button> }
              </li>
            </ul>

          </header>
        );
    }
}

export default Header
