import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import socket from '../../config/socket';

import { updateVoteStatus } from '../../actions/updateVoteStatus.js';
import ParticipantWaitingView from '../../components/ParticipantWaitingView/ParticipantWaitingView';
import ParticipantQuestionView from '../../components/ParticipantQuestionView/ParticipantQuestionView';
import ResultsView from '../../components/ResultsView/ResultsView';
import ParticipantQuestionButton from '../../components/ParticipantQuestionButton/ParticipantQuestionButton';

class ParticipantContainer extends React.Component {
  constructor(props) {
    super(props);

    const vote = this.props.vote;
    var context = this;
    socket.on('startVote', () => {
      //dispatch event to update view
      context.props.updateVoteStatus('IN_PROGRESS');
    });
    socket.on('endVote', () => {
      //dispatch event to update view
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
        <ParticipantQuestionButton test={'prop'} />
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
