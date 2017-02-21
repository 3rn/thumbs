import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { vote } from '../../actions/voteActions.js';
import io from 'socket.io-client';
let socket = io('http://localhost:8000');
import Button from '../../components/Button.jsx';

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
  
};

const mapDispatchToProps = dispatch => bindActionCreators({ vote }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantContainer);
