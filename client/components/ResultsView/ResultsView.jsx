import React from 'react';
import ThumbsCheckVis from '../ThumbsCheckVis/ThumbsCheckVis';

export default class ResultsView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var stopVoteButton = null;
    if (this.props.isPresenter) {
      stopVoteButton = <button onClick={this.props.endVote}> Stop Vote </button>;
    }
    return (
      <div>
        <h1>ResultsView</h1>
        <ThumbsCheckVis data={[0, 1, 2, 4]} />
        {stopVoteButton}
        {this.props.voteEnded ? 
          <button onClick={this.props.goToPromptView}> Send Another Question </button>
          : null
        }
      </div>
    );
  }
}
