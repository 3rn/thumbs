import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Presentations from './components/Presenter/Presentation';
import PresentationQuestions from './components/Presenter/PresentationViews/PresentationQuestions';
import ParticipantContainer from './containers/ParticipantContainer';
import PresenterContainer from './containers/PresenterContainer';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="presentations" component={Presentations} />
    <Route path="presentationQuestions" component={PresentationQuestions} />
    <Route path="part/:room" component={ParticipantContainer} />
    <Route path="pres/:room" component={PresenterContainer} />
  </Route>
);
