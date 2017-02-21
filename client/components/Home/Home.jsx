import React from 'react';
import styles from './Home.scss';
import { Link } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.home}>
        <div>
          <h1>Home</h1>
          <ul>
            <li><Link to="/participant">Participant View</Link></li>
            <li><Link to="/presenter">Presenter View</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;