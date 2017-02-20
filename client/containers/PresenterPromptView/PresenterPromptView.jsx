import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { actions } from '../actions/index.js';

class PresenterPromptView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>PresenterPromptView</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state._reducer
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PresenterPromptView);
