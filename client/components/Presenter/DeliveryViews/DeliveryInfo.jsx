import React from 'react';
import { Link } from 'react-router';
import socket from '../../../config/socket';

import styles from '../../../styles/components/_deliveryInfo';

class DeliveryInfo extends React.Component {
  constructor(props) {
    super(props);
    socket.emit('joinPresentation', {room: 'FRED'});
  }

  handleSlideChangeClick(e) {
    var payload = {room: 'FRED', direction: e.target.value }; //value is left or right
    socket.emit('changeSlide', payload);
  }

  render() {
    return (
      <div className={styles.card}>
        <div className={styles.label}>Delivery Info</div>
        <span className={styles.info}>Participants: { this.props.roomCount }</span>
        <span className={styles.separator}></span>
        <span className={styles.info}>Participant Confused Count: { this.props.participantConfused }</span>
        <div className={styles.slideChangeButtonsWrapper}>
          <button className={`fa fa-arrow-left ${styles.slideChangeButtonLeft}`} value="left" onClick={this.handleSlideChangeClick} />
          <button className={`fa fa-arrow-right ${styles.slideChangeButtonRight}`} value="right" onClick={this.handleSlideChangeClick} />
        </div>
      </div>
    );
  }
}

export default DeliveryInfo;
