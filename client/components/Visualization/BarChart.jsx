import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

export default class BarChart extends React.Component {
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
          <VictoryBar
            data={this.props.data}
            x="choice"
            y="value"
            horizontal={true}
            />
        </VictoryChart>
      </div>
    );
  }
}
