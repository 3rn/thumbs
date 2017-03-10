import React from 'react';
import { Link } from 'react-router';

import styles from '../../../styles/components/_deliveryInfo';

class DeliveryInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      participantConfused: this.props.participantConfused || 0
    };
  }

  render() {
    return (
      <div className={styles.card}>
        <div className={styles.label}>Delivery Info</div>
        <span className={styles.info}>Participants: { this.props.roomCount }</span>
        <span className={styles.separator}></span>
        <span className={styles.info}>Participant Confused Count: { this.props.participantConfused }</span>
      </div>
    );
  }
}

export default DeliveryInfo;
