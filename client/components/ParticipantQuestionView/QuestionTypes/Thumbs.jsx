import React from 'react';

export default class Thumbs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.click} value={1}>Thumbs Up</button>
        <button onClick={this.props.click} value={2}>Thumbs Middle</button>
        <button onClick={this.props.click} value={3}>Thumbs Down</button>
      </div>
    );
  }
}
