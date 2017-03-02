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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.showChoices = this.showChoices.bind(this);
  }

  handleClick(e) {
    socket.emit('vote', {
      room: this.props.room,
      value: e.target.value,
      questionType: this.props.questionType
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  showChoices() {
    if (this.props.questionType === 'YES_NO') {
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
        { this.showChoices() }
      </div>
    );
  }
}

export default Response;
