import React from 'react';
import axios from 'axios';
import socket from '../../config/socket';

import DeliveryInfo from './DeliveryViews/DeliveryInfo';
import QuickCheck from './DeliveryViews/QuickCheck';
import QuestionCard from './DeliveryViews/QuestionCard';

import styles from '../../styles/pages/_Delivery';

class DeliveryView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deliveryId: this.props.deliveryId,
      lectureId: this.props.lectureId,
      questions: [],
      questionType: 'default'
    };

    this.getDelivery = this.getDelivery.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.displayQuestions = this.displayQuestions.bind(this);


    this.getDelivery();
    this.getQuestions();
  }

  getDelivery() {
    const context = this;
    axios.get(`/db/d/${this.state.deliveryId}`)
    .then(function (response) {
      context.setState({deliveries: response.data});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  getQuestions() {
    const context = this;
    axios.get(`/db/q/${this.state.lectureId}`)
    .then(function (response) {
      var questions = response.data.map((element) => (element));
      context.setState({questions: questions});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  displayQuestions() {
    const context = this;
    return this.state.questions.map((element, index) => {
      return (
        <QuestionCard
          key={index}
          index={index}
          id={element.id}
          questionTitle={element.title}
          questionType={element.question_type}
          choices={element.question_choices}
          room={context.props.room}
          status={context.props.status}
          thumbs={context.props.thumbs}
          scale={context.props.scale}
          yesNo={context.props.yesNo}
          multipleChoice={context.props.multipleChoice}
          deliveryId={context.state.deliveryId}
        />
      );
    });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div>
          <DeliveryInfo
            roomCount={this.props.roomCount}
            participantCount={this.props.participantCount}
            participantConfused={this.props.confusedCount}
            room='FRED'
            />
          <QuickCheck
            questionType={this.props.questionType}
            thumbs={this.props.thumbs}
            yesNo={this.props.yesNo}
            scale={this.props.scale}
            status={this.props.status}
            room={this.props.room}
          />
          {this.displayQuestions()}
        </div>
      </div>
    );
  }
}

export default DeliveryView;
