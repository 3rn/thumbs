import React from 'react';
import styles from '../../../styles/pages/_Response';

export default class Thumbs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className={styles.selectButton} onClick={this.props.click} value={0}>Thumbs Up</button>
        <button className={styles.selectButton} onClick={this.props.click} value={1}>Thumbs Middle</button>
        <button className={styles.selectButton} onClick={this.props.click} value={2}>Thumbs Down</button>
      </div>
    );
  }
}
