import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
let socket = io('http://localhost:8000');

import { updateVoteStatus } from '../../actions/updateVoteStatus.js';
import ParticipantWaitingView from '../../components/ParticipantWaitingView/ParticipantWaitingView';
import ParticipantQuestionView from '../../components/ParticipantQuestionView/ParticipantQuestionView';
import ResultsView from '../../components/ResultsView/ResultsView';

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

  handleClick(e) {
    socket.emit('vote', { option: e.target.value });
  }

  render() {
    var voteStatus = this.props.voteStatus;
    if (voteStatus === 'WAITING') {
      return <ParticipantWaitingView />;
    } else if (voteStatus === 'IN_PROGRESS') {
      return <ParticipantQuestionView />;
    } else if (voteStatus === 'ENDED') {
      return <ResultsView />;
    }
  }
}

const mapStateToProps = state => {
  return {voteStatus: state.voteStatus};
};

const mapDispatchToProps = dispatch => bindActionCreators({ updateVoteStatus }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantContainer);
