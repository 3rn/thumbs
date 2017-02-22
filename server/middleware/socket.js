

module.exports = function(server) {
  const io = require('socket.io')(server);

  io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('vote', (payload) => {
      io.emit('vote', payload);
    });

    socket.on('participantQuestion', (payload) => {
      io.emit('participantQuestion', payload);
    });

    socket.on('startVote', (payload) => {
      // io.emit('startVote', payload);
      socket.broadcast.emit('startVote', payload);
    });

    socket.on('endVote', (payload) => {
      // io.emit('startVote', payload);
      socket.broadcast.emit('endVote', payload);
    });

    socket.on('joinPresentation', (presentationCode) => {
      socket.join(presentationCode);
    })
  });

  return io;
};
