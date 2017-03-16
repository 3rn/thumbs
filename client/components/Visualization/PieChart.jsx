import React from 'react';
import {RadialChart} from 'react-vis';
import styles from '../../styles/components/_pieChart';

export default class PieChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.pieWrapper}>
        <RadialChart
          innerRadius={80}
          radius={140}
          data={this.props.data}
          showLabels
          width={325}
          height={330}
        />
      </div>
    );
  }
}
