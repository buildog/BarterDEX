import React from 'react'
import { browserHistory } from 'react-router';
import { inject, observer } from 'mobx-react'
import {
        Header,
        Footer,
        MainLoader,
        Notifier,
        Login,
        Growler } from '../components';

import classNames from 'classnames';

@inject('app')
@observer
class Restricted extends React.Component {

    getClassState = () => {
        const { loader } = this.props.app;
        const { errors } = this.props.app.notifier;

        return classNames({
            app: true,
            'content-container': true,
            loading: loader.store.length > 0 && errors.length === 0
        })
    }

    privateRoute = () => {
        const { userpass } = this.props.app;
        if (userpass) {
            return this.props.children;
        }

        return (<Login />);
    }


    render() {
        return (
          <content className={this.getClassState()}>
            <Growler />
            <Header />
            <section className="app-view">
              { this.privateRoute() }
              <Notifier />
            </section>
            <Footer />
          </content>
        )
    }
}

export default Restricted
