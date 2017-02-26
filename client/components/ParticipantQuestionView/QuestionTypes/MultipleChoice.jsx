import React from 'react';

export default class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);
  }

  mapChoices() {
    const questionType = this.props.questionType;
    const click = this.props.click;
    
    return this.props.choices.map(function (choice) {
      return (
        <div>
          <input type={questionType} name='choice' onClick={click} /> { choice }
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        { this.mapChoices() }
      </div>
    );
  }
}
