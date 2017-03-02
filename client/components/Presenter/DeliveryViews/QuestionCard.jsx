import React from 'react';
import socket from '../../../config/socket';

import styles from '../../../styles/components/_questionCard';

class QuestionCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    socket.emit('startVote', {
      room: this.props.room,
      questionType: this.props.questionType,
      choices: this.props.choices
    });
  }

  showIcon () {
    if (this.props.questionType === 'THUMBS') {
      return (
        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
      );
    } else if (this.props.questionType === 'SCALE') {
      return (
        <i className="fa fa-sliders" aria-hidden="true"></i>
      );
    } else if (this.props.questionType === 'MULTIPLE_CHOICE') {
      return (
        <span>
          <i className="fa fa-check-square" aria-hidden="true"></i> <i className="fa fa-check-square" aria-hidden="true"></i> <i className="fa fa-check-square-o" aria-hidden="true"></i>
        </span>
      );
    } else if (this.props.questionType === 'MULTIPLE_CHOICE') {
      return (
        <span>
          <i className="fa fa-circle-o" aria-hidden="true"></i> <i className="fa fa-circle" aria-hidden="true"></i> <i className="fa fa-circle-o" aria-hidden="true"></i>
        </span>
      );
    }
  }

  render() {
    return (

      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.label}>Question #{this.props.index} <span className={styles.questionIcons}>{this.showIcon()}</span></div>
          <h2>{this.props.element.title}</h2>
          <br/>
          <div className={styles.right}>
            <button className={styles.primaryButton} onClick={this.handleClick}>
              Send Question
            </button>
          </div>
        </div>
      </div>

    );
  }
}

export default QuestionCard;
