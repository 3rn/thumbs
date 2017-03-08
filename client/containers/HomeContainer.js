import React from 'react';
import styles from '../styles/pages/_Home';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login } from '../actions/loginActions.js';

// Client ID and API key from the Developer Console
var CLIENT_ID = '171247937343-lpo93i31pue6rsmna75k1m4piqfo06bk.apps.googleusercontent.com';

// Object of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = [
  'https://slides.googleapis.com/$discovery/rest?version=v1',
  'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'
];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://www.googleapis.com/auth/presentations.readonly https://www.googleapis.com/auth/drive.metadata.readonly';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      validRoom: false,
      roomCode: '',
      availableRooms: []
    };

    this.onEnterRoomChange = this.onEnterRoomChange.bind(this);
    this.onEnterRoomSubmit = this.onEnterRoomSubmit.bind(this);
    this.checkRoom = this.checkRoom.bind(this);
    this.oauthSuccess = this.oauthSuccess.bind(this);
    this.oauthError = this.oauthError.bind(this);
  }

  checkRoom(roomCodeAttempt) {
    const context = this;
    return axios.get(`/db/c/${roomCodeAttempt}`)
    .then(function (response) {
      if (response.data.length !== 0) {
        context.setState({'roomCode': roomCodeAttempt, 'validRoom': true});
      } else {
        context.setState({'validRoom': false});
      }

    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onEnterRoomChange(e) {
    let roomCodeAttempt = e.target.value.toUpperCase();
    
    if (roomCodeAttempt.length === 4) {
      this.checkRoom(roomCodeAttempt);
    } else {
      // attempt isn't 4 letters
      this.setState({'validRoom': false});
    }
  }

  onEnterRoomSubmit(e) {
    this.state.validRoom && browserHistory.push('/r/' + this.state.roomCode);
    e.preventDefault();
  }

  oauthSuccess (response) {
    var info = response.getBasicProfile();
    this.props.login({
      name: info.ofa,
      email: info.U3
    });

    //iniialize access to drive and slide api
    gapi.client.init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    });

    browserHistory.push('/u');
  }

  oauthError(response) {
    console.error(response);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <form className={styles.enterRoomInput} onSubmit={this.onEnterRoomSubmit}>
            <div className={styles.label}>Participant</div>
            <input 
              onChange={this.onEnterRoomChange}
              type="text" 
              placeholder="Enter Room Code: ABCD"
              maxLength="4"
              // pattern=".{4,}([a-zA-Z])\w\S+"
              // pattern=".{4,}"
              required
            >
            </input>
            <button className={styles.enterRoom}>
                <span className={(this.state.validRoom) ? styles.validRoom : ''} >
                <i className="fa fa-sign-in" aria-hidden="true"></i>
                </span>
            </button> 
          </form>
        </div>
        <div className={styles.card}>
          <div className={styles.label}>Presenter</div>
          <GoogleLogin
            clientId="171247937343-lpo93i31pue6rsmna75k1m4piqfo06bk.apps.googleusercontent.com"
            buttonText="Presenter Login"
            onSuccess={this.oauthSuccess}
            onFailure={this.oauthError}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  login
}, dispatch);

export default connect(null, mapDispatchToProps)(HomeContainer);
