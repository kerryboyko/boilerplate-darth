'use-strict'
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {syncHistoryWithStore, routerReducer, push} from 'react-router-redux';
import store, {routeTo} from './store/configureStore';
import {Router, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './containers/App';

injectTapEventPlugin();

// for React-Redux-Router. Redux store will now have access
// to window.location.
const history = syncHistoryWithStore(browserHistory, store);

// these routes are in this object format so that they can be loaded
// asynchronously through code-splitting.
const errorLoading = (err) => console.error('Dynamic page loading failed', err);

const loadRoute = (callback) => (fn) => callback(null, fn.default);

// Each route will load it's javascript during runtime, in seperate bundles.
export const routes = {
  component: App,
  indexRoute: {
        getComponent(location, cb) {
          System.import ('./containers/Placeholder').then(loadRoute(cb)).catch(errorLoading);
        }
      },
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import ('./containers/Placeholder').then(loadRoute(cb)).catch(errorLoading);
      }
    },
    {
      path: '/admin',
      getComponent(location, cb) {
        System.import ('./containers/admin/Admin').then(loadRoute(cb)).catch(errorLoading);
      }
    },
    {
      path: '/child',
      getComponent(location, cb) {
        System.import ('./containers/Placeholder').then(loadRoute(cb)).catch(errorLoading);
      }
    }, {
      path: '*',
      getComponent(location, cb) {
        System.import ('./components/NotFound').then(loadRoute(cb)).catch(errorLoading);
      }
    }
  ]
}

// Render it to DOM
ReactDOM.render(
  <Provider store={store}>
  <Router history={history} routes={routes}/>
</Provider>, document.getElementById('root'));
