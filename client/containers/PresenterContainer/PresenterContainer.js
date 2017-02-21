import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
let socket = io('http://localhost:8000');

import PresenterPromptView from '../../components/PresenterPromptView/PresenterPromptView';
import { updateVoteStatus } from '../../actions/updateVoteStatus.js';

class PresenterContainer extends React.Component {
  constructor(props) {
    super(props);

    const vote = this.props.vote;

    socket.on('startVote', () => {
      //dispatch event to update view
      console.log('presenter received start vote');
    });
  }

  sendQuestion() {
    // socket.emit('startVote');
    console.log('question sent from presenter');
    socket.emit('startVote');
  }

  render() {
    var voteStatus = this.props.voteStatus;
    if (voteStatus === 'WAITING') {
      return <PresenterPromptView sendQuestion={this.sendQuestion} />;
    } else if (voteStatus === 'IN_PROGRESS') {
      return null;
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {voteStatus: state.voteStatus};
};

const mapDispatchToProps = dispatch => bindActionCreators({ updateVoteStatus }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PresenterContainer);
