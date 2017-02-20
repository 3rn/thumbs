import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

class ThumbsCheckVis extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var data = {thumb: '👍', value: this.props.data};
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
            data={[data]}
            x="thumb"
            y="value"
          />
        </VictoryChart>
      </div>
    );
  }
}

export default ThumbsCheckVis;