import React from 'react';
import socket from '../../config/socket.js';

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
      <div>
        <h1>ParticipantWaitingView</h1>
        <p> Waiting for question from presenter</p>
        <button onClick={this.handleClick}>I'm Confused</button>
      </div>
    );
  }
}

export default ParticipantWaitingView;
