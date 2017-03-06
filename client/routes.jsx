import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import Home from './components/Home';

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


module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="presentations" component={Presentations} />
    <Route path="presentationQuestions" component={PresentationQuestions} />
    <Route path="part/:room" component={ParticipantContainer} />
    <Route path="pres/:room" component={PresenterContainer} />
    

    <Route path="a/:code" component={PresenterContainer} />
    <Route path="r/:code" component={ParticipantContainer} />

    <Route path="u" component={Dashboard} />
    <Route path="l/:lectureId" component={LectureView} />
    <Route path="l/:lectureId/edit" component={EditLectureView} />
    <Route path="l/:lectureId/d/:deliveryId" component={DeliveryView} />

    <Route path="s/:slideId" component={SlideView} />
    
    <Redirect from="*" to="/"/>
  
  </Route>
);
