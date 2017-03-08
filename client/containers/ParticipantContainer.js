import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import socket from '../config/socket';
import axios from 'axios';

import { browserHistory } from 'react-router';
import { updateVoteStatus, sendQuestion } from '../actions/presenterActions.js';
import { response } from '../actions/participantActions.js';

import Waiting from '../components/Participant/Waiting';
import Response from '../components/Participant/Response';

class ParticipantContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const context = this;
    return axios.get(`/db/c/${context.props.params.code}`)
    .then(function (response) {
      if (response.data.length === 0) {
        browserHistory.push('/');
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    
    socket.emit('joinPresentation', {room: this.props.params.code});

    socket.on('vote', (payload) => {
      this.props.response(payload.questionType, payload.value);
    });

    socket.on('startVote', (payload) => {
      this.props.sendQuestion(payload.questionTitle, payload.questionType, payload.choices);
      this.props.updateVoteStatus('IN_PROGRESS');
    });

    socket.on('endVote', (payload) => {
      this.props.updateVoteStatus('ENDED');
    });

  }


  getCurrentView() {
    if (this.props.voteStatus === 'WAITING') {
      return (
        <Waiting
          room={this.props.params.code}
        />
      );
    } else if (this.props.voteStatus === 'IN_PROGRESS') {
      return (
        <Response
          room={this.props.params.code}
          questionTitle={this.props.questionTitle}
          questionType={this.props.questionType}
          choices={this.props.choices}
        />
      );
    } else if (this.props.voteStatus === 'ENDED') {
      return (
        <Waiting
          room={this.props.params.code}
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

const mapStateToProps = (state) => ({
  voteStatus: state.presenterReducer.status,
  questionTitle: state.presenterReducer.questionTitle,
  questionType: state.presenterReducer.questionType,
  choices: state.presenterReducer.choices,
  openResponse: state.participantReducer.openResponse,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateVoteStatus,
  sendQuestion,
  response
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantContainer);
