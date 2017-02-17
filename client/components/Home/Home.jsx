import React from 'react';
import io from 'socket.io-client';
let socket = io('http://localhost:8000');

import styles from './Home.scss';

class Home extends React.Component {

  render() {
    return (
      <div className={styles.home}>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
