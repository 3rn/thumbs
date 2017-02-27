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
    this.getQuestions = this.getQuestions.bind(this);
    this.displayQuestions = this.displayQuestions.bind(this);
    this.displayOnTheFly = this.displayOnTheFly.bind(this);

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
    this.setState({questionType: e.target.value}, () => {
      socket.emit('startVote', {
        room: this.props.room,
        questionType: this.state.questionType,
        choices: this.state.choices
      });
    });
  }

  displayOnTheFly() {
    return (
      <div>
        <div>
          <input type="text" className="style.primaryButton" placeholder="Optional title..." />
        </div>
        <button className={styles.primaryButton} onClick={this.handleClick} value="radio"><i className="fa fa-comment-o" aria-hidden="true"></i></button>
        <button className={styles.primaryButton} onClick={this.handleClick} value="radio"><i className="fa fa-check-square" aria-hidden="true"></i> <i className="fa fa-check-square" aria-hidden="true"></i> <i className="fa fa-check-square-o" aria-hidden="true"></i></button>
        <button className={styles.primaryButton} onClick={this.handleClick} value="radio"><i className="fa fa-circle-o" aria-hidden="true"></i> <i className="fa fa-circle" aria-hidden="true"></i> <i className="fa fa-circle-o" aria-hidden="true"></i></button>
        <button className={styles.primaryButton} onClick={this.handleClick} value='scale'><i className="fa fa-sliders" aria-hidden="true"></i></button>
        <button className={styles.primaryButton} onClick={this.handleClick} value="thumbs"><i className="fa fa-thumbs-up" aria-hidden="true"></i></button>
        <button className={styles.primaryButton} onClick={this.handleClick} value="yn">Y/N</button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className={styles.card}>
          <div className={styles.label}>Quick Check</div>
          { this.displayOnTheFly() }
        </div>
        <div className={styles.container}>
          {this.displayQuestions(this.state.questionQueue)}
        </div>
      </div>
    );
  }
}

export default PresenterPromptView;

// TODO
//
// Need to add to QuickAdd bar
// DONT DELETE
// <option value='checkbox'>Checkbox</option>
// <option value='textarea'>Open Response</option>

// Need to render when quick add multiple choice is toggled
// <Choices questionType={this.state.questionType} choices={this.state.choices} />
// <AddChoice questionType={this.state.questionType} change={this.handleChange} click={this.handleAdd}/>

// this.handleChange = this.handleChange.bind(this);
// this.handleAdd = this.handleAdd.bind(this);

// handleChange(event) {
//   if (event.target.name === 'choiceInput') {
//     this.setState({choice: event.target.value});
//   } else if (event.target.name === 'questionType') {
//     this.setState({questionType: event.target.value});
//   }
// }
// handleAdd(e) {
//   var updated = this.state.choices.slice();
//   updated.push(this.state.choice);
//   this.setState({choices: updated});
// }
// showAdd() {
//   if (this.state.questionType === 'radio' || this.state.questionType === 'checkbox') {
//     return (
//       <div>
//         <input type='text' name='choiceInput' onChange={this.handleChange} placeholder='Enter option' />
//         <button onClick={this.handleAdd}> + </button>
//       </div>
//     );
//   }
// }
// showForm() {
//   if (this.state.questionType === 'radio' || this.state.questionType === 'checkbox') {
//     return this.state.choices.map(function(choice) {
//       return (
//           <li><input type='text' defaultValue={choice} /></li>
//       );
//     });
//   }
// }
