import React from 'react';
import axios from 'axios';

import AddQuestionForm from './AddQuestionForm';
import styles from '../../../styles/components/_presentationQuestions';


export default class PresentationQuestions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };

    this.addQuestion = this.addQuestion.bind(this);
    this.loadPresentationQuestions = this.loadPresentationQuestions.bind(this);
  }

  componentDidMount() {
    this.loadPresentationQuestions('RANT');
  }

  loadPresentationQuestions(presenterCode) {
    var context = this;
    axios.get('/db/savedQuestions/getQuestions/' + presenterCode)
    .then(function (response) {
      // debugger;
      var questions = [];
      response.data.map((q) => {
        questions.push({
          title: q.title,
          questionType: q.question_type,
          graphType: q.graph_type,
          content: q.content
        });
      });
      context.setState({questions});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  addQuestion(question) {
    //post question through api
    debugger;
    axios.post('/db/savedQuestions/getQuestions/RANT', question)
    .catch(function (error) {
      console.log(error);
    });

    var updatedQuestions = this.state.questions.slice(0);
    updatedQuestions.push(question);
    this.setState({questions: updatedQuestions});
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h1>Questions For My Presentation</h1>
          {this.state.questions.map((q, i) => (
              <div className={styles.question} key={i}> {'Q' + (i + 1) + '. ' + q.title} </div>)
            )
          }
          <AddQuestionForm addQuestion={this.addQuestion} />
        </div>
      </div>
    );
  }
}
