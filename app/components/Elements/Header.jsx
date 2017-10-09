import React from 'react'
import { ipcRenderer } from 'electron';
import { observer, inject } from 'mobx-react';
import close from '../../static/traffic-light-close.svg';
import minimize from '../../static/traffic-light-minimize.svg';
import logo from '../../static/favicon.svg';


@inject('app')
@observer
class Header extends React.Component {
    closeWindow = () => {
        ipcRenderer.send('close');
    }

    minimizeWindow = () => {
        ipcRenderer.send('minimize');
    }

    logout = () => { this.props.app.logout() }

    render() {
        const { userpass } = this.props.app;

        return (
          <header className="window-header">
            <ul>
              <li className="window__controls">
                <a
                  onClick={(event) => this.closeWindow(event)}
                  className="window__controls-close"
                  dangerouslySetInnerHTML={{ __html: close }}
                />
                <a
                  onClick={() => this.minimizeWindow()}
                  className="window__controls-minimize"
                  dangerouslySetInnerHTML={{ __html: minimize }}
                />
              </li>
              <li className="window__title">
                <i className="window-header-logo" dangerouslySetInnerHTML={{ __html: logo }} />
                <h1 className="Placeholder-text">Barter<strong>DEX</strong></h1>
              </li>
              { userpass ? <li className="window__controls_right">
                <button className="withBorder danger" onClick={() => this.logout()}>logout</button>
              </li> : '' }
            </ul>

          </header>
        );
    }
}

export default Header
