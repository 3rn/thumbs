import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { actions } from '../actions/index.js';
import styles from '../../styles/components/_questionPrompt';

import socket from '../../config/socket';


class QuestionPrompt extends React.Component {
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
    if (this.props.questionType === 'thumbs') {
      return (
        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
      );
    } else if (this.props.questionType === 'scale') {
      return (
        <i className="fa fa-sliders" aria-hidden="true"></i>
      );
    } else if (this.props.questionType === 'mult-box') {
      return (
        <span>
          <i className="fa fa-check-square" aria-hidden="true"></i> <i className="fa fa-check-square" aria-hidden="true"></i> <i className="fa fa-check-square-o" aria-hidden="true"></i>
        </span>
      );
    } else if (this.props.questionType === 'check') {
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

export default QuestionPrompt;
