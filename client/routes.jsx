import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import HomeContainer from './containers/HomeContainer';

import ParticipantContainer from './containers/ParticipantContainer';
import PresenterContainer from './containers/PresenterContainer';
import SlideViewContainer from './containers/SlideViewContainer';

// V1
import Dashboard from './components/Presenter/Dashboard';
import LectureView from './components/Presenter/LectureView';
import EditLectureView from './components/Presenter/EditLectureView';

const getRoutes = (store) => {
  const authRequired = (nextState, replace) => {
    // Now you can access the store object here.
    const state = store.getState();
    if (state.loginReducer.name === '') {
      // Not authenticated, redirect to home page.
      replace({ pathname: '/' });
    }
  };

  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomeContainer} />

      <Route path="a/:code" component={PresenterContainer} />
      <Route path="r/:code" component={ParticipantContainer} />

      <Route path="u" component={Dashboard} onEnter={authRequired} />
      <Route path="l/:lectureId" component={LectureView} onEnter={authRequired} />
      <Route path="l/:lectureId/edit" component={EditLectureView} onEnter={authRequired} />
      <Route path="l/:lectureId/d/:deliveryId" component={PresenterContainer} onEnter={authRequired} />

      <Route path="s/:slideId" component={SlideViewContainer} />

      <Redirect from="*" to="/" />
    </Route>
  );
};

export default getRoutes;
