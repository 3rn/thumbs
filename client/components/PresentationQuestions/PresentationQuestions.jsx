import React from 'react';
import AddQuestionForm from '../AddQuestionForm/AddQuestionForm';

export default class PresentationQuestions extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      questions: []
    };

    this.addQuestion = this.addQuestion.bind(this);
  }

  addQuestion(question) {
    var updatedQuestions = this.state.questions.slice(0);
    updatedQuestions.push(question);
    this.setState({questions: updatedQuestions});
  }

  render() {
    return (
      <div>
        <h1>Questions For My Presentation</h1>
        {this.state.questions.map((q, i) => (
            <div key={i}> {'Q' + (i + 1) + '. ' + q.title} </div>)
          )
        }
        <AddQuestionForm addQuestion={this.addQuestion} />
      </div>
    );
  }
}