import React from 'react'
import { observer, inject } from 'mobx-react';
import classNames from 'classnames';
import CONSTANTS from '../../../constants';
import circles from '../../static/circles.svg';

@inject('app')
@observer
class MainLoader extends React.Component {

    getClassState = () => classNames({
        loader: true
    })

    render() {
        const { store: loading } = this.props.app.loader;
        const { errors } = this.props.app.notifier;

        if (errors.length > 0) {
            // don't display loader when there is an error...
            return null;
        }

        const listItems = loading.map((key, i) => <li key={i}>{ CONSTANTS.loading[key] }</li>);

        return (
          <div className={this.getClassState()}>
            <div className="loader-wrapper">
              <i className="loader-svg" dangerouslySetInnerHTML={{ __html: circles }} />
              <ul>{ listItems }</ul>
            </div>
          </div>
        );
    }
}


export default MainLoader
