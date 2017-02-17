import React from 'react';
// import styles from './App.css';
// import NavBar from '../NavBar/NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="">
        { this.props.children }
      </div>  
    );
  }
}

App.propTypes = {};

export default App;
