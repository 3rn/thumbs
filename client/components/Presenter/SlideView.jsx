import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { browserHistory } from 'react-router';
import styles from '../../styles/pages/_SlideView';

class SlideView extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      'slideId': props.params.slideId,
      'slides': {},
      'lecture': {}
    };

    this.checkSlidesRoom = this.checkSlidesRoom.bind(this);
    this.getLecture = this.getLecture.bind(this);
  }

  componentWillMount() {
    this.checkSlidesRoom();
  }

  checkSlidesRoom() {
    const context = this;
    return axios.get(`/db/s/${context.props.params.slideId}`)
    .then(function (response) {
      if (response.data.length === 0) {
        browserHistory.push('/');
      } else {
        context.setState({slides: response.data[0]});
        context.getLecture();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  getLecture() {
    const context = this;
    axios.get(`/db/l/${this.state.slides.lecture_id}`)
    .then(function (response) {
      if (response) {
        context.setState({
          lecture: {
            'title': response.data[0].title,
            'created_at': (new Date(response.data[0].created_at)).toUTCString(),
            'updated_at': (new Date(response.data[0].updated_at)).toUTCString(),
            'description': response.data[0].description
          }
        });
        console.log('LectureView: lecture ', context.state.lecture);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.label}>Lecture Info</div>
          <h1>{this.state.lecture.title}</h1>
          <div className={styles.details}>
            <strong>Last Updated: </strong>{this.state.lecture.updated_at}
          </div>

          <div className={styles.description}>
            {this.state.lecture.description}
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.label}>Slides</div>
        </div>
      </div>
    );
  }
}

export default SlideView;
