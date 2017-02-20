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
            <li><Link to="/pqv">Participant Question View</Link></li>
            <li><Link to="/pwv">Participant Waiting View</Link></li>
            <li><Link to="/ppv">Presenter Prompt View</Link></li>
            <li><Link to="/rv">Results View</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
