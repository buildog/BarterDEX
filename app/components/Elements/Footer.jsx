import React from 'react'
import { observer, inject } from 'mobx-react';
import classNames from 'classnames';
import { Link } from 'react-router';
import ICO_fullscreen from '../../static/fullscreen.svg';
import ICO_fullscreenExit from '../../static/fullscreen-exit.svg';

@inject('win') @observer
class Footer extends React.Component {
    getClassState = () => classNames({
        'window-footer': true,
        'window-footer__visible': true
    })

    render() {
        return (
          <footer className={this.getClassState()} />
        );
    }
}


export default Footer
