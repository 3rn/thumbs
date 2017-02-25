import React from 'react';

export default class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Choices:</p>
        <span> A: </span><input type="text"/>
        <span> B: </span><input type="text"/>
        <span> C: </span><input type="text"/>
        <span> D: </span><input type="text"/>
        <span> E: </span><input type="text"/>
      </div>
    );
  }
}