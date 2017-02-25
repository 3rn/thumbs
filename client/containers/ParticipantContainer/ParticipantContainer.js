import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import socket from '../../config/socket';

import { updateVoteStatus, sendQuestion } from '../../actions/presenterActions.js';
import { vote } from '../../actions/participantActions.js';

import ParticipantWaitingView from '../../components/ParticipantWaitingView/ParticipantWaitingView';
import ParticipantQuestionView from '../../components/ParticipantQuestionView/ParticipantQuestionView';

class ParticipantContainer extends React.Component {
  constructor(props) {
    super(props);

    socket.emit('joinPresentation', {room: this.props.params.room});

    socket.on('vote', (payload) => {
      this.props.vote(payload.option);
    });

    socket.on('startVote', (payload) => {
      this.props.sendQuestion(payload.questionType, payload.choices);
      this.props.updateVoteStatus('IN_PROGRESS');
    });

    socket.on('endVote', (payload) => {
      this.props.updateVoteStatus('ENDED');
    });
  }

  getCurrentView() {
    if (this.props.voteStatus === 'WAITING') {
      return (
        <ParticipantWaitingView
          room={this.props.params.room}
        />
      );
    } else if (this.props.voteStatus === 'IN_PROGRESS') {
      return (
        <ParticipantQuestionView
          room={this.props.params.room}
          questionType={this.props.questionType}
          choices={this.props.choices}
        />
      );
    } else if (this.props.voteStatus === 'ENDED') {
      return (
        <ParticipantWaitingView
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
