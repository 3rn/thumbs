import React from 'react';
import axios from 'axios';
import socket from '../../config/socket';

import Delivery from './Delivery';

import styles from '../../styles/pages/_Delivery';

class LectureView extends React.Component {
  constructor(props) {
    super(props);

    this.getDeliveries = this.getDeliveries.bind(this);
    this.displayDeliveries = this.displayDeliveries.bind(this);

    console.log('LectureView: lectureId: ', this.props.params.lectureId);

    this.state = {
      lectureId: this.props.params.lectureId,
      deliveries: []
    };

    this.getDeliveries();
  }

  getDeliveries() {
    const context = this;
    axios.get(`/db/l/${this.state.lectureId}`)
    .then(function (response) {
      console.log(response);
      if (response) {
        context.setState({deliveries: deliveries});
        console.log('LectureView: deliveries ', context.state.deliveries);
      }      
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  displayDeliveries(deliveries) {
    this.state.deliveries.map((element, index) => {
      return (
        <Delivery
          key={index + 1}
          index={index + 1}
        />
      );
    });
    return deliveries;
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h1>LectureView</h1>
        {this.displayDeliveries()}
      </div>
    );
  }
}

export default LectureView;
