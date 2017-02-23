import React from 'react';
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
      <div>
        <h1>PresenterPromptView</h1>
        <button onClick={this.handleClick}>Send Thumbs Check</button>
      </div>
    );
  }
}

export default PresenterPromptView;
