import React from 'react';
import axios from 'axios';
import socket from '../../config/socket';
import { Link, browserHistory } from 'react-router';

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
    let context = this;
    // console.log('displayDeliveries');
    // console.log(context);
    // console.log(context.state.lectureId);
    // console.log('i:' + index + ' ' + element.id + ' ' + element.title);
    return this.state.deliveries.map((element, index) => {
      return (
        <div className={styles.card}>
          <Link to={`/l/${context.state.lectureId}/d/${element.id}`}>
            <h3>{element.title}</h3>
            <Delivery
              key={index + 1}
              index={index + 1}
              title={element.title}
              deliveryId={element.id}
              lectureId={context.state.lectureId}
            />
          </Link>
        </div>
      );
    });
    
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
