import React from 'react';
import ThumbsCheckVis from '../ThumbsCheckVis/ThumbsCheckVis';
import socket from '../../config/socket';

import styles from '../../styles/pages/_PresenterResultsView';

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
      socket.emit('newVote', {room: this.props.room});
      this.setState({buttonName: 'Stop Vote'});
    }
  }

  render() {
    return (
      <div className={styles.card}>
        <ThumbsCheckVis data={this.props.data} />
        <button className={styles.primaryButton} onClick={this.handleClick}>{this.state.buttonName}</button>
      </div>
    );
  }
}

export default PresenterResultsView;
