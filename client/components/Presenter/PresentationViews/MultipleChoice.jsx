import React from 'react';

export default class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChoice: ''
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.onChoiceInputChange = this.onChoiceInputChange.bind(this);
  }

  numToLetter(n) {
    return String.fromCharCode(65 + n); // A = 65
  }

  handleAdd() {
    this.props.handleMultipleChoiceAdd(this.state.currentChoice);
    this.setState({
      currentChoice: ''
    });
  }

  onChoiceInputChange(e) {
    this.setState({
      currentChoice: e.target.value
    });
  }

  render() {
    return (
      <div>
        {
          this.props.choices.map((choice, i) => (
            <div key={i}>{this.numToLetter(i) + '.' + ' ' + choice} </div>
          ))
        }
        <div>
          {this.numToLetter(this.props.choices.length) + '.' + ' '}
          <input onChange={this.onChoiceInputChange} value={this.state.currentChoice} />
          <button onClick={this.handleAdd}> + </button>
        </div>
      </div>
    );
  }
}