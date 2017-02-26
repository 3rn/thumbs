import React from 'react';

export default class OpenResponse extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type={this.props.questionType} onClick={this.props.click} />
        <button onClick={this.props.click}>Submit</button>
      </div>
    );
  }
}
