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
      questionQueue: [],
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
      context.setState({questionQueue: questions});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  displayQuestions(questionArray) {
    var questions = questionArray.map((element, index) => {
      return (
        <QuestionCard
          key={index + 1}
          index={index + 1}
          element={element}
          choices={element.choices}
          questionType={element.question_type}
          room={this.props.room}
          status={this.props.status}
          thumbs={this.props.thumbs}
          scale={this.props.scale}
          yesNo={this.props.yesNo}
          multipleChoice={this.props.multipleChoice}
        />
      );
    });
    return questions;
  }

  render() {
    return (
      <div>
        <QuickCheck room={this.props.room} />
        <div className={styles.container}>
          {this.displayQuestions(this.state.questionQueue)}
        </div>
      </div>
    );
  }
}

export default Delivery;
