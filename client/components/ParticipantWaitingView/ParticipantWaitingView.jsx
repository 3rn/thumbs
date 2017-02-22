import React from 'react';
import socket from '../../config/socket.js';

export default class ParticipantWaitingView extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    socket.emit('participantQuestion');
  }

  render() {
    return (
      <div>
        <h1>ParticipantWaitingView</h1>
        <p> Waiting for question from presenter</p>
        <button onClick={this.handleClick.bind(this)}>I'm Confused</button>
      </div>
    );
  }
}
