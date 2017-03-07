import React from 'react';

class QuestionIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    if (this.props.questionType === 'THUMBS') {
      return <i className="fa fa-thumbs-up" aria-hidden="true"></i>;
    } else if (this.props.questionType === 'SCALE') {
      return <i className="fa fa-sliders" aria-hidden="true"></i>;
    } else if (this.props.questionType === 'YES_NO') {
      return <span>YES/NO</span>;
    } else if (this.props.questionType === 'OPEN_RESPONSE') {
      return <i className="fa fa-comment" aria-hidden="true"></i>;
    } else if (this.props.questionType === 'MULTIPLE_CHOICE') {
      return (
        <span>
          <i className="fa fa-circle-o" aria-hidden="true"></i> <i className="fa fa-circle" aria-hidden="true"></i> <i className="fa fa-circle-o" aria-hidden="true"></i>
        </span>
      );
    }
  }
}

export default QuestionIcon;
