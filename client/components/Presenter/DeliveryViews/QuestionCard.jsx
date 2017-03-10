import React from 'react';
import socket from '../../../config/socket';
import styles from '../../../styles/components/_questionPrompt';

import axios from 'axios';

import Results from './Results';
import QuestionIcon from '../../QuestionIcon';

class QuestionCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleCardToggle = this.handleCardToggle.bind(this);

    this.state = {
      buttonName: 'Send Question',
      showDetails: false,
      showResults: false,
      responses: null
    };

    this.getResponses();
  }

  getResponses() {
    const context = this;
    axios.get(`/db/r/${this.props.deliveryId}/${this.props.id}`)
    .then(function (response) {
      if (response.data[0]) {
        context.setState({responses: JSON.parse(response.data[0].value)});
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleCardToggle(e) {
    this.setState({showDetails: !this.state.showDetails});
  }

  handleClick(e) {
    if (this.props.status === 'WAITING') {
      socket.emit('startVote', {
        room: 'FRED',
        questionTitle: this.props.questionTitle,
        questionType: this.props.questionType,
        choices: this.props.choices
      });
      this.setState({
        buttonName: 'Stop Vote',
        showResults: true
      });
    } else if (this.props.status === 'IN_PROGRESS') {
      socket.emit('endVote', {room: 'FRED'});
      this.setState({buttonName: 'Ask Another Question'});
    } else if (this.props.status === 'ENDED') {
      socket.emit('newVote', {room: 'FRED'});
      this.setState({
        buttonName: 'Resend Question',
        showResults: false
      });
    }
  }

  toggleArrow () {
    if (this.state.showDetails) {
      return (
        <div className={styles.icons}>
          <i className="fa fa-angle-up" aria-hidden="true"></i>
        </div>
      );
    } else {

      return (
        <div className={styles.icons}>
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        </div>
      );
    }
  }

  mapChoices () {
    if (this.props.choices) {
      return (
        <div>
          <ol type="A">
            { this.props.choices.map(choice => {
              return <li> - {choice}</li>;
            })}
          </ol>
        </div>
      );
    }
  }

  showDetails () {
    if (this.state.showDetails) {
      return (
        <div>
          { this.mapChoices() }
          <br />
          <p><strong>Previous Results:</strong> Work In Progress </p>
          <br />
        </div>
      );
    }
  }

  showResults() {
    if (!this.state.responses) {
      if (this.state.showResults) {
        return (
          <Results
            questionType={this.props.questionType}
            choices={this.props.choices}
            thumbs={this.props.thumbs}
            yesNo={this.props.yesNo}
            scale={this.props.scale}
            multipleChoice={this.props.multipleChoice}
            openResponse={this.props.openResponse}
            />
        );
      }
    } else {
      return (
        <Results
          questionType='THUMBS'
          choices={this.props.choices}
          thumbs={this.props.thumbs}
          yesNo={this.props.yesNo}
          scale={this.props.scale}
          multipleChoice={this.props.multipleChoice}
          openResponse={this.props.openResponse}
          />
      );
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.label}>Question #{this.props.index + 1}
            <span className={styles.questionIcons} onClick={this.handleCardToggle}>{this.toggleArrow()}</span>
          </div>
            <h4>{ this.props.title }</h4>
            
          { this.showDetails() }
          { this.showResults() }
          <br />
          <div className={styles.right}>
            <button className={styles.primaryButton} onClick={this.handleClick}>{this.state.buttonName}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionCard;

// <QuestionIcon questionType={this.props.questionType} />
