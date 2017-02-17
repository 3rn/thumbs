import React from 'react';
import io from 'socket.io-client';
let socket = io('http://localhost:8000');

import styles from './Home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    socket.on('vote', (payload) => {   
      console.log(payload);
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
          <button value="1" onClick={handlePress}> Thumbs 1 </button> <span> 0 </span>
        </div>
        <div>
          <button value="2" onClick={handlePress}> Thumbs 2 </button> <span> 0 </span>
        </div>
        <div>
          <button value="3" onClick={handlePress}> Thumbs 3 </button> <span> 0 </span>
        </div>
      </div>
    );
  }
}

export default Home;
