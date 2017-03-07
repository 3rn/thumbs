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


    this.onQuestionTypeSelect = this.onQuestionTypeSelect.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleQuestionAdd = this.handleQuestionAdd.bind(this);
    this.handleMultipleChoiceAdd = this.handleMultipleChoiceAdd.bind(this);
  }

  getDefaults() {
    return {
      title: '',
      questionType: 'Select A Question Type',
      graphType: 'Select a Graph Type',
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
    
    axios.post('/db/q/', {
      title: this.state.title,
      lectureId: this.state.lectureId,
      questionType: this.state.questionType,
      graphType: this.state.graphType,
      
    })
    .catch(function (error) {
      console.log(error);
    });

    //reset fields
    this.setState(this.getDefaults());
  }

  render() {
    return (
      <div>
        <div>
          <input 
            type="text" 
            value={this.state.title} 
            placeholder="Enter question..." 
            onChange={this.handleTitleChange} />
        </div>

        <div>
          <span>Question Type: </span>
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

        <div>
          <span>Graph Type: </span>
          <select>
            <option value="pie">Pie Chart</option>
            <option value="bar">Bar Chart</option>
            <option value="radar">Radar Chart</option>
          </select>
        </div>

        <button className={styles.primaryButton} onClick={this.handleQuestionAdd}> Add Question </button>
      </div>
    );
  }
}
