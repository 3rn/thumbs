import React from 'react';
import axios from 'axios';
import socket from '../../config/socket';

import QuestionCard from './DeliveryViews/QuestionCard';
import QuickCheck from './DeliveryViews/QuickCheck';

import styles from '../../styles/pages/_Delivery';

class Delivery extends React.Component {
  constructor(props) {
    super(props);

    this.getQuestions = this.getQuestions.bind(this);
    this.displayQuestions = this.displayQuestions.bind(this);

    this.state = {
      questions: [],
      questionType: 'default',
      choice: '',
      choices: []
    };

    this.getQuestions();
  }

  getQuestions() {
    const context = this;
    axios.get(`/db/savedQuestions/getQuestions/${this.props.room}`)
    .then(function (response) {
      var questions = response.data.map((element) => (element));
      context.setState({questions: questions});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  displayQuestions() {
    return this.state.questions.map((element, index) => {
      return (
        <QuestionCard
          key={index + 1}
          index={index + 1}
          element={element}
          choices={element.choices}
          questionTitle={element.title}
          questionType={element.question_type}
          room={this.props.room}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Delivery</h1>
        {this.displayQuestions()}
      </div>
    );
  }
}

export default Delivery;
