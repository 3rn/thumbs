import React from 'react';
import { Link } from 'react-router';

import styles from '../styles/components/_modal';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true
    }  

    this.closeClickHandler = this.closeClickHandler.bind(this);
  }

  closeClickHandler() {
    console.log("Closing modal");

    this.setState({open: false});
  }


  render() {

    return (
      <div className={this.state.open ? styles.open : styles.close}>
        <div className={styles.modalBackground}>
          <div className={styles.wrapper}>
            <div className={styles.modal}>
              <div className={styles.label}>
                Question Results
              </div>
              <span className={styles.closeButton}>
                <i className="fa fa-times" aria-hidden="true" onClick={this.closeClickHandler}></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Modal;
