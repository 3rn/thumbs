import React from 'react';
import axios from 'axios';

import AddMultipleChoice from './AddMultipleChoice';
import styles from '../../../styles/components/_questionForm';

export default class AddQuestionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getDefaults();

    this.state.title = '';
    this.state.lectureId = this.props.lectureId;

    this.addQuestionToQuestions = this.props.addQuestion;
    this.onQuestionTypeSelect = this.onQuestionTypeSelect.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleQuestionAdd = this.handleQuestionAdd.bind(this);
    this.handleMultipleChoiceAdd = this.handleMultipleChoiceAdd.bind(this);
  }

  getDefaults() {
    return {
      title: '',
      questionType: 'Select A Question Type',
      graphType: 'Pie Chart',
      content: []
    };
  }

  onQuestionTypeSelect(e) {
    this.setState({questionType: e.target.value});
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value});
  }

  handleMultipleChoiceAdd(choice) {
    var newContent = this.state.content.slice(0);
    newContent.push(choice);
    this.setState({content: newContent});
  }

  handleQuestionAdd() {
    console.log('AddQuestionForm: Question Add');
    const context = this;
    let question = {
      title: this.state.title,
      lectureId: this.state.lectureId,
      questionType: this.state.questionType,
      graphType: this.state.graphType,
    }

    axios.post(`/db/q/${this.state.lectureId}`, question)
    .catch(function (error) {
      console.log(error);
    })
    .then((res) => {
      context.addQuestionToQuestions(question);

      //reset fields
      this.setState(this.getDefaults());
    });

  }

  displayAddQuestionButton() {
    if (this.state.title === '') {
      return <button className={styles.secondaryButton}> Add Question </button>
    } else {
      return <button className={styles.primaryButton} onClick={this.handleQuestionAdd}> Add Question </button>
    }
  }

  render() {
    return (
      <div>
        <div>
          <div className={styles.details}>
            <strong>Question Title:</strong>
          </div>
          <input 
            type="text" 
            value={this.state.title} 
            placeholder="Enter question..." 
            onChange={this.handleTitleChange} />
        </div>

        <div className={styles.details}>
          <strong>Question Type:  </strong>
          <div className={styles.space}></div>
          <select onChange={this.onQuestionTypeSelect}>
            <option value="YES-NO">Yes/No</option>
            <option value="MULTIPLE_CHOICE">Multiple Choice</option>
            <option value="THUMBS">Thumbs</option>
            <option value="SLIDER">Slider</option>
          </select>
        </div>

        {
          this.state.questionType === 'MULTIPLE_CHOICE' ?
          <AddMultipleChoice
            choices={this.state.content}
            handleMultipleChoiceAdd={this.handleMultipleChoiceAdd}
          />
          : null
        }


        {this.displayAddQuestionButton()}
      </div>
    );
  }
}
