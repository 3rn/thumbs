import React from 'react';
import Visualization from '../../Visualization/Visualization';
import socket from '../../../config/socket';

import styles from '../../../styles/pages/_Results';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.questionType === 'THUMBS') {
      var graphData = [
        {x: 'Up', y: this.props.thumbs[0]},
        {x: 'Middle', y: this.props.thumbs[1]},
        {x: 'Down', y: this.props.thumbs[2]}
      ];
    } else if (this.props.questionType === 'YES_NO') {
      var graphData = [
        {x: 'Yes', y: this.props.yesNo[0]},
        {x: 'No', y: this.props.yesNo[1]}
      ];
    } else if (this.props.questionType === 'SCALE') {
      var graphData = [
        {x: '1', y: this.props.scale[0]},
        {x: '2', y: this.props.scale[1]},
        {x: '3', y: this.props.scale[2]},
        {x: '4', y: this.props.scale[3]},
        {x: '5', y: this.props.scale[4]},
        {x: '6', y: this.props.scale[5]},
        {x: '7', y: this.props.scale[6]},
        {x: '8', y: this.props.scale[7]},
        {x: '9', y: this.props.scale[8]},
        {x: '10', y: this.props.scale[9]}
      ];
    } else if (this.props.questionType === 'MULTIPLE_CHOICE') {
      const context = this;
      var graphData = [];
      this.props.choices.map(function (choice, i) {
        context.props.multipleChoice[i] = context.props.multipleChoice[i] || 0;
        graphData.push({x: choice, y: context.props.multipleChoice[i]});
      });
    }
    return (
      <div>
        <Visualization data={graphData} questionType={this.props.questionType} choices={this.props.choices} />
      </div>
    );
  }
}

export default Results;
