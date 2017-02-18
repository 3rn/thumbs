import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreaters } from 'redux';
// import { actions } from '../actions/ParticipantWaitingViewActions.js';

class ParticipantWaitingView extends React.Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state._reducer
  };
};

const mapDispatchToProps = dispatch => {
  bindActionCreaters({actions}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantWaitingView);
