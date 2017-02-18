import React from 'react';
import styles from './Home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.home}>
        <div>
          <h1>Home</h1>
          <a href="/participant">Participant View</a>
        </div>
      </div>
    );
  }
}

export default Home;
