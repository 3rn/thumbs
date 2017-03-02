import React from 'react';
import Visualization from '../Visualization/Visualization';
import socket from '../../config/socket';

import styles from '../../styles/pages/_Results';

class Results extends React.Component {
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
    if (this.props.questionType === 'THUMBS') {
      var graphData = [
        {choice: 'Thumbs Up', value: this.props.thumbs[0]},
        {choice: 'Thumbs Middle', value: this.props.thumbs[1]},
        {choice: 'Thumbs Down', value: this.props.thumbs[2]}
      ];
    } else if (this.props.questionType === 'YES_NO') {
      var graphData = [
        {choice: 'Yes', value: this.props.yesNo[0]},
        {choice: 'No', value: this.props.yesNo[1]}
      ];
    } else if (this.props.questionType === 'SCALE') {
      var graphData = [
        {choice: 1, value: this.props.scale[0]},
        {choice: 2, value: this.props.scale[1]},
        {choice: 3, value: this.props.scale[2]},
        {choice: 4, value: this.props.scale[3]},
        {choice: 5, value: this.props.scale[4]},
        {choice: 6, value: this.props.scale[5]},
        {choice: 7, value: this.props.scale[6]},
        {choice: 8, value: this.props.scale[7]},
        {choice: 9, value: this.props.scale[8]},
        {choice: 10, value: this.props.scale[9]}
      ];
    } else if (this.props.questionType === 'MULTIPLE_CHOICE') {
      const context = this;
      var graphData = [];
      this.props.choices.map(function (choice, i) {
        context.props.multipleChoice[i] = context.props.multipleChoice[i] || 0;
        graphData.push({choice: choice, value: context.props.multipleChoice[i]});
      });
    }
    return (
      <div className={styles.card}>
        <Visualization data={graphData} questionType={this.props.questionType} choices={this.props.choices} />
        <button className={styles.primaryButton} onClick={this.handleClick}>{this.state.buttonName}</button>
      </div>
    );
  }
}

export default Results;
