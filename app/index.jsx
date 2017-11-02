import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import { Restricted } from './containers';
import { Dashboard, Wallet } from './components';
import { AppStore, WinStore } from '../stores';

import 'react-toggle/style.css'
import 'react-table/react-table.css'
import './styles/main.css';
import 'cryptocoins-icons/webfont/cryptocoins-colors.css'

const isDev = process.env.NODE_ENV !== 'production';

/* CSS Entry point */

if (module.hot && isDev) {
    /* hotmodule replacement for extracted CSS */
    const cssNode = document.getElementById('css-bundle');
    const port = process.env.PORT || 3000;
    cssNode.href = `http://localhost:${port}/dist/style.css?${Date.now()}`;
    module.hot.accept();
}


const stores = {
    app: new AppStore(),
    win: new WinStore()
};

const preloader = (nextState, replace, callback) => {
    const { userpass } = stores.app;

    if (!userpass) {
        replace({ pathname: '/', state: { nextPathname: nextState.location.pathname } })
        return callback()
    }

    const nRoutes = nextState.routes.length
    const component = nextState.routes[nRoutes - 1].component
    const params = nextState.params
    component.preload({ params, stores }, () => callback())
}

const App = ({ children }) => (
  <Provider {...stores}>
    <Restricted>{ children }</Restricted>
  </Provider>
);

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="/wallet/:coin/:installed" component={Wallet} onEnter={preloader} />
  </Route>
);

render(
  <div>
    {/* isDev && <DevTools /> */}
    <Router history={hashHistory} routes={Routes} />
  </div>,
  document.getElementById('root')
);
