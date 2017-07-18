import React from 'react';
import { Link } from 'react-router';
import styles from '../styles/components/_footer.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.content}>
          <a target="_blank" href="https://github.com/3rn/thumbs">
            All rights reserved Thumbs Incorporated &#169; 2017.
            <span className={styles.github}>
              <i className="fa fa-github" aria-hidden="true" />
            </span>
          </a>

        </div>
      </footer>
    );
  }
}

export default Footer;
