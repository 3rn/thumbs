import React from 'react';
import MultipleChoice from '../MultipleChoice/MultipleChoice';

export default class AddQuestionForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = this.getDefaults();

    this.onQuestionTypeSelect = this.onQuestionTypeSelect.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleQuestionAdd = this.handleQuestionAdd.bind(this);
  }

  getDefaults() {
    return {
      title: '',
      questionType: 'Select A Question Type',
      graphType: 'Select a Graph Type'
    };
  }

  onQuestionTypeSelect(e) {
    this.setState({questionType: e.target.value});
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value});
  }
  
  handleQuestionAdd() {
    var question = {
      title: this.state.title,
      questionType: this.state.questionType,
      graphType: this.state.graphType
    };
    this.props.addQuestion(question);
    
    //reset fields
    this.setState(this.getDefaults());

  }

  render() {
    return (
      <div>
        <div>
          <span>Question Title: </span> <input value={this.state.title} onChange={this.handleTitleChange} />
        </div>
        
        <div>
          <span>Question Type: </span> 
          <select onChange={this.onQuestionTypeSelect}>
            <option value="yesNo">Yes/No</option>
            <option value="multipleChoice">Multiple Choice</option>
            <option value="thumbs">Thumbs</option>
            <option value="slider">Slider</option>
          </select>
        </div>
        
        {this.state.questionType === 'multipleChoice' ?
          <MultipleChoice />
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

        <button onClick={this.handleQuestionAdd}> Add Question </button>
      </div>
    );
  }
}