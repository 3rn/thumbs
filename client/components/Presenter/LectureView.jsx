import React from 'react';
import axios from 'axios';
import socket from '../../config/socket';
import { Link, browserHistory } from 'react-router';

import Delivery from './Delivery';
import Modal from '../Modal';
import styles from '../../styles/pages/_LectureView';

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
      deliveries: [],
      link: ''
    };

    this.getDeliveries = this.getDeliveries.bind(this);
    this.getLectureTitle = this.getLectureTitle.bind(this);
    this.displayNewDelivery = this.displayNewDelivery.bind(this);
    this.displayDeliveries = this.displayDeliveries.bind(this);
    this.handleStartDelivery = this.handleStartDelivery.bind(this);
    this.editClickHandler = this.editClickHandler.bind(this);
  };

  componentDidMount() {
    this.getLectureTitle();
    this.getDeliveries();
    this.generateNewLink();
  };

  handleStartDelivery (e) {
    e.preventDefault();
    axios.post('/db/d', {
      lectureId: this.state.lectureId,
      userId: 1
    })
    .then(response => {
      browserHistory.push(`/l/${this.state.lectureId}/d/${response.data.id}`);
    });
  };

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
  };

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

  editClickHandler() {
    console.log('EditLectureView: Edit');
    browserHistory.push(`/l/${this.state.lectureId}/edit`);
  };


  generateNewLink() {
    console.log('Generating new link');
    const context = this;

    let link = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for( let i = 0; i < 4; i++ ) {
      link += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    axios.get(`/db/s/${link}`).then((response) => {
      if (response.data.length !== 0) {
        // Link already exists
        link = this.generateNewLink();
      } else {
        this.setState({'link': link});
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  displayNewDelivery() {
    const context = this;

    return (
      <form className={styles.card} >
        <div className={styles.label}>New Delivery</div>
        <h4>{this.state.link}</h4>
        <button className={styles.primaryButton} onClick={this.handleStartDelivery}>
          Start Delivery
        </button>
      </form>
      );
  };

  displayDeliveries() {
    const context = this;

    if (this.state.deliveries.length === 0) {
      return;
    }

    return this.state.deliveries.map((element, index) => {
      return (
        <Link key={index} to={`/l/${context.state.lectureId}/d/${element.id}`}>
          <div className={styles.card}>
            <div className={styles.label}>Delivery # {element.id}</div>
            <h2>{element.notes}</h2>

            <div className={styles.details}>
              <strong>Delivered:</strong> {element.created_at}
            </div>
          </div>
        </Link>
      );
    });
  };

  openModal() {
    return (
      <Modal />
    );
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.label}>
            Lecture Info
            <span className={styles.settings}>
              <i className="fa fa-lock" aria-hidden="true" onClick={this.editClickHandler}></i>
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
        {this.displayNewDelivery()}
        {this.displayDeliveries()}
      </div>
    );
  }
};

export default LectureView;
