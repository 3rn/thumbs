import React from 'react';

class ParticipantQuestionButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.socket.emit('participantQuestion');
  }

  render() {
    return (
        <button onClick={this.handleClick.bind(this)}>I'm Confused</button>
    );
  }
}

export default ParticipantQuestionButton;
