import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../App/App';
import Home from '../Home/Home';
import ParticipantContainer from '../../containers/ParticipantContainer/ParticipantContainer';
import PresenterContainer from '../../containers/PresenterContainer/PresenterContainer';
import Presentations from '../Presentations/Presentations';
import PresentationQuestions from '../PresentationQuestions/PresentationQuestions';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="participant" component={ParticipantContainer} />
    <Route path="presenter" component={PresenterContainer} />
    <Route path="presentations" component={Presentations} />
    <Route path="presentationQuestions" component={PresentationQuestions} />
    <Route path="part/:room" component={ParticipantContainer} />
    <Route path="pres/:room" component={PresenterContainer} />
  </Route>
);
