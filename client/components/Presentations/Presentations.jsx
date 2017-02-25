import React from 'react';
import { Link } from 'react-router';

export default class Presentations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>My Presentations</h1>
          <Link to="/presentationQuestions"><h2> Test Presentation </h2> </Link>
      </div>
    );
  }
}