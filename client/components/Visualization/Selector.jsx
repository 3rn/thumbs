import React from 'react';
import styles from '../../styles/pages/_Response.scss';

export default class Selector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className={styles.secondaryButton} onClick={this.props.click} value="bar">Bar</button>
        <button className={styles.secondaryButton} onClick={this.props.click} value="pie">Pie</button>
        <button className={styles.secondaryButton} onClick={this.props.click} value="radar">Radar</button>
      </div>
    );
  }
}
