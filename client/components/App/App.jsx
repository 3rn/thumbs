import React from 'react';
import Nav from '../Nav/Nav';


class App extends React.Component {
  render() {
    return (
      <div className="">
        
        { this.props.children }
        <Nav />
      </div>
    );
  }
}

export default App;
