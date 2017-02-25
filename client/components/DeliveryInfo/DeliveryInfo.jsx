import React from 'react';
import { Link } from 'react-router';

import styles from '../../styles/components/_deliveryInfo';

class DeliveryInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div className={styles.card}>
          
          <div className={styles.label}>Delivery Info</div>
          <span className={styles.info}>Participants: { this.props.participantCount }</span> |
          <span className={styles.info}>Participant Questions: { this.props.questionCount }</span>
        
        </div>
    );
  }
}


export default DeliveryInfo;
