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
      <div>
        <div>
          <input
            type="range"
            min="1" max="10"
            defaultValue={this.state.value}
            onChange={this.handleChange}
            step="1"/>
        </div>
          <button className={styles.selectButton} onClick={this.props.click} value={this.state.value - 1}>Submit {this.state.value}</button>
      </div>

    );
  }
}
