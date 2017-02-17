const express = require('express');
const app = express();
const config = require('./server.config.js');



// Middleware
const middleware = require('./middleware/middleware.js')(app, express);



// Start server
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
    console.log('mah fucking vote', payload);
  
  });

});
