import React from 'react';
import styles from '../../../styles/pages/_Response';

export default class OpenResponse extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type='textarea' onClick={this.props.click} />
        <button onClick={this.props.click}>Submit</button>
      </div>
    );
  }
}
