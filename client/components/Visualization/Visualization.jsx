import React from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
import RadarChart from './RadarChart';
import Selector from './Selector';

import styles from '../../styles/components/_visualizations';

export default class Visualization extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedVisual: 'bar'
    };

    this.showVis = this.showVis.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {
    this.setState({selectedVisual: e.target.value});
  }

  showVis() {
    if (this.state.selectedVisual === 'bar') {
      return <BarChart data={this.props.data('bar')} />;
    } else if (this.state.selectedVisual === 'pie') {
      return <PieChart data={this.props.data('pie')} />;
    } else if (this.state.selectedVisual === 'radar') {
      return <RadarChart data={this.props.data('radar')} />;
    }
  }

  render() {
    return (
      <div>
        <Selector click={this.handleClick} />
        <div className={styles.visWrapper}>
          { this.showVis() }
        </div>
      </div>
    );
  }
}
