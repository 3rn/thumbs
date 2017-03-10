import React from 'react';
import Visualization from '../../Visualization/Visualization';
import socket from '../../../config/socket';

import styles from '../../../styles/pages/_Results';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  formatData(dataArray) {
    return (graphType) => {
      if (graphType === 'bar') {
        return dataArray.map((entry) => ({x: entry[0], y: entry[1]}));
      } else if (graphType === 'pie') {
        return dataArray.map((entry) => ({label: entry[0], angle: entry[1]}));
      }
    };
  }

  render() {
    if (this.props.questionType === 'THUMBS') {
      var graphData = this.formatData([
        ['Up', this.props.thumbs[0]],
        ['Middle', this.props.thumbs[1]],
        ['Down', this.props.thumbs[2]]
      ]);
    } else if (this.props.questionType === 'YES_NO') {
      var graphData = this.formatData([
        ['Yes', this.props.yesNo[0]],
        ['No', this.props.yesNo[1]]
      ]);
    } else if (this.props.questionType === 'SCALE') {
      var graphData = this.formatData(this.props.scale.map((element, index) => {
        return [String(index), element];
      }));
    } else if (this.props.questionType === 'MULTIPLE_CHOICE') {
      const context = this;
      var graphData = [];

      this.props.choices.map(function (choice, i) {
        context.props.multipleChoice[i] = context.props.multipleChoice[i] || 0;
        graphData.push([choice, context.props.multipleChoice[i]]);
      });

      graphData = this.formatData(graphData);
    }
    return (
      <div>
        <Visualization data={graphData} questionType={this.props.questionType} choices={this.props.choices} />
      </div>
    );
  }
}

export default Results;
