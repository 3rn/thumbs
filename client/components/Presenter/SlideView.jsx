import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { browserHistory } from 'react-router';
import Loading from '../Participant/Loading';

import styles from '../../styles/pages/_SlideView';

import socket from '../../config/socket';

class SlideView extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      'slideId': props.params.slideId,
      'slidesMetaData': {},
      'lecture': {},
      'slides': [],
      'url': ''
    };

    this.checkSlidesRoom = this.checkSlidesRoom.bind(this);
    this.getLecture = this.getLecture.bind(this);

    this.getSlides = this.getSlides.bind(this);

  }

  componentDidMount() {
    this.checkSlidesRoom();
    
    socket.emit('joinPresentation', {room: 'FRED'});

    socket.on('changeSlide', (payload) => {
      document.getElementsByClassName(`navigate-${payload.direction}`)[0].click();
    });
  }

  componentDidUpdate() {
    //check if Reveal initialize needed
    if (this.state.slides.length !== 0) {
      Reveal.initialize({
        transition: 'none',
        width: '1000',
        height: '1000'
      });
    }
  }

  checkSlidesRoom() {
    const context = this;
    return axios.get(`/db/s/${context.props.params.slideId}`)
    .then(function (response) {
      if (response.data.length === 0) {
        browserHistory.push('/');
      } else {
        context.setState({slidesMetaData: response.data[0]});
        context.getLecture();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  getLecture() {
    const context = this;
    axios.get(`/db/l/${this.state.slidesMetaData.lecture_id}`)
    .then(function (response) {
      if (response) {
        context.setState({
          lecture: {
            'title': response.data[0].title,
            'created_at': (new Date(response.data[0].created_at)).toUTCString(),
            'updated_at': (new Date(response.data[0].updated_at)).toUTCString(),
            'description': response.data[0].description
          },
          url: response.data[0].slide_url
        });
        console.log('SLIDE URL ', context.state.url);
        context.getSlides();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  getSlides() {
    var presentationId = this.state.url.split('/')[5];
    var context = this;
    gapi.client.slides.presentations.get({
      presentationId: presentationId
    }).then(function(response) {
      var presentation = response.result;
      var length = presentation.slides.length;
      var slideImageRequests = [];
      
      //initiate requests for slide images
      for (var i = 0; i < length; i++) {
        var slide = presentation.slides[i];
        var id = slide.objectId;
        slideImageRequests.push(
          axios.get('https://docs.google.com/presentation/d/' + presentationId + '/export/svg?id=' + presentationId + '&pageid=' + id,
            {
              params: {
                alt: 'media'
              },
              responseType: 'blob'
            }
          )
        );
      }
      //unpack slide image requests
      axios.all(slideImageRequests)
      .then(function(responses) {
        var slides = [];
        for (var i = 0; i < responses.length; i++) {
          var response = responses[i];
          var src = window.URL.createObjectURL(response.data);

          var newSlide = (
            <section key={i}>
              <img src={src} />
            </section>
          );
          slides.push(newSlide);
        }
        context.setState({slides: slides});
      });
    });
  }

  render() {
    var slides = (
      <div className={styles.slidesWrapper}>
        <div className={'reveal'}>
          <div className={styles.slides + ' slides '}>
            {this.state.slides}
            
          </div>  
          
        </div>
        <div className={styles.slidesControl}>
          
        </div>
      </div>
    );

    var loading = (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h1>Loading Your Slides</h1>
          <Loading />
        </div>
      </div>
    );

    return (
      <div>
        {this.state.slides.length === 0 ? loading : slides}
      </div>
    );
  }
}

export default SlideView;
