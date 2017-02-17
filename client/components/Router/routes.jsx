import React from 'react';
import App from '../App/App';
import Home from '../Home/Home';

import { Route, IndexRoute } from 'react-router';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);
