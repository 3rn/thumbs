import io from 'socket.io-client';

if (process.env.NODE_ENV === 'production') {
  const socket = io('http://thumbsup.us-west-1.elasticbeanstalk.com/');
} else {
  // for localhost developement, use:
  const socket = io('http://localhost:8000/');
}

export default socket;
