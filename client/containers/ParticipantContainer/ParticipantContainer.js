import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import socket from '../../config/socket';

import { updateVoteStatus } from '../../actions/presenterActions.js';

import ResultsView from '../../components/ResultsView/ResultsView';
import ParticipantWaitingView from '../../components/ParticipantWaitingView/ParticipantWaitingView';
import ParticipantQuestionView from '../../components/ParticipantQuestionView/ParticipantQuestionView';

class ParticipantContainer extends React.Component {
  constructor(props) {
    super(props);

    socket.emit('joinPresentation', {room: this.props.params.room});

    socket.on('startVote', () => {
      this.props.updateVoteStatus('IN_PROGRESS');
    });

    socket.on('endVote', () => {
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
        />
      );
    } else if (this.props.voteStatus === 'ENDED') {
      return (
        <ResultsView
          isPresenter={false}
          endVote={this.endVote}
          voteEnded={this.props.voteStatus === 'ENDED'}
          goToPromptView={this.goToPromptView}
          data={this.props.thumbsCount}
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

const mapStateToProps = state => {
  return {
    voteStatus: state.voteStatus,
    thumbsCount: state.thumbs
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ updateVoteStatus }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantContainer);
