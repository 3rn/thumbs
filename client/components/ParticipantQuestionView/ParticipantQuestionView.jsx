import React from 'react';
import socket from '../../config/socket';
import styles from '../../styles/pages/_ParticipantQuestionView';

class ParticipantQuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.showChoices = this.showChoices.bind(this);

    this.state = {
      value: 5
    };
  }

  handleClick(e) {
    socket.emit('vote', {
      room: this.props.room,
      option: e.target.value
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  showChoices() {
    const questionType = this.props.questionType;
    const handleClick = this.handleClick;
    if (this.props.questionType === 'yn') {
      return (
        <div>
          <button onClick={handleClick} value={1}>Yes</button>
          <button onClick={handleClick} value={2}>No</button>
        </div>
      );
    } else if (this.props.questionType === 'thumbs') {
      return (
        <div>
          <button onClick={handleClick} value={1}>Thumbs Up</button>
          <button onClick={handleClick} value={2}>Thumbs Middle</button>
          <button onClick={handleClick} value={3}>Thumbs Down</button>
        </div>
      );
    } else if (this.props.questionType === 'scale') {
      console.log('hit scale');
      return (
        <div>
          <pre>
            1
            <input
              type="range"
              min="0" max="10"
              defaultValue={this.state.value}
              onChange={this.handleChange.bind(this)}
              step="1"/>
            10
            <button onClick={handleClick}>Submit</button>
          </pre>
        </div>
      );
    } else if (this.props.questionType === 'textarea') {
      return (
        <div>
          <input type={questionType} onClick={handleClick} />
          <button onClick={handleClick}>Submit</button>
        </div>
      );
    } else {
      return this.props.choices.map(function (choice) {
        return (
          <div>
            <input type={questionType} name='choice' onClick={handleClick} /> { choice }
          </div>
        );
      });
    }
  }

  showSubmit() {
    if (this.props.questionType === 'radio' || this.props.questionType === 'checkbox') {
      return (
        <div>
          <button onClick={this.handleClick}>Submit</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h1>ParticipantQuestionView</h1>
        { this.showChoices() }
        { this.showSubmit() }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    thumbsCount: state.thumbs
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ vote }, dispatch);

export default ParticipantQuestionView;
