import React from 'react';
import styles from '../../../styles/components/_questionMCForm.scss';

export default class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChoice: '',
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.onChoiceInputChange = this.onChoiceInputChange.bind(this);
  }

  onChoiceInputChange(e) {
    this.setState({
      currentChoice: e.target.value
    });
  }

  handleAdd() {
    this.props.handleMultipleChoiceAdd(this.state.currentChoice);
    this.setState({
      currentChoice: '',
    });
  }

  numToLetter(n) {
    return String.fromCharCode(65 + n); // A = 65
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
