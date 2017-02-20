import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { vote } from '../../actions/voteActions.js';
import io from 'socket.io-client';
let socket = io('http://localhost:8000');
import Button from '../../components/Button.jsx';

class ParticipantQuestionView extends React.Component {
  constructor(props) {
    super(props);

    const vote = this.props.vote;

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
        <h1>ParticipantQuestionView</h1>
        <Button click={this.handleClick.bind(this)} count={this.props.count[0]} value='1' />
        <Button click={this.handleClick.bind(this)} count={this.props.count[1]} value='2' />
        <Button click={this.handleClick.bind(this)} count={this.props.count[2]} value='3' />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.thumbs.count
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ vote }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantQuestionView);
