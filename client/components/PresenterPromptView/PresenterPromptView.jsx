import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import QuestionPrompt from '../QuestionPrompt/QuestionPrompt';
import styles from '../../styles/pages/_PresenterPromptView';
import socket from '../../config/socket';


class PresenterPromptView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionQueue: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.displayQuestions = this.displayQuestions.bind(this);

    this.getQuestions();
  }

  getQuestions() {
    const context = this;

    axios.get(`/db/savedQuestions/getQuestions/${this.props.room}`)
    .then(function (response) {
      var questions = response.data.map((element) => (element));
      context.setState({questionQueue: questions});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  displayQuestions(questionArray) {
    var questions = questionArray.map((element, index) => {
      return (
        <QuestionPrompt 
          key={index + 1}
          index={index + 1}
          element={element}
        />
      );
    });

    return questions;
  }

  handleClick(e) {
    socket.emit('startVote', {room: this.props.room});
  }

  render() {
    return (
      <div>
        {this.displayQuestions(this.state.questionQueue)}
      </div>
    );
  }
}

export default PresenterPromptView;
