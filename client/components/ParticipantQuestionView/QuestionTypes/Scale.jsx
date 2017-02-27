import React from 'react';
import styles from '../../../styles/pages/_ParticipantQuestionView';

export default class Scale extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.card}>
        <button className={styles.secondaryButton} onClick={this.props.click}>Submit</button>
          <input
            type="range"
            min="0" max="10"
            defaultValue="5"
            onChange={this.props.change}
            step="1"/>
      </div>
    );
  }
}
