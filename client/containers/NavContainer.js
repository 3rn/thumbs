import React from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from '../styles/components/_nav';

import { login } from '../actions/loginActions.js';

// Client ID and API key from the Developer Console
var CLIENT_ID = '171247937343-lpo93i31pue6rsmna75k1m4piqfo06bk.apps.googleusercontent.com';

// Object of API discovery doc URLs for APIs used
var DISCOVERY_DOCS = [
  'https://slides.googleapis.com/$discovery/rest?version=v1',
  'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'
];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'profile https://www.googleapis.com/auth/presentations.readonly https://www.googleapis.com/auth/drive.metadata.readonly';

class NavContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenuOptions: false
    };

    this.openMenuClickHandler = this.openMenuClickHandler.bind(this);
    this.closeMenuClickHandler = this.closeMenuClickHandler.bind(this);
    this.initClient = this.initClient.bind(this);
    this.updateSigninStatus = this.updateSigninStatus.bind(this);
  }

  componentWillMount() {
    gapi.load('client:auth2', this.initClient);
  }

  initClient() {
    var context = this;
    gapi.client.init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    }).then(function () {
      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().signOut(); //sign out any existing users on app start.
      gapi.auth2.getAuthInstance().isSignedIn.listen(context.updateSigninStatus);
    });
  }

  handleAuthClick(event) {
    //TODO check if user already logged in and skip sign in modal
    gapi.auth2.getAuthInstance().signIn();
  }

  updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      var profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
      this.props.login({
        name: profile.getGivenName(), //first name
        email: profile.getEmail()
      });
      browserHistory.push('/u');
    } else {
    }
  }

  openMenuClickHandler() {
    console.log("Open menu");
    this.setState({displayMenuOptions: !this.state.displayMenuOptions});
  }

  closeMenuClickHandler() {
    console.log("Open menu");
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
            <h1 className={styles.login} onClick={this.handleAuthClick}>
              <i className="fa fa-key" aria-hidden="true"></i>
            </h1>
          </Link>
        </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  login
}, dispatch);

export default connect(null, mapDispatchToProps)(NavContainer);
