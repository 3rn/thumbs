import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import socket from '../config/socket';

import Delivery from '../components/Presenter/Delivery.jsx';

import { updateVoteStatus, sendQuestion, getRoomCount } from '../actions/presenterActions.js';
import { response, participantCount, participantConfused } from '../actions/participantActions.js';

import styles from '../styles/base/_custom';

class PresenterContainer extends React.Component {
  constructor(props) {
    super(props);

    socket.emit('joinPresentation', {room: this.props.params.room});

    socket.on('roomCount', (payload) => {
      this.props.getRoomCount(payload - 1);
    });

    socket.on('vote', (payload) => {
      this.props.response(payload.questionType, payload.value);
    });

    socket.on('participantConfused', (payload) => {
      this.props.participantConfused();
    });

    socket.on('startVote', (payload) => {
      this.props.sendQuestion(payload.questionTitle, payload.questionType, payload.choices);
      this.props.updateVoteStatus('IN_PROGRESS');
    });

    socket.on('endVote', (payload) => {
      this.props.updateVoteStatus('ENDED');
    });

    socket.on('newVote', (payload) => {
      this.props.updateVoteStatus('WAITING');
    });
  }

  render() {
    return (
      <div className={styles.wrapper}>
      <DeliveryInfo
          roomCount={this.props.roomCount}
          participantCount={this.props.participantCount}
          participantConfused={this.props.confusedCount}
        />
        <Delivery
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    voteStatus: state.presenterReducer.status,
    questionType: state.presenterReducer.questionType,
    choices: state.presenterReducer.choices,
    roomCount: state.presenterReducer.roomCount,
    thumbs: state.participantReducer.thumbs,
    yesNo: state.participantReducer.yesNo,
    scale: state.participantReducer.scale,
    multipleChoice: state.participantReducer.multipleChoice,
    openResponse: state.participantReducer.openResponse,
    participantCount: state.participantReducer.participantCount,
    confusedCount: state.participantReducer.confusedCount
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateVoteStatus,
  sendQuestion,
  getRoomCount,
  response,
  participantCount,
  participantConfused
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PresenterContainer);
