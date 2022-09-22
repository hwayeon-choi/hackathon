/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './app/index';
import {name as appName} from './app.json';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import promissMiddleware from 'redux-promise';
import reducers from './app/store/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreMiddleware = createStore(
  reducers,
  composeEnhancers(applyMiddleware(promissMiddleware)),
);

const appRedux = () => (
  <Provider store={createStoreMiddleware}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => appRedux);