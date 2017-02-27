import React from 'react';

export default class YesNo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.click} value={1}>Yes</button>
        <button onClick={this.props.click} value={2}>No</button>
      </div>
    );
  }
}
