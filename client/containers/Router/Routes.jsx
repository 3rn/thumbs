import React from 'react';
import App from '../App/App';
import Home from '../Home/Home';
import ParticipantQuestionView from '../ParticipantQuestionView/ParticipantQuestionView';
import ParticipantWaitingView from '../ParticipantWaitingView/ParticipantWaitingView';
import PresenterPromptView from '../PresenterPromptView/PresenterPromptView';
import ResultsView from '../ResultsView/ResultsView';
import { Route, IndexRoute } from 'react-router';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="pqv" component={ParticipantQuestionView} />
    <Route path="pwv" component={ParticipantWaitingView} />
    <Route path="ppv" component={PresenterPromptView} />
    <Route path="rv" component={ResultsView} />
  </Route>
);
