import React from 'react';
import socket from '../../config/socket';

class ParticipantQuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    socket.emit('vote', {
      room: this.props.room,
      option: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>ParticipantQuestionView</h1>
        <button onClick={this.handleClick} value={1}>Thumbs Up</button>
        <button onClick={this.handleClick} value={2}>Thumbs Middle</button>
        <button onClick={this.handleClick} value={3}>Thumbs Down</button>
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

export default ParticipantQuestionView;
