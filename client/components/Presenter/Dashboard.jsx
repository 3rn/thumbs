import React from 'react';
import styles from '../../styles/pages/_Dashboard';
import axios from 'axios';

import { Link, browserHistory } from 'react-router';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lectures: [],
      newLectureName: ''
    };

    this.getLectures = this.getLectures.bind(this);
    this.displayLectures = this.displayLectures.bind(this);
    this.handleLectureNameChange = this.handleLectureNameChange.bind(this);
    this.createLecture = this.createLecture.bind(this);
  }

  componentDidMount() {
    this.getLectures();
  }

  getLectures() {
    const context = this;

    // This endpoint returns all lectures given a userId
    axios.get('/db/l')
      .then((response) => {
        console.log('Dashboard: getLectures ', response);
        var lectures = response.data;
        context.setState({lectures: lectures});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleLectureNameChange(e) {
    this.setState({newLectureName: e.target.value});
  }

  createLecture(e) {
    e.preventDefault();
    const context = this;

    console.log(e.target);
    console.log('Creating lecture');

    console.log(this.state.newLectureName);

    axios.post('/db/l', {
      'title': context.state.newLectureName
    })
    .then((response) => {
      let lectureId = response.data.id;
      browserHistory.push(`/l/${lectureId}/edit`);
    });


    // browserHistory.push('/create');


  }

  displayNewLecture() {
    return (
      <form className={styles.card} onSubmit={this.createLecture}>
        <div className={styles.label}>New Lecture</div>
        <h4>{this.state.link}</h4>
        <input type="text" placeholder="Enter lecture title..."
          value={this.state.newLectureName}
          onChange={this.handleLectureNameChange}/>
        <button className={styles.primaryButton}>
          Create Lecture
        </button>
      </form>
    );
  }

  displayLectures() {
    return (
      this.state.lectures.map(lecture => {
        return (
          <Link to={`/l/${lecture.id}`} key={lecture.id}>
            <div className={styles.card}>
              <div className={styles.label}>Lecture</div>
              {lecture.title}
            </div>
          </Link>
        );
      })
    );
  }


  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.label}>
          Dashboard
          </div>
          <h3>Nathan Toung</h3>
        </div>
        {this.displayNewLecture()}
        {this.displayLectures()}
      </div>

    );
  }
}

export default Dashboard;
