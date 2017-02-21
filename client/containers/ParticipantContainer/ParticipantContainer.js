import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
let socket = io('http://localhost:8000');

import { updateVoteStatus } from '../../actions/updateVoteStatus.js';

class ParticipantContainer extends React.Component {
  constructor(props) {
    super(props);

    const vote = this.props.vote;

    socket.on('voteStart', () => {
      //dispatch event to update view
    });

    socket.on('vote', (payload) => {
      console.log('payload >>> ', payload);
      vote(payload.option);
    });
  }

  handleClick(e) {
    socket.emit('vote', { option: e.target.value });
  }

  render() {
    return (
      <div> 
        <h1> TEST </h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {voteStatus: state.voteStatus};
};

const mapDispatchToProps = dispatch => bindActionCreators({ updateVoteStatus }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantContainer);
