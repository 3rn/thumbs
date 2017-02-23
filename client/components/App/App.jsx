import React from 'react';
import Nav from '../Nav/Nav';


class App extends React.Component {
  render() {
    return (
      <div className="">
        <Nav />
        { this.props.children }
      </div>
    );
  }
}

export default App;
