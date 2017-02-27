import React from 'react';
import socket from '../../config/socket';
import styles from '../../styles/pages/_ParticipantQuestionView';

import YesNo from './QuestionTypes/YesNo';
import Thumbs from './QuestionTypes/Thumbs';
import Scale from './QuestionTypes/Scale';
import OpenResponse from './QuestionTypes/OpenResponse';
import MultipleChoice from './QuestionTypes/MultipleChoice';

class ParticipantQuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.showChoices = this.showChoices.bind(this);
  }

  handleClick(e) {
    socket.emit('vote', {
      room: this.props.room,
      option: e.target.value,
      questionType: this.props.questionType
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  showChoices() {
    if (this.props.questionType === 'yes-no') {
      return <YesNo click={this.handleClick} />;
    } else if (this.props.questionType === 'thumbs') {
      return <Thumbs click={this.handleClick} />;
    } else if (this.props.questionType === 'scale') {
      return <Scale click={this.handleClick} change={this.handleChange} />;
    } else if (this.props.questionType === 'textarea') {
      return <OpenResponse click={this.handleClick} questionType={this.props.questionType} />;
    } else {
      return <MultipleChoice click={this.handleClick} choices={this.props.choices} questionType={this.props.questionType} />;
    }
  }

  showSubmit() {
    if (this.props.questionType === 'radio' || this.props.questionType === 'checkbox') {
      return <button onClick={this.handleClick}>Submit</button>;
    }
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h1>ParticipantQuestionView</h1>
        { this.showChoices() }
        { this.showSubmit() }
      </div>
    );
  }
}

export default ParticipantQuestionView;
