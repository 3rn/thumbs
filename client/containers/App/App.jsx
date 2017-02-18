import React from 'react';

class App extends React.Component {

  handleEventClick(event) {
    let {dispatch} = this.props;
    dispatch(app.handleEventClick(event));
  }

  render() {
    return (
      <div className="">
        { this.props.children }
      </div>
    );
  }
}

export default App;
