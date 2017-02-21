import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { actions } from '../actions/index.js';

export default class PresenterPromptView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>PresenterPromptView</h1>
        <button onClick={this.props.sendQuestion}> Send Thumbs Check </button>
      </div>
    );
  }
}
