const express = require('express');
const app = express();
const config = require('./server.config.js');

const middleware = require('./middleware/middleware.js')(app, express);

const server = app.listen(config.PORT, config.HOST, () => {
  console.log('Thumbs on at http://%s:%s', config.HOST, config.PORT);
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('vote', (payload) => {
    io.emit('vote', payload);
  });

  socket.on('startVote', (payload) => {
    // io.emit('startVote', payload);
    socket.broadcast.emit('startVote', payload);
  });

  socket.on('endVote', (payload) => {
    // io.emit('startVote', payload);
    socket.broadcast.emit('endVote', payload);
  });
});