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

  render() {
    return (
      
      <div className={styles.container}>
        <h1>PresenterPromptView</h1>
        <button onClick={this.handleClick}>Send Thumbs Check</button>
      </div>
      
    );
  }
}

export default PresenterPromptView;
