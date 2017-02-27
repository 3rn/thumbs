import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import QuestionPrompt from '../QuestionPrompt/QuestionPrompt';
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
    this.getQuestions = this.getQuestions.bind(this);
    this.displayQuestions = this.displayQuestions.bind(this);

    this.state = {
      questionQueue: [],
      questionType: 'default',
      choice: '',
      choices: []
    };

    this.getQuestions();
  }

  getQuestions() {
    const context = this;

    axios.get(`/db/savedQuestions/getQuestions/${this.props.room}`)
    .then(function (response) {
      var questions = response.data.map((element) => (element));
      context.setState({questionQueue: questions});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  displayQuestions(questionArray) {
    var questions = questionArray.map((element, index) => {
      return (
        <QuestionPrompt
          key={index + 1}
          index={index + 1}
          element={element}
          room={this.props.room}
        />
      );
    });

    return questions;
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

  showAdd() {
    if (this.state.questionType === 'radio' || this.state.questionType === 'checkbox') {
      return (
        <div>
          <input type='text' name='choiceInput' onChange={this.handleChange} placeholder='Enter option' />
          <button onClick={this.handleAdd}> + </button>
        </div>
      );
    }
  }

  showForm() {
    if (this.state.questionType === 'radio' || this.state.questionType === 'checkbox') {
      return this.state.choices.map(function(choice) {
        return (
            <li><input type='text' defaultValue={choice} /></li>
        );
      });
    }
  }

  render() {
    return (
      <div className={styles.container}>
        {this.displayQuestions(this.state.questionQueue)}
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
          <h5>PresenterPromptView</h5>
      </div>
    );
  }
}

export default PresenterPromptView;
