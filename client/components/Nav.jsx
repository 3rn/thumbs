import React from 'react';
import { Link } from 'react-router';

import styles from '../styles/components/_nav';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenuOptions: false
    }

    this.openMenuClickHandler = this.openMenuClickHandler.bind(this);
    this.closeMenuClickHandler = this.closeMenuClickHandler.bind(this);
  }

  openMenuClickHandler() {
    this.setState({displayMenuOptions: !this.state.displayMenuOptions});
  }

  closeMenuClickHandler() {
    this.setState({displayMenuOptions: false});
  }

  render() {

    return (
        <nav>
          <button onClick={this.openMenuClickHandler}>
            <span className={styles.menu}>
              <h1 className={this.state.displayMenuOptions ? 
                styles.closeMenuOptions : styles.openMenuOptions}>
                <i className="fa fa-bars" aria-hidden="true"></i>
              </h1>
              <h1 className={this.state.displayMenuOptions ? 
                styles.openMenuOptions : styles.closeMenuOptions}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </h1>
            </span>
          </button>

          <div 
            onClick={this.openMenuClickHandler}
            className={this.state.displayMenuOptions ? 
            styles.openMenuOptions : styles.closeMenuOptions}>
            <div className={styles.menuBackground}>
              <div className={styles.card} onClick={this.openMenuClickHandler}>
                <Link to="/">
                  <div className={styles.menuOption}>Home</div>
                </Link>
              </div>
              <div className={styles.card} onClick={this.openMenuClickHandler}>
                <Link to="/u">
                  <div className={styles.menuOption}>Dashboard</div>
                </Link>
              </div>
            </div>  
          </div>

          <Link to="/">
            <h1 className={styles.logo}>thumbs</h1>
          </Link>

          <Link to="/"
            onClick={this.closeMenuClickHandler}
            >
            <h1 className={styles.login}>
              <i className="fa fa-key" aria-hidden="true"></i>
            </h1>
          </Link>

          
        </nav>
    );
  }
}


export default Nav;
