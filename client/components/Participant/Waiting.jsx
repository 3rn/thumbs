import React from 'react';
import socket from '../../config/socket.js';
import styles from '../../styles/pages/_Waiting';

import Loading from './Loading';

class Waiting extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      confused: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  confusion() {
    if (this.state.confused) {
      return (
        <span className={styles.askedQuestion}>Presenter Alerted</span>
      );
    } else {
      return (
        <button className={styles.primaryButton} onClick={this.handleClick}>I'm Confused</button>
      );
    }
  }

  handleClick() {
    socket.emit('participantConfused', {room: this.props.room});
    this.setState({confused: true});
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h1>In room: {this.props.room}</h1>
          <div className={styles.details}> Waiting for question from presenter...</div>
          <Loading />
          { this.confusion() }
        </div>
      </div>
    );
  }
}

export default Waiting;
