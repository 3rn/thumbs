import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { vote } from '../../actions/participantActions.js';
import Button from '../../components/Button.jsx';
import socket from '../../config/socket';

class ParticipantQuestionView extends React.Component {
  constructor(props) {
    super(props);

    const vote = this.props.vote;

    socket.on('vote', (payload) => {
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
        <Button click={this.handleClick.bind(this)} count={this.props.thumbsCount[0]} value='1' />
        <Button click={this.handleClick.bind(this)} count={this.props.thumbsCount[1]} value='2' />
        <Button click={this.handleClick.bind(this)} count={this.props.thumbsCount[2]} value='3' />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    thumbsCount: state.thumbs
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ vote }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantQuestionView);
