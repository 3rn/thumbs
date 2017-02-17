import React from 'react';
import io from 'socket.io-client';
let socket = io('http://localhost:8000');

import styles from './Home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tallies: [0, 0, 0]
    };
    socket.on('vote', (payload) => {   
      console.log(payload);
      var newTallies = this.state.tallies.slice(0);
      var index = parseInt(payload.option) - 1;
      newTallies[index] += 1;
      this.setState({
        tallies: newTallies
      });
    });
  }
  
  render() {
    
    const handlePress = (e) => {
      socket.emit('vote', { option: e.target.value});

    };
    
    return (
      <div className={styles.home}>
        <div>
          <h1>Home</h1>
        </div>
        <div>
          <button value="1" onClick={handlePress}> Thumbs 1 </button> <span> {this.state.tallies[0]} </span>
        </div>
        <div>
          <button value="2" onClick={handlePress}> Thumbs 2 </button> <span> {this.state.tallies[1]} </span>
        </div>
        <div>
          <button value="3" onClick={handlePress}> Thumbs 3 </button> <span> {this.state.tallies[2]} </span>
        </div>
      </div>
    );
  }
}

export default Home;
