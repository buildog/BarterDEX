import React from 'react'
import { observer, inject } from 'mobx-react';
import classNames from 'classnames';
import CONSTANTS from '../../../constants';
import angry from '../../static/angry.svg';

@inject('app')
@observer
class Notifier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            critical: false,
            listErrors: []
        }
    }

    getClassState = () => {
        const { errors } = this.props.app.notifier;

        return classNames({
            notifier: true,
            'notifier-error': errors.length > 0,
            'notifier-critical': this.state.isCritical
        })
    }

    componentWillReact = () => {
        const { errors } = this.props.app.notifier;
        /* critical mean an app restart is required (eg: camera is busy) */
        let isCritical;
        const listErrors = errors.map((error, i) => {
            if (CONSTANTS.error[error.code].critical) {
                isCritical = true;
            }
            return (<li key={i}>
              { error.desc ? error.desc : CONSTANTS.error[error.code].message }
            </li>)
        })

        this.setState({ listErrors, isCritical });
    }

    render() {
        const { clearAllErrors, refreshApp } = this.props.app.notifier;

        return (
          <div className={this.getClassState()}>
            <div className="notifier-title">
              <i className="notifier-title-icon" dangerouslySetInnerHTML={{ __html: angry }} />
              <h1 className="notifier-title-text">{ this.state.isCritical ? 'That\'s bad!' : 'Sorry!'}</h1>

            </div>
            <ul className="notifier-items">
              { this.state.listErrors }
              <small className="notifier-appversion">{ this.props.app.appVersion }</small>

              { !this.state.isCritical && <button onClick={() => clearAllErrors()} className="notifier-close">OK</button> }
              { this.state.isCritical && <button onClick={() => refreshApp()} className="notifier-close">Retry</button> }
            </ul>


          </div>
        );
    }
}


export default Notifier
