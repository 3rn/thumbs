import React from 'react';
import socket from '../../config/socket.js';

class ParticipantQuestionButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    socket.emit('participantQuestion');
  }

  render() {
    return (
        <button onClick={this.handleClick.bind(this)}>I'm Confused</button>
    );
  }
}

export default ParticipantQuestionButton;
