import React from 'react';
import styles from '../../../styles/pages/_Response';

export default class Scale extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: 5
    };

  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div className={styles.card}>
        <div>
          <input
            type="range"
            min="0" max="10"
            defaultValue={this.state.value}
            onChange={this.handleChange}
            step="1"/>
        </div>
          <button className={styles.selectButton} onClick={this.props.click}>Submit {this.state.value}</button>
      </div>

    );
  }
}
