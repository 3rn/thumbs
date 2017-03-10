import React from 'react';
import socket from '../../config/socket';
import styles from '../../styles/pages/_Response';

import YesNo from './ResponseViews/YesNo';
import Thumbs from './ResponseViews/Thumbs';
import Scale from './ResponseViews/Scale';
import OpenResponse from './ResponseViews/OpenResponse';
import MultipleChoice from './ResponseViews/MultipleChoice';

class Response extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      voted: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    socket.emit('vote', {
      room: 'FRED',
      value: e.target.value,
      questionTitle: this.props.questionTitle,
      questionType: this.props.questionType
    });

    this.setState({voted: true});
  }

  showChoices() {
    if (this.state.voted) {
      return <div className={styles.responded}><span>Vote Submitted</span></div>;
    } else if (this.props.questionType === 'YES_NO') {
      return <YesNo click={this.handleClick} />;
    } else if (this.props.questionType === 'THUMBS') {
      return <Thumbs click={this.handleClick} />;
    } else if (this.props.questionType === 'SCALE') {
      return <Scale click={this.handleClick} />;
    } else if (this.props.questionType === 'OPEN_RESPONSE') {
      return <OpenResponse click={this.handleClick} />;
    } else {
      return <MultipleChoice click={this.handleClick} choices={this.props.choices} questionType={this.props.questionType} />;
    }
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.label}>Title</div>
          <h2>{this.props.questionTitle}</h2>
          <div className={styles.details}>
            <strong>Question Type: </strong>{this.props.questionType}
          </div>
          <div className={styles.details}>
            <strong>Response Options: </strong>
          </div>
          { this.showChoices() }
        </div>
      </div>
    );
  }
}

export default Response;
