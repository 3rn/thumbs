import React from 'react';
import styles from '../../styles/pages/_Home';

import { Link } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
          // <ul>
          //   <li><Link to="/participant">Participant View</Link></li>
          //   <li><Link to="/presenter">Presenter View</Link></li>
          // </ul>

  render() {
    return (
      <div className={styles.wrapper}>
        <div>

          <div className={styles.container}>
            <div className={styles.link}>
              <input 
                type="text" 
                placeholder="Enter Room Code: ABCD"
                maxLength="4"
                // pattern="([a-zA-Z])\w\S+"
                required
              ></input>
              <button className={styles.enterRoom}>
                  <i className="fa fa-sign-in" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
