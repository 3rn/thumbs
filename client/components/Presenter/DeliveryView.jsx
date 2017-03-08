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
      deliveryId: this.props.params.deliveryId,
      lectureId: this.props.params.lectureId,
      questions: [],
      questionType: 'default',
      choice: '',
      choices: []
    };

    this.getDelivery = this.getDelivery.bind(this);
    this.displayDelivery = this.displayDelivery.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.displayQuestions = this.displayQuestions.bind(this);

    this.getDelivery();
    this.getQuestions();
  }

  getDelivery() {
    const context = this;
    axios.get(`/db/l/${this.state.lectureId}/d/${this.state.deliveryId}`)
    .then(function (response) {
      console.log('DeliveryView: deliveries ', response);
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
      return this.state.questions.map(( element, index) => 
        return <QuestionCard
                key={index + 1}
                index={index + 1}
                choices={element.choices}
                title={element.title}
                questionType={element.question_type}
                room={this.props.room}
                status={this.props.status}
                thumbs={this.props.thumbs}
                scale={this.props.scale}
                yesNo={this.props.yesNo}
                multipleChoice={this.props.multipleChoice}
                />;
      });
  }

  render() {
    return (
      <div>

      <div className={styles.wrapper}>
        <h1>DeliveryView</h1>
      </div>
      <div>
        <DeliveryInfo
          roomCount={this.props.roomCount}
          participantCount={this.props.participantCount}
          participantConfused={this.props.confusedCount}
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
