import React from 'react';

export default class ParticipantWaitingView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>ParticipantWaitingView</h1>
        <p> Waiting for question from presenter</p>
      </div>
    );
  }
}