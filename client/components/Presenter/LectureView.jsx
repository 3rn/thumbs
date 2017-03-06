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
        'title': 'Finding your lecture...',
        'created_at': '',
        'updated_at': '',
        'description': '...the best lecture ever!'
      },
      deliveries: [
        {
          notes: 'Remember to smile!'
        }
      ]
    };

    this.getDeliveries = this.getDeliveries.bind(this);
    this.getLectureTitle = this.getLectureTitle.bind(this);
    this.displayNewDelivery = this.displayNewDelivery.bind(this);
    this.displayDeliveries = this.displayDeliveries.bind(this);
  }

  componentDidMount() {
    this.getLectureTitle();
    this.getDeliveries();
  }

  getLectureTitle() {
    const context = this;
    axios.get(`/db/l/${this.state.lectureId}`)
    .then(function (response) {
      console.log('Lecture: ', response.data);
      if (response) {
        context.setState({lecture: {
          'title': response.data[0].title,
          'created_at': (new Date(response.data[0].created_at)).toUTCString(),
          'updated_at': (new Date(response.data[0].updated_at)).toUTCString(),
          'description': response.data[0].description
          }
        });
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

  displayNewDelivery() {
    const context = this;

    return (
      <form className={styles.card} >
        <h3>New Delivery</h3>
        <h4>Link</h4>
        <button className={styles.primaryButton}>
          Start Delivery
        </button>
      </form>
      );
  }

  displayDeliveries() {
    const context = this;
    return this.state.deliveries.map((element, index) => {
      return (
        <Link to={`/l/${context.state.lectureId}/d/${element.id}`}>
          <div className={styles.card}>
            <div className={styles.label}>Delivery # {element.id}</div>
            <h2>{element.notes}</h2>

            <div className={styles.details}>
              <span>{}</span>
            </div>
          </div>
        </Link>
      );
    });
    
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.label}>Lecture Info</div>
          <h1>{`${this.state.lecture.title}`}</h1>
          <div className={styles.details}>
            <strong>Last Updated: </strong>{this.state.lecture.updated_at}
          </div>
          <div className={styles.description}>
            {this.state.lecture.description}
          </div>
        </div>
        {this.displayNewDelivery()}
        {this.displayDeliveries()}
      </div>
    );
  }
}

export default LectureView;
