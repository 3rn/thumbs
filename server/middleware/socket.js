module.exports = function(server) {
  const io = require('socket.io')(server);

  io.on('connection', (socket) => {
    var room;
    console.log('a user connected');

    socket.on('disconnect', () => {
      if (io.sockets.adapter.rooms[room]) {
        io.to(room).emit('roomCount', io.sockets.adapter.rooms[room].length);
      }
      console.log('user disconnected');
    });

    socket.on('vote', (payload) => {
      io.to(payload.room).emit('vote', payload);
    });

    socket.on('participantConfused', (payload) => {
      io.to(payload.room).emit('participantConfused', payload);
    });

    socket.on('startVote', (payload) => {
      io.to(payload.room).emit('startVote', payload);
    });

    socket.on('endVote', (payload) => {
      io.to(payload.room).emit('endVote', payload);
    });

    socket.on('newVote', (payload) => {
      io.to(payload.room).emit('newVote', payload);
    });

    socket.on('joinPresentation', (payload) => {
      room = payload.room;
      socket.join(room);
      console.log('room join request');
      if (io.sockets.adapter.rooms[room]) {
        io.to(room).emit('roomCount', io.sockets.adapter.rooms[room].length);
      }
    });

    socket.on('changeSlide', (payload) => {
      io.to(payload.room).emit('changeSlide', payload);
    });

  });

  return io;
};
