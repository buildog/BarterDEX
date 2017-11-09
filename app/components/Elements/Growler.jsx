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

        const listItems = loading.map((key, i) => <li onClick={() => removeKey(key)} className={CONSTANTS.growler[key].type ? 'growler-success' : 'growler-fail'} key={i}>
          <i dangerouslySetInnerHTML={{ __html: CONSTANTS.growler[key].type ? check : close }} />
          <span>{ CONSTANTS.growler[key].message }</span>
        </li>);

        return (
          <ul className={this.getClassState()}>
            { listItems }
          </ul>
        );
    }
}


export default Growler
