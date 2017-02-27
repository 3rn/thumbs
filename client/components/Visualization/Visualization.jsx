import React from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
import ScatterPlot from './ScatterPlot';
import Selector from './Selector';

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
      return <BarChart data={this.props.data} questionType={this.props.questionType} choices={this.props.choices} />;
    } else if (this.state.selectedVisual === 'pie') {
      return <PieChart data={this.props.data} questionType={this.props.questionType} choices={this.props.choices} />;
    } else if (this.state.selectedVisual === 'plot') {
      return <ScatterPlot data={this.props.data} questionType={this.props.questionType} choices={this.props.choices} />;
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