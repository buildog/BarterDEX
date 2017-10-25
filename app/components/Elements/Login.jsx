import React from 'react'
import classNames from 'classnames';

import { observer, inject } from 'mobx-react';
import logo from '../../static/favicon.svg';
import arrow from '../../static/arrow.svg';


@inject('app')
@observer
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passphrase: '',
            clicked: false
        }
    }

    getClassState = (coin) => {
        const self = this;
        // const { loader } = this.props.app;
        // const activationLoader = loader.getLoader(4);
        return classNames({
            'login-button withBorder action centered primary': true,
            loading: this.state.clicked
        })
    }

    updatePassphase = (passphrase) => {
        this.setState({ passphrase });
    }

    login = () => {
        this.setState({ clicked: true })
        this.props.app.login(this.state.passphrase)
    }

    render() {
        const { loader } = this.props.app;
        const loginLoader = loader.getLoader(1);

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
                  className={this.getClassState()}
                  onClick={() => this.login()}
                >
                  <span>{ loginLoader || 'Login' }</span>
                  <i dangerouslySetInnerHTML={{ __html: arrow }} />
                </button>
              </section>
            </section>
          </div>
        );
    }
}


export default Login
