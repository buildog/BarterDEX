import React from 'react'
import classNames from 'classnames';
import { Clipboard } from '../';

import { observer, inject } from 'mobx-react';
import logo from '../../static/favicon.svg';
import arrow from '../../static/arrow.svg';
import circles from '../../static/circles.svg';
import check from '../../static/check.svg';
import { PassPhraseGenerator } from '../../../config/config';

@inject('app')
@observer
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passphrase: '',
            clicked: false,
            localStorage: false
        }
    }

    getClassState = (coin) => {
        const self = this;
        // const { loader } = this.props.app;
        // const activationLoader = loader.getLoader(4);
        return classNames({
            'login-button withBorder action centered primary': true,
            loading: this.state.clicked,
            withLocalStorage: this.state.localStorage
        })
    }

    getContainerState = () =>
         classNames({
             login: true,
             'login-localStorage': this.state.localStorage
         })

    componentDidMount = () => {
        if (typeof (Storage) !== 'undefined') {
            // Code for localStorage/sessionStorage.
            const userpass = localStorage.getItem('userpass');
            if (userpass) {
                this.setState({ localStorage: true });
                setTimeout(() => this.login(userpass), 400);
            }
        }
    }

    updatePassphase = (passphrase) => {
        this.setState({ passphrase });
    }

    login = (userpass = false) => {
        this.setState({ clicked: true })
        this.props.app.login({ passphrase: this.state.passphrase, userpass })
    }

    renderLoader = () => (<div className="login-processing">
      <i className="loader-svg" dangerouslySetInnerHTML={{ __html: circles }} />
      <div>Logging in</div>
    </div>)

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.login();
        }
    }

    contextmenu = (e) => {
        const electron = require('electron');
        const remote = electron.remote;
        const Menu = remote.Menu;

        const InputMenu = Menu.buildFromTemplate([{
            label: 'Undo',
            role: 'undo'
        }, {
            label: 'Redo',
            role: 'redo'
        }, {
            type: 'separator'
        }, {
            label: 'Cut',
            role: 'cut'
        }, {
            label: 'Copy',
            role: 'copy'
        }, {
            label: 'Paste',
            role: 'paste'
        }, {
            type: 'separator'
        }, {
            label: 'Select all',
            role: 'selectall'
        }
        ]);
        e.preventDefault();
        e.stopPropagation();

        let node = e.target;

        while (node) {
            if (node.nodeName.match(/^(input|textarea)$/i) || node.isContentEditable) {
                InputMenu.popup(remote.getCurrentWindow());
                break;
            }
            node = node.parentNode;
        }
    }

    render() {
        const { loader } = this.props.app;
        const loginLoader = loader.getLoader(1);
        const PassPhraseGenerated = PassPhraseGenerator.generatePassPhrase(256)

        return (
          <div className={this.getContainerState()}>
            <div className="Placeholder-bg"> <span /> </div>
            <section className="Placeholder-tagline">
              <i className="Placeholder-logo" dangerouslySetInnerHTML={{ __html: logo }} />
              <h1 className="Placeholder-text">Barter<strong>DEX</strong></h1>
              { this.state.localStorage && this.renderLoader() }
              <section className="form">
                <div onClick={() => this.setState({ passphraseNotice: true, passphrase: PassPhraseGenerated })} className="login-newpassphrase">
                  <Clipboard copyLabel="Generate a new passphrase" value={PassPhraseGenerated} />
                </div>


                <textarea
                  autoFocus
                  name="form-field-name"
                  placeholder="Enter here your passphrase"
                  value={this.state.passphrase}
                  style={{ fontSize: 18, minWidth: '260px' }}
                  onKeyPress={this.handleKeyPress}
                  onContextMenu={this.contextmenu}
                  onChange={(e) => this.updatePassphase(e.target.value)}
                />


                { this.state.passphraseNotice ? <button onClick={() => this.setState({ passphraseNotice: false })} className="action align-left danger login-passphrase-notice">
                  <span><strong>Backup your passpharase, <br /><u>it can't be retrieved!</u></strong></span>
                  <i dangerouslySetInnerHTML={{ __html: check }} />

                </button> :
                <button
                  disabled={this.state.passphrase.length === 0 || loginLoader}
                  className={this.getClassState()}
                  onClick={() => this.login()}
                >
                  <span>{ loginLoader || 'Login' }</span>
                  <i dangerouslySetInnerHTML={{ __html: arrow }} />
                </button>

            }

              </section>

              <footer><small>{ this.props.app.appVersion }</small></footer>

            </section>


          </div>
        );
    }
}


export default Login
