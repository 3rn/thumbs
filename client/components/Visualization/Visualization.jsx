import React from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
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

  showVis() {
    if (this.state.selectedVisual === 'bar') {
      return (
        <div className={styles.visWrapper}>
          <BarChart data={this.props.data('bar')} questionType={this.props.questionType} choices={this.props.choices} />
        </div>
        );
    } else if (this.state.selectedVisual === 'pie') {
      return (
        <div className={styles.visWrapper}>
          <PieChart data={this.props.data('pie')} questionType={this.props.questionType} choices={this.props.choices} />
        </div>
        );
    }
  }

  handleClick(e) {
    this.setState({selectedVisual: e.target.value});
  }

  render() {
    return (
      <div>
        <Selector click={this.handleClick} />
        { this.showVis() }
      </div>
    );
  }
}
