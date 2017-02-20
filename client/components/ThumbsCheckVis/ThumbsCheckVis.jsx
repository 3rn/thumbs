import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

class ThumbsCheckVis extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var data = [
      {thumb: 1, value: this.props.data[0]},
      {thumb: 2, value: this.props.data[1]},
      {thumb: 3, value: this.props.data[2]}
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

export default ThumbsCheckVis;