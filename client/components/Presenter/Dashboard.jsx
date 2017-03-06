import React from 'react';
import styles from '../../styles/pages/_Dashboard';
import axios from 'axios';

import { Link, browserHistory } from 'react-router';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lectures: []
    };


    this.getLectures = this.getLectures.bind(this);
    this.displayLectures = this.displayLectures.bind(this);

    this.getLectures();
  }

  getLectures() {
    const context = this;

    // This endpoint returns all lectures given a userId
    axios.get('/db/l')
    .then(function (response) {
      console.log('Dashboard: getLectures ', response);
      var lectures = response.data;
      context.setState({lectures: lectures});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  displayNewLecture() {
    return (
      <form className={styles.card} >
        <div className={styles.label}>New Delivery</div>
        <h4>{this.state.link}</h4>
        <button className={styles.primaryButton}>
          Start Delivery
        </button>
      </form>
    );
  }

  displayLectures() {
    return (
      this.state.lectures.map(lecture => {
        return (
          <Link to={`/l/${lecture.id}`}>
            <div className={styles.card}>
              <div className={styles.label}>Lecture</div>
              {lecture.title}
            </div>
          </Link>
        );
      })
    )
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
