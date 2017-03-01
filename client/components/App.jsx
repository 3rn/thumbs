import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import styles from '../styles/main';

class App extends React.Component {
  render() {
    return (
      <div className="">
        { this.props.children }
        <Nav />
        <Footer />
      </div>
    );
  }
}

export default App;
