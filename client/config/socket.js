import io from 'socket.io-client';
const socket = io('http://thumbsup.us-west-1.elasticbeanstalk.com/');

// for localhost developement, use:
// const socket = io('http://localhost:8000/');

export default socket;
