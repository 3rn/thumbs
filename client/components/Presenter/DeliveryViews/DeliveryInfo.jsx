import React from 'react';
import { Link } from 'react-router';
import socket from '../../../config/socket';

import styles from '../../../styles/components/_deliveryInfo';

class DeliveryInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roomCount: this.props.roomCount || 0,
      participantConfused: this.props.participantConfused || 0
    };

    socket.emit('joinPresentation', {room: 'FRED'});
  }

  handleSlideChangeClick(e) {
    debugger;
    var payload = {room: 'FRED', direction: e.target.value }; //value is left or right
    socket.emit('changeSlide', payload);
  }

  render() {
    return (
      <div className={styles.card}>
        <div className={styles.label}>Delivery Info</div>
        <span className={styles.info}>Participants: { this.state.roomCount }</span>
        <span className={styles.separator}></span>
        <span className={styles.info}>Participant Confused Count: { this.state.participantConfused }</span>
        <button className={`fa fa-arrow-right ${styles.slideChangeButton}`} value="right" onClick={this.handleSlideChangeClick} />
        <button className={`fa fa-arrow-left ${styles.slideChangeButton}`} value="left" onClick={this.handleSlideChangeClick} />
      </div>
    );
  }
}

export default DeliveryInfo;
