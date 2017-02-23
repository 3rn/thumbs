import React from 'react';
import ThumbsCheckVis from '../ThumbsCheckVis/ThumbsCheckVis';
import socket from '../../config/socket';

class PresenterResultsView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonName: 'Stop Vote'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.status === 'IN_PROGRESS') {
      socket.emit('endVote', {room: this.props.room});
      this.setState({buttonName: 'Ask Another Question'});
    } else if (this.props.status === 'ENDED') {
      socket.emit('startVote', {room: this.props.room});
      this.setState({buttonName: 'Stop Vote'});
    }
  }

  render() {
    return (
      <div>
        <h1>ResultsView</h1>
        <button onClick={this.handleClick}>{this.state.buttonName}</button>
        <ThumbsCheckVis data={this.props.data} />
      </div>
    );
  }
}

export default PresenterResultsView;
