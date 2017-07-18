import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, VerticalBarSeries } from 'react-vis';
import styles from '../../styles/components/_barChart.scss';

export default class BarChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.barWrapper}>
        <XYPlot
          xType="ordinal"
          width={325}
          height={270}
        >
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
