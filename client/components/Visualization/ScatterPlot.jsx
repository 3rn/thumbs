import React from 'react';
import { VictoryChart, VictoryAxis, VictoryScatter, VictoryTheme } from 'victory';

export default class ScatterPlot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <VictoryChart>
          <VictoryAxis
            />
          <VictoryAxis
            dependentAxis
            />
          <VictoryScatter
          data={this.props.data}
          x="choice"
          y="value"
        />
    </VictoryChart>
      </div>
    );
  }
}
