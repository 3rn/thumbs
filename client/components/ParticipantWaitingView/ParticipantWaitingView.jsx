import React from 'react';
import socket from '../../config/socket.js';


import Loading from '../Loading';

import styles from '../../styles/pages/_ParticipantWaitingView';


class ParticipantWaitingView extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    socket.emit('participantQuestion', {room: this.props.room});
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h1>In room: {this.props.room}</h1>
          <p> Waiting for question from presenter...</p>
          <Loading />
          <button className={styles.primaryButton} onClick={this.handleClick}>I'm Confused</button>
        </div>
      </div>
    );
  }
}

export default ParticipantWaitingView;
