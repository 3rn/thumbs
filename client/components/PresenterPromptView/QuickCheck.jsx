import React from 'react';
import socket from '../../config/socket';
import styles from '../../styles/pages/_ParticipantQuestionView';

export default class QuickCheck extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('thisn', this.props);
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
        <input type="text" className="" placeholder="Optional title..." />
        <button className={styles.primaryButton} onClick={this.handleClick} value="textarea"><i className="fa fa-comment-o" aria-hidden="true"></i></button>
        <button className={styles.primaryButton} onClick={this.handleClick} value="checkbox"><i className="fa fa-check-square" aria-hidden="true"></i> <i className="fa fa-check-square" aria-hidden="true"></i> <i className="fa fa-check-square-o" aria-hidden="true"></i></button>
        <button className={styles.primaryButton} onClick={this.handleClick} value="radio"><i className="fa fa-circle-o" aria-hidden="true"></i> <i className="fa fa-circle" aria-hidden="true"></i> <i className="fa fa-circle-o" aria-hidden="true"></i></button>
        <button className={styles.primaryButton} onClick={this.handleClick} value='scale'><i className="fa fa-sliders" aria-hidden="true"></i></button>
        <button className={styles.primaryButton} onClick={this.handleClick} value="thumbs"><i className="fa fa-thumbs-up" aria-hidden="true"></i></button>
        <button className={styles.primaryButton} onClick={this.handleClick} value="yes-no">Y/N</button>
      </div>
    );
  }
}

// handleClick(e) {
//   this.setState({questionType: e.target.value}, () => {
//     socket.emit('startVote', {
//       room: this.props.room,
//       questionType: this.state.questionType,
//       choices: this.state.choices
//     });
//   });
// }
