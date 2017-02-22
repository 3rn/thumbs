import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import socket from '../../config/socket';

import PresenterPromptView from '../../components/PresenterPromptView/PresenterPromptView';
import ResultsView from '../../components/ResultsView/ResultsView';
import { updateVoteStatus } from '../../actions/presenterActions.js';
import { vote } from '../../actions/participantActions.js';

class PresenterContainer extends React.Component {
  constructor(props) {
    super(props);

    const context = this;
    
    socket.on('vote', (payload) => {
      context.props.vote(payload.option);
    });

    socket.on('participantQuestion', (payload) => {
      console.log('Presenter got a question');
    });

    this.sendQuestion = this.sendQuestion.bind(this);
    this.endVote = this.endVote.bind(this);
    this.goToPromptView = this.goToPromptView.bind(this);
  }

  sendQuestion() {
    socket.emit('startVote');
    this.props.updateVoteStatus('IN_PROGRESS');
  }

  endVote() {
    socket.emit('endVote');
    this.props.updateVoteStatus('ENDED');
  }

  goToPromptView() {
    this.props.updateVoteStatus('WAITING'); 
  }

  getCurrentView() {
    const voteStatus = this.props.voteStatus;
    if (voteStatus === 'WAITING') {
      return (
        <PresenterPromptView sendQuestion={this.sendQuestion} />
      );
    } else {
      return (
        <ResultsView 
          isPresenter={true}
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

const mapDispatchToProps = dispatch => bindActionCreators({ updateVoteStatus, vote }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PresenterContainer);
