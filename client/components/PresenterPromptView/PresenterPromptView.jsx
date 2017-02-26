import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { actions } from '../actions/index.js';
import styles from '../../styles/pages/_PresenterPromptView';
import socket from '../../config/socket';

import AddChoice from './AddChoice';
import Choices from './Choices';


class PresenterPromptView extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);

    this.state = {
      questionType: 'default',
      choice: '',
      choices: []
    };
  }

  handleClick(e) {
    socket.emit('startVote', {
      room: this.props.room,
      questionType: this.state.questionType,
      choices: this.state.choices
    });
  }

  handleChange(event) {
    if (event.target.name === 'choiceInput') {
      this.setState({choice: event.target.value});
    } else if (event.target.name === 'questionType') {
      this.setState({questionType: event.target.value});
    }
  }

  handleAdd(e) {
    var updated = this.state.choices.slice();
    updated.push(this.state.choice);
    this.setState({choices: updated});
  }

  render() {
    return (
      <div className={styles.container}>
          <h1>PresenterPromptView</h1>
          <div>
            <select name="questionType" value={this.state.questionType} onChange={this.handleChange}>
              <option value='default' disabled>Select Question Type</option>
              <option value='yn'>Yes / No</option>
              <option value='thumbs'>Thumbs</option>
              <option value='scale'>Scale (1-10)</option>
              <option value='radio'>Multiple Choice</option>
              <option value='checkbox'>Checkbox</option>
              <option value='textarea'>Open Response</option>
            </select>
          </div>
          <Choices questionType={this.state.questionType} choices={this.state.choices} />
          <AddChoice questionType={this.state.questionType} change={this.handleChange} click={this.handleAdd}/>
          <button onClick={this.handleClick}>Send Question</button>
      </div>
    );
  }
}

export default PresenterPromptView;
