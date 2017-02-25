import React from 'react';
import { Link } from 'react-router';

import styles from '../../styles/pages/_Presentations';


export default class Presentations extends React.Component {
  constructor(props) {
    debugger;
    super(props);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h1>My Presentations</h1>
          <Link to="/presentationQuestions"><h2> Test Presentation </h2> </Link>
      </div>
    );
  }
}