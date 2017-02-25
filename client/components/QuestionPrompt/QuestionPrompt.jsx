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
    socket.emit('startVote', {room: this.props.room});
  }
        // <h1>QuestionPrompt</h1>

  render() {
    return (
      
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.label}>Question #{this.props.index}</div>
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
