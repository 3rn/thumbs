import React from 'react';
import styles from '../../../styles/components/_questionMCForm';

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
        <div className={styles.space}></div>
        {
          this.props.choices.map((choice, i) => (
            <div key={i}><strong>{this.numToLetter(i) + '. '}</strong>{choice}</div>
          ))
        }
        <div>
          <span className={styles.mcOptionTitle}>
            {this.numToLetter(this.props.choices.length) + '.' + ' '}
          </span>
          <input className={styles.mcOptionInput} onChange={this.onChoiceInputChange} value={this.state.currentChoice} />
          <button onClick={this.handleAdd}> 
            <i className={styles.plus + " fa fa-plus"} aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}
