import React from 'react';
import { Link } from 'react-router';

import styles from '../styles/components/_modal';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div className={styles.modalBackground}>
          <div className={styles.wrapper}>
            <div className={styles.modal}>
              <div className={styles.label}>
                Modal
              </div>
            </div>
          </div>
        </div>
    );
  }
}


export default Modal;
