import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import Loading from '../components/Participant/Loading';
import Results from '../components/Presenter/DeliveryViews/Results';
import Modal from '../components/Modal';
import { updateVoteStatus, sendQuestion } from '../actions/presenterActions';
import { response } from '../actions/participantActions';
import styles from '../styles/pages/_SlideView.scss';
import socket from '../config/socket';

class SlideViewContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slideId: props.params.slideId,
      slidesMetaData: {},
      lecture: {},
      slides: [],
      url: '',
      open: true,
    };

    this.checkSlidesRoom = this.checkSlidesRoom.bind(this);
    this.getLecture = this.getLecture.bind(this);
    this.getSlides = this.getSlides.bind(this);

    socket.emit('joinPresentation', { room: 'FRED' });

    socket.on('vote', (payload) => {
      this.props.response(payload.questionType, payload.value);
    });

    socket.on('startVote', (payload) => {
      this.props.sendQuestion(payload.questionTitle, payload.questionType, payload.choices);
      this.props.updateVoteStatus('IN_PROGRESS');
    });

    socket.on('endVote', (payload) => {
      this.props.updateVoteStatus('ENDED');
    });

    socket.on('newVote', (payload) => {
      this.props.updateVoteStatus('WAITING');
    });

    socket.on('changeSlide', (payload) => {
      document.getElementsByClassName(`navigate-${payload.direction}`)[0].click();
    });
  }

  componentDidMount() {
    this.checkSlidesRoom();
  }

  componentDidUpdate() {
    // check if Reveal initialize needed
    if (this.state.slides.length !== 0) {
      Reveal.initialize({
        transition: 'none',
        width: '1000',
        height: '1000',
      });
    }
  }

  checkSlidesRoom() {
    const context = this;
    return axios.get(`/db/s/${context.props.params.slideId}`)
      .then((response) => {
        if (response.data.length === 0) {
          browserHistory.push('/');
        } else {
          context.setState({ slidesMetaData: response.data[0] });
          context.getLecture();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getLecture() {
    const context = this;
    axios.get(`/db/l/${this.state.slidesMetaData.lecture_id}`)
      .then((response) => {
        if (response) {
          context.setState({
            lecture: {
              title: response.data[0].title,
              created_at: (new Date(response.data[0].created_at)).toUTCString(),
              updated_at: (new Date(response.data[0].updated_at)).toUTCString(),
              description: response.data[0].description,
            },
            url: response.data[0].slide_url,
          });
          console.log('SLIDE URL ', context.state.url);
          context.getSlides();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getSlides() {
    const presentationId = this.state.url.split('/')[5];
    const context = this;
    gapi.client.slides.presentations.get({
      presentationId: presentationId,
    }).then((response) => {
      const presentation = response.result;
      const length = presentation.slides.length;
      const slideImageRequests = [];

      // initiate requests for slide images
      for (let i = 0; i < length; i++) {
        const slide = presentation.slides[i];
        const id = slide.objectId;
        slideImageRequests.push(
          axios.get('https://docs.google.com/presentation/d/' + presentationId + '/export/svg?id=' + presentationId + '&pageid=' + id,
            {
              params: {
                alt: 'media',
              },
              responseType: 'blob',
            },
          ),
        );
      }
      // unpack slide image requests
      axios.all(slideImageRequests)
        .then((responses) => {
          const slides = [];
          for (let i = 0; i < responses.length; i++) {
            const response = responses[i];
            const src = window.URL.createObjectURL(response.data);

            const newSlide = (
              <section key={i}>
                <img src={src} />
              </section>
            );
            slides.push(newSlide);
          }
          context.setState({ slides: slides });
        });
    });
  }

  display() {
    console.log('PROPS', this.state);
    if (this.props.questionType === 'THUMBS') {
      const responses = this.props.thumbs;
    } else if (this.props.questionType === 'YES_NO') {
      const responses = this.props.yesNo;
    } else if (this.props.questionType === 'MULTIPLE_CHOICE') {
      const responses = this.props.multipleChoice;
    } else if (this.props.questionType === 'SCALE') {
      const responses = this.props.scale;
    }

    const results = (
      <div className={this.state.open ? styles.open : styles.close}>
        <div className={styles.modalBackground}>
          <div className={styles.wrapper}>
            <div className={styles.modal}>
              <div className={styles.label}>Question Title</div>
              <h4>{ this.props.questionTitle || 'Quick Check' }</h4>
              <Results
                questionType={this.props.questionType}
                questionTitle={this.props.questionTitle}
                choices={this.props.choices}
                responses={responses}
                view="SlideView"
              />
            </div>
          </div>
        </div>
      </div>
    );

    if (this.props.voteStatus !== 'WAITING') {
      return results;
    }
  }

  render() {
    const loading = (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h2>Loading Your Slides...</h2>
          <Loading />
        </div>
      </div>
    );

    const slides = (
      <div className={styles.slidesWrapper}>
        <div className={'reveal'}>
          <div className={styles.slides + ' slides '}>
            {this.state.slides}
          </div>
        </div>
      </div>
    );

    return (
      <div>
        { this.state.slides.length === 0 ? loading : slides }
        { this.display() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    voteStatus: state.presenterReducer.status,
    questionTitle: state.presenterReducer.questionTitle,
    questionType: state.presenterReducer.questionType,
    choices: state.presenterReducer.choices,
    thumbs: state.participantReducer.thumbs,
    yesNo: state.participantReducer.yesNo,
    scale: state.participantReducer.scale,
    multipleChoice: state.participantReducer.multipleChoice,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  updateVoteStatus,
  sendQuestion,
  response,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SlideViewContainer);
