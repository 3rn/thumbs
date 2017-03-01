import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import socket from '../config/socket';

import DeliveryInfo from '../components/Presenter/DeliveryViews/DeliveryInfo.jsx';
import Prompt from '../components/Presenter/Delivery.jsx';
import Results from '../components/Presenter/Results.jsx';

import { updateVoteStatus, sendQuestion } from '../actions/presenterActions.js';
import { vote, participantCount, participantQuestion } from '../actions/participantActions.js';

import styles from '../styles/base/_custom';

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
        <Prompt
          room={this.props.params.room}
        />
      );
    } else {
      return (
        <Results
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

        <DeliveryInfo
          participantCount={this.props.participantCount}
          questionCount={this.props.questionCount}
        />


        {this.getCurrentView()}

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
    participantCount: state.participantCount,
    questionCount: state.participantQuestion
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ updateVoteStatus, vote, sendQuestion, participantCount, participantQuestion }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PresenterContainer);
