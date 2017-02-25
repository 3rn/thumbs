import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import socket from '../../config/socket';

import DeliveryInfo from '../../components/DeliveryInfo/DeliveryInfo.jsx';

import PresenterPromptView from '../../components/PresenterPromptView/PresenterPromptView.jsx';
import PresenterResultsView from '../../components/PresenterResultsView/PresenterResultsView.jsx';
import { updateVoteStatus } from '../../actions/presenterActions.js';
import { vote, participantCount, participantQuestion } from '../../actions/participantActions.js';
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
          data={this.props.thumbsCount}
          status={this.props.voteStatus}
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
    voteStatus: state.voteStatus,
    thumbsCount: state.thumbs,
    participantCount: state.participantCount,
    questionCount: state.participantQuestion
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ updateVoteStatus, vote, participantCount, participantQuestion }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PresenterContainer);
