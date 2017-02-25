import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { actions } from '../actions/index.js';
import styles from '../../styles/pages/_PresenterPromptView';

import socket from '../../config/socket';


class PresenterPromptView extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    socket.emit('startVote', {room: this.props.room});
  }
        // <h1>PresenterPromptView</h1>

  render() {
    return (
      
      <div className={styles.container}>
        <div className={styles.card}>
          <span className={styles.label}>Question #1</span>
          <h2>How is the pace of this lecture?</h2>
          <br/>
          <div className={styles.right}>
            <button className={styles.primaryButton} onClick={this.handleClick}>Send Thumbs Check</button>
          </div>
        </div>
      </div>
      
    );
  }
}

export default PresenterPromptView;
