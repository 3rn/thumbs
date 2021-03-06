import React from 'react';
import socket from '../../../config/socket';
import styles from '../../../styles/components/_questionPrompt.scss';
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
      responses: null,
    };

    this.getResponses();
  }

  getResponses() {
    const context = this;
    axios.get(`/db/r/${this.props.deliveryId}/${this.props.id}`)
      .then((response) => {
        if (response.data[0]) {
          context.setState({ responses: JSON.parse(response.data[0].value) });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleCardToggle(e) {
    this.setState({ showDetails: !this.state.showDetails });
  }

  handleClick(e) {
    if (this.props.status === 'WAITING') {
      socket.emit('startVote', {
        room: 'FRED',
        questionTitle: this.props.questionTitle,
        questionType: this.props.questionType,
        choices: this.props.choices,
      });
      this.setState({
        buttonName: 'Stop Vote',
        showResults: true,
        showDetails: true,
        responses: null,
      });
    } else if (this.props.status === 'IN_PROGRESS') {
      if (this.props.questionType === 'THUMBS') {
        const responses = this.props.thumbs;
      } else if (this.props.questionType === 'YES_NO') {
        const responses = this.props.yesNo;
      } else if (this.props.questionType === 'MULTIPLE_CHOICE') {
        const responses = this.props.multipleChoice;
      } else if (this.props.questionType === 'SCALE') {
        const responses = this.props.scale;
      }
      axios.post(`/db/r/${this.props.deliveryId}/${this.props.id}`, { value: JSON.stringify(responses) })
        .then((res) => {
          this.getResponses();
          socket.emit('endVote', { room: 'FRED' });
          this.setState({ buttonName: 'Ask Another Question' });
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (this.props.status === 'ENDED') {
      socket.emit('newVote', { room: 'FRED' });
      this.setState({
        buttonName: 'Resend Question',
        showResults: false,
        showDetails: false,
      });
    }
  }

  toggleArrow () {
    if (this.state.showDetails) {
      return (
        <div className={styles.icons}>
          <i className="fa fa-angle-up" aria-hidden="true" />
        </div>
      );
    }
    return (
      <div className={styles.icons}>
        <i className="fa fa-angle-down" aria-hidden="true"></i>
      </div>
    );
  }

  mapChoices () {
    if (this.props.choices) {
      return (
        <div>
          <ol type="A">
            { this.props.choices.map((choice, i) => {
              return <li key={i}>
                <div className={styles.details}>
                  <strong>Option # {i + 1}</strong> - {choice}
                </div>
              </li>;
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
          <br />
          { this.showResults() }
        </div>
      );
    }
  }

  showResults() {
    if (!this.state.responses) {
      if (this.state.showResults) {
        if (this.props.questionType === 'THUMBS') {
          var responses = this.props.thumbs;
        } else if (this.props.questionType === 'YES_NO') {
          var responses = this.props.yesNo;
        } else if (this.props.questionType === 'MULTIPLE_CHOICE') {
          var responses = this.props.multipleChoice;
        } else if (this.props.questionType === 'SCALE') {
          var responses = this.props.scale;
        }
        return (
          <Results
            questionType={this.props.questionType}
            questionTitle={this.props.questionTitle}
            choices={this.props.choices}
            responses={responses}
          />
        );
      }
    } else {
      return (
        <Results
          questionType={this.props.questionType}
          questionTitle={this.props.questionTitle}
          choices={this.props.choices}
          responses={this.state.responses}
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
            <h4>{ this.props.questionTitle }</h4>

          { this.showDetails() }

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
