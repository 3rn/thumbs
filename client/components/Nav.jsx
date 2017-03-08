import React from 'react';
import { Link } from 'react-router';

import styles from '../styles/components/_nav';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <nav>
          <button>
            <span className={styles.menu}>
              <h1>
                <i className="fa fa-bars" aria-hidden="true"></i>
              </h1>
            </span>
          </button>
          <Link to="/">
            <h1 className={styles.logo}>thumbs</h1>
          </Link>

          <Link to="/">
            <h1 className={styles.login}>
              <i className="fa fa-key" aria-hidden="true"></i>
            </h1>
          </Link>


        </nav>
    );
  }
}


export default Nav;
