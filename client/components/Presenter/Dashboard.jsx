import React from 'react';
import styles from '../../styles/pages/_Dashboard';
import axios from 'axios';

import { Link, browserHistory } from 'react-router';

import { connect } from 'react-redux';

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
    this.displayNewLecture = this.displayNewLecture.bind(this);

    // this.getLectures();
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

    if (this.state.newLectureName !== '') {
      axios.post('/db/l', {
        'title': context.state.newLectureName,
        'slide_url': context.state.newLectureSlideUrl
      })
      .then((response) => {
        let lectureId = response.data.id;
        browserHistory.push(`/l/${lectureId}/edit`);
      });
    }
  }

  displayCreateLectureButton() {
    if (this.state.newLectureName === '') {
      return <button className={styles.secondaryButton}> Create Lecture </button>
    } else {
      return <button className={styles.primaryButton}> Create Lecture </button>
    }
  }

  displayNewLecture() {
    return (
      <form className={styles.card} onSubmit={this.createLecture}>
        <div className={styles.label}>New Lecture</div>
        <h4>{this.state.link}</h4>
        <input type="text" placeholder="Enter lecture title..."
          value={this.state.newLectureName}
          onChange={this.handleLectureNameChange}/>
        
        {this.displayCreateLectureButton()}
      </form>
    );
  }

  displayLectures() {
    return (
      this.state.lectures.map(lecture => {
        return (
          <Link to={`/l/${lecture.id}`} key={lecture.id}>
            <div className={styles.card}>
              <div className={styles.label}>Lecture #{lecture.id}</div>
              <h4>{lecture.title}</h4>
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
          <h3>Welcome {this.props.name}!</h3>
          <div className={styles.details}>
            Room Code: <strong>FRED</strong>
          </div>
        </div>
        {this.displayNewLecture()}
        {this.displayLectures()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.loginReducer.name,
  email: state.loginReducer.email
});

export default connect(mapStateToProps, null)(Dashboard);