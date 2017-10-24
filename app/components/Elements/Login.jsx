import React from 'react'

import { observer, inject } from 'mobx-react';
import logo from '../../static/favicon.svg';
import arrow from '../../static/arrow.svg';


@inject('app')
@observer
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { passphrase: '' }
    }

    updatePassphase = (passphrase) => {
        this.setState({ passphrase });
    }

    login = () => { this.props.app.login(this.state.passphrase) }

    render() {
        return (
          <div className="login">
            <div className="Placeholder-bg"> <span /> </div>
            <section className="Placeholder-tagline">
              <i className="Placeholder-logo" dangerouslySetInnerHTML={{ __html: logo }} />
              <h1 className="Placeholder-text">Barter<strong>DEX</strong></h1>
              <section className="form">
                <textarea
                  autoFocus
                  name="form-field-name"
                  placeholder="Enter here your passphrase"
                  value={this.state.passphrase}
                  style={{ fontSize: 18, minWidth: '260px' }}
                  onChange={(e) => this.updatePassphase(e.target.value)}
                />
                <button
                  disabled={this.state.passphrase.length === 0}
                  className="login-button withBorder action centered primary"
                  onClick={() => this.login()}
                >
                  <span>Login</span>
                  <i dangerouslySetInnerHTML={{ __html: arrow }} />
                </button>
              </section>
            </section>
          </div>
        );
    }
}


export default Login
