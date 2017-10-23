import React from 'react'
import { ipcRenderer } from 'electron';
import { observer, inject } from 'mobx-react';
import close from '../../static/traffic-light-close.svg';
import minimize from '../../static/traffic-light-minimize.svg';
import logo from '../../static/favicon.svg';


@inject('app')
@observer
class Header extends React.Component {


    logout = () => { this.props.app.logout() }

    render() {
        const { userpass } = this.props.app;

        return (
          <header className="window-header">
            <ul>
              <li className="window__title">
                <i className="window-header-logo" dangerouslySetInnerHTML={{ __html: logo }} />
                <h1 className="Placeholder-text">Barter<strong>DEX</strong></h1>
              </li>
              { userpass.length > 0 ? <li className="window__controls_right">
                <button className="action danger" onClick={() => this.logout()}>logout</button>
              </li> : '' }
            </ul>

          </header>
        );
    }
}

export default Header
