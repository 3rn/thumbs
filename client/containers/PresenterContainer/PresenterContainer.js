import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
let socket = io('http://localhost:8000');

import PresenterPromptView from '../../components/PresenterPromptView/PresenterPromptView';
import ResultsView from '../../components/ResultsView/ResultsView';
import { updateVoteStatus } from '../../actions/updateVoteStatus.js';

class PresenterContainer extends React.Component {
  constructor(props) {
    super(props);

    const vote = this.props.vote;

    socket.on('startVote', () => {
      //dispatch event to update view
      console.log('presenter received start vote');
    });

    this.sendQuestion = this.sendQuestion.bind(this);
    this.endVote = this.endVote.bind(this);
    this.goToPromptView = this.goToPromptView.bind(this);
  }

  sendQuestion() {
    // socket.emit('startVote');
    console.log('question sent from presenter');
    socket.emit('startVote');
    //debugger;
    this.props.updateVoteStatus('IN_PROGRESS');
  }

  endVote() {
    console.log('stopping vote');
    socket.emit('endVote');
    this.props.updateVoteStatus('ENDED');
  }

  goToPromptView() {
    this.props.updateVoteStatus('WAITING'); 
  }

  render() {
    var voteStatus = this.props.voteStatus;
    if (voteStatus === 'WAITING') {
      return <PresenterPromptView sendQuestion={this.sendQuestion} />;
    } else if (voteStatus === 'IN_PROGRESS') {
      return (
        <ResultsView 
          isPresenter={true}
          endVote={this.endVote} 
          voteEnded={this.props.voteStatus === 'ENDED'}
          goToPromptView={this.goToPromptView}
        />);
    }
  }
}

const mapStateToProps = state => {
  return {voteStatus: state.voteStatus};
};

const mapDispatchToProps = dispatch => bindActionCreators({ updateVoteStatus }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PresenterContainer);
