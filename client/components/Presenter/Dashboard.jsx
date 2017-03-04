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


  onLectureSelection(e) {
    console.log('Selected lecture '); 
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h1>Dashboard</h1>
      </div>

    );
  }
}

export default Dashboard;