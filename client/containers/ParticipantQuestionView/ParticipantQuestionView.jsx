import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { voteThumbsUp } from '../../actions/thumbsActions.js';
import ThumbsCheckVis from '../../components/ThumbsCheckVis/ThumbsCheckVis.jsx';

import io from 'socket.io-client';
let socket = io('http://localhost:8000');

class ParticipantQuestionView extends React.Component {
  constructor(props) {
    super(props);

    const voteThumbsUp = this.props.voteThumbsUp;

    socket.on('upVote', function() {
      voteThumbsUp();
    });
  }

  upVote(e) {
    socket.emit('upVote');
  }

  render() {
    return (
      <div>
        <h1>ParticipantQuestionView</h1>
          <div>
            <button onClick={this.upVote.bind(this)} value="1"> Thumbs Up </button> <span> { this.props.upCount } </span>
            <ThumbsCheckVis data={this.props.upCount} />
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    upCount: state.thumbs.upCount
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ voteThumbsUp }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantQuestionView);

// REFACTOR ABOVE
//   constructor(props) {
//     super(props);
//     this.state = {
//       tallies: [0, 0, 0]
//     };
//     socket.on('vote', (payload) => {
//       console.log(payload);
//       var newTallies = this.state.tallies.slice(0);
//       var index = parseInt(payload.option) - 1;
//       newTallies[index] += 1;
//       this.setState({
//         tallies: newTallies
//       });
//     });
//   }
//
//   render() {
//
//     const handlePress = (e) => {
//       socket.emit('vote', { option: e.target.value});
//
//     };
//
//     return (
//       <div className={styles.home}>
//         <div>
//           <h1>Home</h1>
//         </div>
//         <div>
//           <button value="1" onClick={handlePress}> Thumbs 1 </button> <span> {this.state.tallies[0]} </span>
//         </div>
//         <div>
//           <button value="2" onClick={handlePress}> Thumbs 2 </button> <span> {this.state.tallies[1]} </span>
//         </div>
//         <div>
//           <button value="3" onClick={handlePress}> Thumbs 3 </button> <span> {this.state.tallies[2]} </span>
//         </div>
//       </div>
//     );
//   }
// }
