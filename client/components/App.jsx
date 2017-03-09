import React from 'react';
import NavContainer from '../containers/NavContainer';
import Footer from './Footer';
import styles from '../styles/main';

class App extends React.Component {
  render() {
    return (
      <div className="">
        { this.props.children }
        <NavContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
