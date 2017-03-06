import React from 'react';
import { Link } from 'react-router';

import styles from '../../styles/pages/_SlideView';

class SlideView extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      'slideId': props.params.slideId
    }

    this.getSlides = this.getSlides.bind(this);
  }

  getSlides() {
    console.log('Getting slides');
    //axios.get
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h1>My SlideViews</h1>
        </div>
      </div>
    );
  }
}

export default SlideView;
