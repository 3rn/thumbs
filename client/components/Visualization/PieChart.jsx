import React from 'react';
import {RadialChart} from 'react-vis';

export default class PieChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RadialChart
          innerRadius={80}
          radius={140}
          data={this.props.data}
          showLabels
          width={450}
          height={300}
        />
      </div>
    );
  }
}
