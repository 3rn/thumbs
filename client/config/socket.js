import io from 'socket.io-client';
const socket = io('http://thumbsup.us-west-1.elasticbeanstalk.com/');

export default socket;

