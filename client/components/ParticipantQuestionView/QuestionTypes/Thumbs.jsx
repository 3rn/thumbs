import React from 'react';
import styles from '../../../styles/pages/_ParticipantQuestionView';

export default class Thumbs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.card}>
        <button className={styles.selectButton} onClick={this.props.click} value={1}>Thumbs Up</button>
        <button className={styles.selectButton} onClick={this.props.click} value={2}>Thumbs Middle</button>
        <button className={styles.selectButton} onClick={this.props.click} value={3}>Thumbs Down</button>
      </div>
    );
  }
}
