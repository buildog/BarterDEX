import React from 'react'
import { observer, inject } from 'mobx-react';
import classNames from 'classnames';
import CONSTANTS from '../../../constants';
import check from '../../static/check.svg';
import close from '../../static/close.svg';

@inject('app')
@observer
class Growler extends React.Component {

    getClassState = () => classNames({
        growler: true
    })

    render() {
        const { store: loading, removeKey } = this.props.app.growler;
        const { errors } = this.props.app.notifier;

        if (errors.length > 0) {
            // don't display loader when there is an error...
            return null;
        }

        const listItems = loading.map(({ code, desc }, i) => <li onClick={() => removeKey(code)} className={CONSTANTS.growler[code].type ? 'growler-success' : 'growler-fail'} key={i}>
          <i dangerouslySetInnerHTML={{ __html: CONSTANTS.growler[code].type ? check : close }} />
          <div className="growler-title">
            <span>{ CONSTANTS.growler[code].message }</span>
            <small className="growler-desc">{ desc }</small>
          </div>

        </li>);

        return (
          <ul className={this.getClassState()}>
            { listItems }
          </ul>
        );
    }
}


export default Growler
