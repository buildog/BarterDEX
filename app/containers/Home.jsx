import React from 'react'
import { inject, observer } from 'mobx-react'
import {
        Header,
        Footer,
        MainLoader,
        Notifier,
        Login,
        Dashboard } from '../components';

import classNames from 'classnames';

@inject('app')
@observer
class Home extends React.Component {

    getClassState = () => {
        const { loader } = this.props.app;
        const hasLoading = loader.store.length;

        return classNames({
            app: true,
            'content-container': true,
            loading: hasLoading
        })
    }

    privateRoute = () => {
        const { userpass } = this.props.app;

        if (userpass) {
            return (<Dashboard />);
        }

        return (<Login />);
    }

    render() {
        const { loader } = this.props.app;
        const hasLoading = loader.store.length;

        return (
          <content className={this.getClassState()}>
            <Header />
            <section className="app-view">
              { this.privateRoute() }
            </section>
            { hasLoading === 0 ? '' : <MainLoader /> }
            <Notifier />
            <Footer />
          </content>
        )
    }
}

export default Home
