import React from 'react';
import axios from 'axios';

import { browserHistory } from 'react-router';

import AddQuestionForm from './PresentationViews/AddQuestionForm';
import styles from '../../styles/pages/_EditLectureView';


export default class EditLectureView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lectureId: this.props.params.lectureId,
      lecture: {
        'title': 'Finding your lecture...',
        'created_at': '',
        'updated_at': '',
        'description': '...the best lecture ever!'
      },
      questions: []
    };

    // this.addQuestion = this.addQuestion.bind(this);
    this.createQuestion = this.createQuestion.bind(this);
    this.getLecture = this.getLecture.bind(this);
    // this.loadEditLectureView = this.loadEditLectureView.bind(this);
    this.editLockClickHandler = this.editLockClickHandler.bind(this);
    this.getLectureQuestions = this.getLectureQuestions.bind(this);
    this.displayQuestions = this.displayQuestions.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
  }

  componentDidMount() {
    this.getLecture();
    this.getLectureQuestions();
    // this.loadEditLectureView('RANT');
  }

  // loadEditLectureView(presenterCode) {
  //   var context = this;
  //   axios.get('/db/savedQuestions/getQuestions/' + presenterCode)
  //   .then(function (response) {
  //     // debugger;
  //     var questions = [];
  //     response.data.map((q) => {
  //       questions.push({
  //         title: q.title,
  //         questionType: q.question_type,
  //         graphType: q.graph_type,
  //         content: q.content
  //       });
  //     });
  //     context.setState({questions});
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  getLecture() {
    const context = this;
    axios.get(`/db/l/${this.state.lectureId}`)
    .then(function (response) {
      console.log(response);
      if (response.data.length !== 0) {
        context.setState({lecture: response.data[0]});
      }      
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  getLectureQuestions() {
    const context = this;
    console.log('Getting lecture questions');
    
    axios.get(`/db/q/${this.state.lectureId}`)
    .then(questions => {
      console.log('lecture questions ', questions.data);
      if (questions.data) {
        context.setState({questions: questions.data});
      }      
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  editLockClickHandler() {
    browserHistory.push(`/l/${this.state.lectureId}/`)
  }

  createQuestion() {
    return (
      <div className={styles.card}>
        <div className={styles.label}>New Question</div>
        
        {
          // this.state.questions.map((q, i) => (
          //   <div className={styles.question} key={i}> {'Q' + (i + 1) + '. ' + q.title} </div>)
          // )
        }
        <AddQuestionForm 
          lectureId={this.state.lectureId} 
          addQuestion={this.addQuestion} />
      </div>
    );
  }

  addQuestion(question) {
    console.log('Adding question to questions');
    let questions = this.state.questions;
    debugger;
    questions.push(question);

    this.setState({questions: questions});
  }

  displayQuestions() {
    console.log('EditLectureView: displayQuestions');
    const context = this;
    
    return context.state.questions.map((question, index) => {
      return (
        <div className={styles.card} key={question.id}>
          <div className={styles.label}>
            Question #{index+1}
          </div>
          <h2>{question.title}</h2>
        </div>
      )
    });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.label}>
            Lecture Info
            <span className={styles.settings}>
              <i className="fa fa-unlock" aria-hidden="true" onClick={this.editLockClickHandler}></i>
            </span>
          </div>
          
          <h1>{`${this.state.lecture.title}`}</h1>
          <div className={styles.details}>
            <strong>Last Updated: </strong>{this.state.lecture.updated_at}
          </div>

          <div className={styles.description}>
            {this.state.lecture.description}
          </div>

          
            
          
        </div>


        {this.createQuestion()}
        {this.displayQuestions()}

      </div>
    );
  }
}
