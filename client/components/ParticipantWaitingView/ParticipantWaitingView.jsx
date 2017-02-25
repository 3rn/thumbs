import React from 'react';
import socket from '../../config/socket.js';

import Loading from '../Loading';

import styles from '../../styles/pages/_ParticipantWaitingView';

export default class ParticipantWaitingView extends React.Component {
  constructor(props) {
    super(props);
    console.log('Participant waiting view: ', this.props.room);
  }

  handleClick() {
    socket.emit('participantQuestion', {room: this.props.room});
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h1>ParticipantWaitingView</h1>
        <p> Waiting for question from presenter...</p>
        {'<Loading />'}
        <button onClick={this.handleClick.bind(this)}>I'm Confused</button>
      </div>
    );
  }
}
