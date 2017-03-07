import React from 'react';
import axios from 'axios';
import socket from '../../config/socket';

import Delivery from './Delivery';

import styles from '../../styles/pages/_Delivery';

class DeliveryView extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      deliveryId: this.props.params.deliveryId,
      lectureId: this.props.params.lectureId
    };

    this.getDelivery = this.getDelivery.bind(this);
    this.displayDelivery = this.displayDelivery.bind(this);

    this.getDelivery();
  }

  getDelivery() {
    const context = this;
    axios.get(`/db/l/${this.state.lectureId}/d/${this.state.deliveryId}`)
    .then(function (response) {
      console.log('DeliveryView: deliveries ', response);
      context.setState({deliveries: response.data});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  displayDelivery() {
    return (
      <Delivery
        
      />
    );
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h1>DeliveryView</h1>
        {this.displayDelivery()}
      </div>
    );
  }
}

export default DeliveryView;
