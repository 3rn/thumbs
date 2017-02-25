import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { actions } from '../actions/index.js';
import styles from '../../styles/pages/_PresenterPromptView';

export default class PresenterPromptView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      <div className={styles.container}>
        <h1>PresenterPromptView</h1>
        <button onClick={this.props.sendQuestion}> Send Thumbs Check </button>
      </div>
      
    );
  }
}
