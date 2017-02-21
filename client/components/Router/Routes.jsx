import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../App/App';
import Home from '../Home/Home';
import ParticipantContainer from '../../containers/ParticipantContainer/ParticipantContainer';



module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="participant" component={ParticipantContainer} />
  </Route>
);
