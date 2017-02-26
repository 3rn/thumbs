import React from 'react';

export default class Scale extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          1
          <input
            type="range"
            min="0" max="10"
            defaultValue="5"
            onChange={this.props.change}
            step="1"/>
          10
          <button onClick={this.props.click}>Submit</button>
      </div>
    );
  }
}
