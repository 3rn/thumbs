import React from 'react';
import axios from 'axios';
import socket from '../../config/socket';
import { Link, browserHistory } from 'react-router';

import Delivery from './Delivery';
import styles from '../../styles/pages/_Delivery';

class LectureView extends React.Component {
  constructor(props) {
    super(props);


    console.log('LectureView: lectureId: ', this.props.params.lectureId);

    this.state = {
      lectureId: this.props.params.lectureId,
      lecture: {
        'title': 'Finding lecture...'
      },
      deliveries: []
    };

    this.getDeliveries = this.getDeliveries.bind(this);
    this.getLectureTitle = this.getLectureTitle.bind(this);
    this.displayDeliveries = this.displayDeliveries.bind(this);

    this.getLectureTitle();
    this.getDeliveries();
  }

  getLectureTitle() {
    const context = this;
    axios.get(`/db/l/${this.state.lectureId}`)
    .then(function (response) {
      console.log('Lecture: ', response.data);
      if (response) {
        context.setState({lecture: response.data[0]});
        console.log('LectureView: lecture ', context.state.lecture);
      }      
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  getDeliveries() {
    const context = this;
    axios.get(`/db/l/${this.state.lectureId}/d`)
    .then(function (response) {
      console.log(response.data);
      if (response) {
        context.setState({deliveries: response.data});
        console.log('LectureView: deliveries ', context.state.deliveries);
      }      
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  displayDeliveries() {
    const context = this;
    return this.state.deliveries.map((element, index) => {
      return (
        <Link to={`/l/${context.state.lectureId}/d/${element.id}`}>
          <div className={styles.card}>
            <h6>Delivery # {element.id}</h6>
            <h2>{element.notes}</h2>
            <span>{element.created_at}</span>
          </div>
        </Link>
      );
    });
    
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h1>{`${this.state.lecture.title}`}</h1>
        {this.displayDeliveries()}
      </div>
    );
  }
}

export default LectureView;
