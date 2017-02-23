import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import socket from '../../config/socket';

import PresenterPromptView from '../../components/PresenterPromptView/PresenterPromptView.jsx';
import PresenterResultsView from '../../components/PresenterResultsView/PresenterResultsView.jsx';
import { updateVoteStatus } from '../../actions/presenterActions.js';
import { vote, participantQuestion } from '../../actions/participantActions.js';

class PresenterContainer extends React.Component {
  constructor(props) {
    super(props);

    socket.on('vote', (payload) => {
      this.props.vote(payload.option);
    });

    socket.on('participantQuestion', (payload) => {
      this.props.participantQuestion();
    });

    socket.on('startVote', (payload) => {
      this.props.updateVoteStatus('IN_PROGRESS');
    });

    socket.on('endVote', (payload) => {
      this.props.updateVoteStatus('ENDED');
    });

    socket.on('', (payload) => {
      this.props.updateVoteStatus('WAITING');
    });

    socket.emit('joinPresentation', {room: this.props.params.room});
  }

  getCurrentView() {
    const voteStatus = this.props.voteStatus;
    if (voteStatus === 'WAITING') {
      return (
        <PresenterPromptView
          room={this.props.params.room}
        />
      );
    } else {
      return (
        <PresenterResultsView
          room={this.props.params.room}
          data={this.props.thumbsCount}
          status={this.props.voteStatus}
        />
      );
    }
  }

  render() {
    return (
      <div>
        {this.getCurrentView()}
        <h3>Participant Questions: { this.props.questionCount }</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    voteStatus: state.voteStatus,
    thumbsCount: state.thumbs,
    questionCount: state.participantQuestion
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ updateVoteStatus, vote, participantQuestion }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PresenterContainer);
