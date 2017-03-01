import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import socket from '../config/socket';

import { updateVoteStatus, sendQuestion } from '../actions/presenterActions.js';
import { vote } from '../actions/participantActions.js';

import Waiting from '../components/Participant/Waiting';
import Response from '../components/Participant/Response';

class ParticipantContainer extends React.Component {
  constructor(props) {
    super(props);

    socket.emit('joinPresentation', {room: this.props.params.room});

    socket.on('vote', (payload) => {
      this.props.vote(payload.option, payload.quesitonType);
    });

    socket.on('startVote', (payload) => {
      this.props.sendQuestion(payload.questionType, payload.choices);
      this.props.updateVoteStatus('IN_PROGRESS');
      // pass payload.questionType and payload.choices as props into Response
    });

    socket.on('endVote', (payload) => {
      this.props.updateVoteStatus('ENDED');
    });
  }

  getCurrentView() {
    if (this.props.voteStatus === 'WAITING') {
      return (
        <Waiting
          room={this.props.params.room}
        />
      );
    } else if (this.props.voteStatus === 'IN_PROGRESS') {
      return (
        <Response
          room={this.props.params.room}
          questionType={this.props.questionType}
          choices={this.props.choices}
        />
      );
    } else if (this.props.voteStatus === 'ENDED') {
      return (
        <Waiting
          room={this.props.params.room}
        />
      );
    }
  }

  render() {
    return (
      <div>
        {this.getCurrentView()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  voteStatus: state.voteStatus.status,
  thumbsCount: state.thumbs,
  questionType: state.voteStatus.questionType,
  choices: state.voteStatus.choices
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ updateVoteStatus, sendQuestion, vote }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantContainer);
