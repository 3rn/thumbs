import React from 'react';

export default class Selector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.click} value="bar">Bar</button>
        <button onClick={this.props.click} value="pie">Pie</button>
        <button onClick={this.props.click} value="plot">Scatter Plot</button>
      </div>
    );
  }
}
