import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import HomeContainer from './containers/HomeContainer';

import Presentations from './components/Presenter/Presentation';
import PresentationQuestions from './components/Presenter/PresentationViews/PresentationQuestions';
import ParticipantContainer from './containers/ParticipantContainer';
import PresenterContainer from './containers/PresenterContainer';

// V1
import Dashboard from './components/Presenter/Dashboard';
// import PresentationView from './components/Presenter/PresentationView';
import LectureView from './components/Presenter/LectureView';
import EditLectureView from './components/Presenter/EditLectureView';
import SlideView from './components/Presenter/SlideView';
import DeliveryView from './components/Presenter/DeliveryView';

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
      <Route path="presentations" component={Presentations} />
      <Route path="presentationQuestions" component={PresentationQuestions} />
      <Route path="part/:room" component={ParticipantContainer} />
      <Route path="pres/:room" component={PresenterContainer} />


      <Route path="a/:code" component={PresenterContainer} />
      <Route path="r/:code" component={ParticipantContainer} />

      <Route path="u" component={Dashboard} onEnter={authRequired} />
      <Route path="l/:lectureId" component={LectureView} onEnter={authRequired} />
      <Route path="l/:lectureId/edit" component={EditLectureView} onEnter={authRequired} />
      <Route path="l/:lectureId/d/:deliveryId" component={PresenterContainer} onEnter={authRequired} />

      <Route path="s/:slideId" component={SlideView} />

      <Redirect from="*" to="/"/>
    </Route>
  );
};

export default getRoutes;
