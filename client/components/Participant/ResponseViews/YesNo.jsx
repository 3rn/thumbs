import React from 'react';
import styles from '../../../styles/pages/_Response.scss';

export default class YesNo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className={styles.selectButton} onClick={this.props.click} value={0}>Yes</button>
        <button className={styles.selectButton} onClick={this.props.click} value={1}>No</button>
      </div>
    );
  }
}
