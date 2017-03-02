import React from 'react';
import socket from '../../../config/socket';
import styles from '../../../styles/pages/_Response';

class QuickCheck extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
      socket.emit('startVote', {
        room: this.props.room,
        questionType: e.target.value,
        choices: []
      });
  }

  render() {
    return (
      <div className={styles.card}>
        <div className={styles.label}>Quick Check</div>
          <button className={styles.quickCheckButton} onClick={this.handleClick} value="YES_NO">Y/N</button>
          <button className={`fa fa-thumbs-up ${styles.quickCheckButton}`} onClick={this.handleClick} aria-hidden="true" value="THUMBS" />
          <button className={`fa fa-sliders ${styles.quickCheckButton}`} onClick={this.handleClick} value="SCALE" />
          <button className={`fa fa-comment-o ${styles.quickCheckButton}`} onClick={this.handleClick} value="OPEN_RESPONSE" />
      </div>
    );
  }
}

export default QuickCheck;
