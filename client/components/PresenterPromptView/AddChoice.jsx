import React from 'react';

export default class AddChoice extends React.Component {
  constructor(props) {
    super(props);
  }

  showAdd() {
    if (this.props.questionType === 'radio' || this.props.questionType === 'checkbox') {
      return (
        <div>
          <input type='text' name='choiceInput' onChange={this.props.change} placeholder='Enter option' />
          <button onClick={this.props.click}> + </button>
        </div>
      );
    }
  }

  render() {
    return (
      <ol type='A'>
        { this.showAdd() }
      </ol>
    );
  }
}
