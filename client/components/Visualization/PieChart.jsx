import React from 'react';
import { VictoryPie, VictoryTheme } from 'victory';

export default class PieChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <VictoryPie
            data={this.props.data}
            x="choice"
            y="value"
          />
      </div>
    );
  }
}
