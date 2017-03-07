import React from 'react';
import socket from '../../../config/socket';
import styles from '../../../styles/components/_questionPrompt';

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
    };
  }

  handleCardToggle(e) {
    this.setState({showDetails: !this.state.showDetails});
  }

  handleClick(e) {
    if (this.props.status === 'WAITING') {
      socket.emit('startVote', {
        id: this.props.element.id,
        room: this.props.room,
        questionType: this.props.questionType,
        choices: this.props.choices
      });
      this.setState({
        buttonName: 'Stop Vote',
        showResults: true
      });
    } else if (this.props.status === 'IN_PROGRESS') {
      socket.emit('endVote', {room: this.props.room});
      this.setState({buttonName: 'Ask Another Question'});
    } else if (this.props.status === 'ENDED') {
      socket.emit('newVote', {room: this.props.room});
      this.setState({
        buttonName: 'Resend Question',
        showResults: false
      });
    }
  }

  toggleArrow () {
    if (this.state.showDetails) {
      return <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>;
    } else {
      return <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>;
    }
  }

  mapChoices () {
    if (this.props.element.choices) {
      return (
        <div>
          <ol type="A">
            { this.props.element.choices.map(choice => {
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
          <p>Previous Results: WorkInProgress </p>
          <br />
        </div>
      );
    }
  }

  showResults() {
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
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.label}>
            <h3 className={styles.questionTitle}>{this.props.element.title}</h3>
            <span className={styles.questionIcons} onClick={this.handleCardToggle}>{this.toggleArrow()}</span>
          </div>
          { this.showDetails() }
          { this.showResults() }
          <QuestionIcon questionType={this.props.questionType} />
          <div className={styles.right}>
            <button className={styles.primaryButton} onClick={this.handleClick}>{this.state.buttonName}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionCard;
