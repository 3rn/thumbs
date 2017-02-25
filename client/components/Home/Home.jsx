import React from 'react';
import styles from '../../styles/pages/_Home';

import { Link, browserHistory } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      validRoom: false,
      roomCode: ''
    }

    this.onEnterRoomChange = this.onEnterRoomChange.bind(this);
    this.onEnterRoomSubmit = this.onEnterRoomSubmit.bind(this);
  }
          // <ul>
          //   <li><Link to="/participant">Participant View</Link></li>
          //   <li><Link to="/presenter">Presenter View</Link></li>
          // </ul>


  enterRoom () {

  }

  onEnterRoomChange(e) {
    let roomCode = e.target.value.toUpperCase();
  
    if (roomCode.length === 4 && roomCode === 'ASDF') {
      this.setState({'validRoom': true, 'roomCode': roomCode });
    } else {
      this.setState({'validRoom': false});
    }

  }

  onEnterRoomSubmit(e) {
    browserHistory.push('/part/' + this.state.roomCode );
    e.preventDefault();
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div>

          <div className={styles.container}>
            <div className={styles.link}>

              <form id="enterRoom"
                onSubmit={this.onEnterRoomSubmit}
              >
                <input 
                  onChange={this.onEnterRoomChange}
                  
                  type="text" 
                  placeholder="Enter Room Code: ABCD"
                  maxLength="4"
                  // pattern=".{4,}([a-zA-Z])\w\S+"
                  // pattern=".{4,}"
                  required
                ></input>
                <button className={styles.enterRoom}>
                    <span className={(this.state.validRoom)?styles.validRoom:''} >
                    <i className="fa fa-sign-in" aria-hidden="true"></i>
                    </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
