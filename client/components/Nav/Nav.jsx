import React from 'react';
import { Link } from 'react-router';

import styles from '../../styles/components/_nav';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <nav>
          
          <Link to="/">
            <h1 className={styles.logo}>thumbs</h1>
          </Link>
          
          
        </nav>
    );
  }
}


export default Nav;
