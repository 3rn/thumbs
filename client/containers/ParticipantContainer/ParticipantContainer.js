import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import socket from '../../config/socket';

import { updateVoteStatus } from '../../actions/presenterActions.js';
import ParticipantWaitingView from '../../components/ParticipantWaitingView/ParticipantWaitingView';
import ParticipantQuestionView from '../../components/ParticipantQuestionView/ParticipantQuestionView';
import ResultsView from '../../components/ResultsView/ResultsView';
import ParticipantQuestionButton from '../../components/ParticipantQuestionButton/ParticipantQuestionButton';

class ParticipantContainer extends React.Component {
  constructor(props) {
    super(props);

    const vote = this.props.vote;
    const context = this;
    socket.on('startVote', () => {
      context.props.updateVoteStatus('IN_PROGRESS');
    });
    socket.on('endVote', () => {
      context.props.updateVoteStatus('ENDED');
    });

  }

  getCurrentView() {
    const voteStatus = this.props.voteStatus;

    if (voteStatus === 'WAITING') {
      return <ParticipantWaitingView />;
    } else if (voteStatus === 'IN_PROGRESS') {
      return <ParticipantQuestionView />;
    } else if (voteStatus === 'ENDED') {
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
        <ParticipantQuestionButton socket={socket} />
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
