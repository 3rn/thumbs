import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import socket from '../config/socket';

import DeliveryInfo from '../components/Presenter/DeliveryViews/DeliveryInfo.jsx';
import Prompt from '../components/Presenter/Delivery.jsx';
import Results from '../components/Presenter/Results.jsx';

import { updateVoteStatus, sendQuestion } from '../actions/presenterActions.js';
import { response, participantCount, participantConfused } from '../actions/participantActions.js';

import styles from '../styles/base/_custom';

class PresenterContainer extends React.Component {
  constructor(props) {
    super(props);

    socket.on('vote', (payload) => {
      this.props.response(payload.questionType, payload.value);
    });

    socket.on('participantConfused', (payload) => {
      this.props.participantConfused();
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
          questionType={this.props.questionType}
          choices={this.props.choices}
          thumbs={this.props.thumbs}
          yesNo={this.props.yesNo}
          scale={this.props.scale}
          multipleChoice={this.props.multipleChoice}
          openResponse={this.props.openResponse}
          participantCount={this.props.participantCount}
          questionCount={this.props.questionCount}
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
    voteStatus: state.presenterReducer.status,
    questionType: state.presenterReducer.questionType,
    choices: state.presenterReducer.choices,
    thumbs: state.participantReducer.thumbs,
    yesNo: state.participantReducer.yesNo,
    scale: state.participantReducer.scale,
    multipleChoice: state.participantReducer.multipleChoice,
    openResponse: state.participantReducer.openResponse,
    participantCount: state.participantReducer.participantCount,
    questionCount: state.participantReducer.participantConfused
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ updateVoteStatus, response, sendQuestion, participantCount, participantConfused }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PresenterContainer);
