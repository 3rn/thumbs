import React from 'react';
import styles from '../../../styles/pages/_ParticipantQuestionView';

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
      <div className={styles.card}>
        { this.mapChoices() }
      </div>
    );
  }
}
