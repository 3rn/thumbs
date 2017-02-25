import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';


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
