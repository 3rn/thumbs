import React from 'react';
import Visualization from '../Visualization/Visualization';
import socket from '../../config/socket';

import styles from '../../styles/pages/_PresenterResultsView';

class PresenterResultsView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonName: 'Stop Vote'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.status === 'IN_PROGRESS') {
      socket.emit('endVote', {room: this.props.room});
      this.setState({buttonName: 'Ask Another Question'});
    } else if (this.props.status === 'ENDED') {
      socket.emit('newVote', {room: this.props.room});
      this.setState({buttonName: 'Stop Vote'});
    }
  }

  render() {
    if (this.props.questionType === 'thumbs') {
      var graphData = [
        {choice: 'Thumbs Up', value: this.props.data[0]},
        {choice: 'Thumbs Middle', value: this.props.data[1]},
        {choice: 'Thumbs Down', value: this.props.data[2]}
      ];
    } else if (this.props.questionType === 'yn') {
      var graphData = [
        {choice: 'Yes', value: this.props.data[0]},
        {choice: 'No', value: this.props.data[1]}
      ];
    } else if (this.props.questionType === 'scale') {
      var graphData = [
        {choice: '1', value: this.props.data[0]},
        {choice: '2', value: this.props.data[1]},
        {choice: '3', value: this.props.data[2]},
      ];
    } else {
      var graphData = [
        {choice: 'A', value: this.props.data[0]},
        {choice: 'B', value: this.props.data[1]},
        {choice: 'C', value: this.props.data[2]}
      ];
    }
    return (
      <div className={styles.card}>
        <h1>ResultsView</h1>
        <Visualization data={graphData} questionType={this.props.questionType} choices={this.props.choices} />
        <button className={styles.primaryButton} onClick={this.handleClick}>{this.state.buttonName}</button>
      </div>
    );
  }
}

export default PresenterResultsView;
