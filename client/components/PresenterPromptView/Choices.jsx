import React from 'react';

export default class Choices extends React.Component {
  constructor(props) {
    super(props);
  }

  renderChoices() {
    if (this.props.questionType === 'radio' || this.props.questionType === 'checkbox') {
      return this.props.choices.map(function(choice) {
        return (
          <li><input type='text' defaultValue={choice} /></li>
        );
      });
    }
  }

  render() {
    return (
      <ol type='A'>
        { this.renderChoices() }
      </ol>
    );
  }
}
