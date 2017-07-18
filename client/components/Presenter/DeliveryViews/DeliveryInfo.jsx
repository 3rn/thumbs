import React from 'react';
import { Link } from 'react-router';
import socket from '../../../config/socket';
import styles from '../../../styles/components/_deliveryInfo.scss';

class DeliveryInfo extends React.Component {
  constructor(props) {
    super(props);
    socket.emit('joinPresentation', { room: 'FRED' });
  }

  handleSlideChangeClick(e) {
    const payload = { room: 'FRED', direction: e.target.value }; // value is left or right
    socket.emit('changeSlide', payload);
  }

  render() {
    return (
      <div>
        <div className={styles.card}>
          <div className={styles.label}>Delivery Info</div>
          <span className={styles.info}><i className="fa fa-television" aria-hidden="true" /><strong> {this.props.slideRoom}</strong></span>
          <span className={styles.info}><i className="fa fa-sign-in" aria-hidden="true" /><strong> FRED</strong></span>
          <span className={styles.info}><i className="fa fa-users" aria-hidden="true" /><strong> {this.props.roomCount }</strong></span>
          <span className={styles.info}><i className="fa fa-question-circle" aria-hidden="true" /><strong>{ this.props.participantConfused }</strong></span>

        </div>
        <div className={styles.card}>
          <div className={styles.label}>Slide Controls</div>
          <div className={styles.slideChangeButtonsWrapper}>
            <button className={`fa fa-arrow-left ${styles.slideChangeButtonLeft}`} value="left" onClick={this.handleSlideChangeClick} />
            <button className={`fa fa-arrow-right ${styles.slideChangeButtonRight}`} value="right" onClick={this.handleSlideChangeClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default DeliveryInfo;
