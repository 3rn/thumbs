import React from 'react';

class ParticipantQuestionButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    console.log('Button Works');
  }

  render() {
    return (
      <button>Click</button>
    );
  }
}

export default ParticipantQuestionButton;
