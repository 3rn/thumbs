import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import styles from './styles/main.scss';
import store from './store.js';

import routes from './containers/Router/Routes';
import Home from './containers/Home/Home';

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById('root')
);
