import React from 'react';
import styles from '../../../styles/pages/_Response.scss';

export default class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.click = this.props.click.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  mapChoices() {
    const change = this.handleChange;
    return this.props.choices.map((choice, i) => {
      return (
        <div>
          <input type="radio" name="choice" onClick={change} value={i} /> { choice }
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        { this.mapChoices() }
        <button
          onClick={this.click}
          className={styles.selectButton}
          value={this.state.value}
        >
        Submit
        </button>
      </div>
    );
  }
}
