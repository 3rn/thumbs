module.exports = function(server) {
  const io = require('socket.io')(server);

  io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('vote', (payload) => {
      io.to(payload.room).emit('vote', payload);
    });

    socket.on('participantQuestion', (payload) => {
      io.to(payload.room).emit('participantQuestion', payload);
    });

    socket.on('startVote', (payload) => {
      io.to(payload.room).emit('startVote', payload);
    });

    socket.on('endVote', (payload) => {
      io.to(payload.room).emit('endVote', payload);
    });

    socket.on('joinPresentation', (payload) => {
      socket.join(payload.room);
      io.to(payload.room).emit('room');
    });
  });

  return io;
};
