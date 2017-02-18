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
          <ul>
            <li><a href="/pqv">Participant Question View</a></li>
            <li><a href="/pwv">Participant Waiting View</a></li>
            <li><a href="/ppv">Presenter Prompt View</a></li>
            <li><a href="/rv">Results View</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
