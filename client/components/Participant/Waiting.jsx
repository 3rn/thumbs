import React from 'react';
import socket from '../../config/socket.js';

import Loading from './Loading';

import styles from '../../styles/pages/_Waiting';

class Waiting extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    socket.emit('participantConfused', {room: this.props.room});
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h1>In room: {this.props.room}</h1>
          <div className={styles.details}> Waiting for question from presenter...</div>
          <Loading />
          <button className={styles.primaryButton} onClick={this.handleClick}>I'm Confused</button>
        </div>
      </div>
    );
  }
}

export default Waiting;
