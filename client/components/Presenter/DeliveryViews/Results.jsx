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
      } else if (graphType === 'radar') {
        return dataArray.map((entry) => ({label: entry[0], values: entry[1]}));
      }
    };
  }

  render() {
    if (this.props.questionType === 'THUMBS') {
      var graphData = this.formatData([
        ['Up', this.props.responses[0]],
        ['Middle', this.props.responses[1]],
        ['Down', this.props.responses[2]]
      ]);
    } else if (this.props.questionType === 'YES_NO') {
      var graphData = this.formatData([
        ['Yes', this.props.responses[0]],
        ['No', this.props.responses[1]]
      ]);
    } else if (this.props.questionType === 'SCALE') {
      var graphData = this.formatData(this.props.responses.map((element, index) => {
        return [String(index + 1), element];
      }));
    } else if (this.props.questionType === 'MULTIPLE_CHOICE') {
      const context = this;
      var graphData = [];
      this.props.choices.map(function (choice, i) {
        context.props.responses[i] = context.props.responses[i] || 0;
        graphData.push([choice, context.props.responses[i]]);
      });

      graphData = this.formatData(graphData);
    }
    return (
      <div>
        <Visualization data={graphData} questionType={this.props.questionType} />
      </div>
    );
  }
}

export default Results;
