import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import socket from '../../config/socket';

import PresenterPromptView from '../../components/PresenterPromptView/PresenterPromptView.jsx';
import PresenterResultsView from '../../components/PresenterResultsView/PresenterResultsView.jsx';
import { updateVoteStatus, sendQuestion } from '../../actions/presenterActions.js';
import { vote, participantQuestion } from '../../actions/participantActions.js';
import styles from '../../styles/pages/_PresenterPromptView';

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
      this.props.sendQuestion(payload.questionType, payload.choices);
      this.props.updateVoteStatus('IN_PROGRESS');
    });

    socket.on('endVote', (payload) => {
      this.props.updateVoteStatus('ENDED');
    });

    socket.on('newVote', (payload) => {
      this.props.updateVoteStatus('WAITING');
    });

    socket.emit('joinPresentation', {room: this.props.params.room});
  }

  getCurrentView() {
    if (this.props.voteStatus === 'WAITING') {
      return (
        <PresenterPromptView
          room={this.props.params.room}
        />
      );
    } else {
      return (
        <PresenterResultsView
          room={this.props.params.room}
          status={this.props.voteStatus}
          data={this.props.thumbsCount}
          questionType={this.props.questionType}
          choices={this.props.choices}
        />
      );
    }
  }

  render() {
    return (
      <div className={styles.wrapper}>
        {this.getCurrentView()}
        <h3>Participant Questions: { this.props.questionCount }</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    voteStatus: state.voteStatus.status,
    thumbsCount: state.thumbs,
    questionType: state.voteStatus.questionType,
    choices: state.voteStatus.choices,
    questionCount: state.participantQuestion
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ updateVoteStatus, vote, sendQuestion, participantQuestion }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PresenterContainer);
