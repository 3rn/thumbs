import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, VerticalBarSeries} from 'react-vis';

export default class BarChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <XYPlot
          xType="ordinal"
          width={450}
          height={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis tickLabelAngle={-30} />
          <YAxis />
          <VerticalBarSeries data={this.props.data} />
        </XYPlot>
      </div>
    );
  }
}
