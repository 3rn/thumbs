import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

export default class ThumbsCheckVis extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var data = [
      {thumb: 'Thumbs Up', value: this.props.data[0]},
      {thumb: 'Thumbs Middle', value: this.props.data[1]},
      {thumb: 'Thumbs Down', value: this.props.data[2]}
    ];

    return (
      <div>
        <h1>Results</h1>
        <VictoryChart>
          <VictoryAxis
          />
          <VictoryAxis
            dependentAxis
          />
          <VictoryBar
            data={data}
            x="thumb"
            y="value"
          />
        </VictoryChart>
      </div>
    );
  }
}