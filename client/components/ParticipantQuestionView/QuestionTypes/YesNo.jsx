import React from 'react';
import styles from '../../../styles/pages/_ParticipantQuestionView';

export default class YesNo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.card}>
        <button className={styles.primaryButton} onClick={this.props.click} value={2}>No</button>
        <button className={styles.primaryButton} onClick={this.props.click} value={1}>Yes</button>
      </div>
    );
  }
}
