const express = require('express');
const app = express();

const config = require('./server.config.js');
const dbRoutes = require('./dbRoutes/dbRoutes.js');

app.use('/db', dbRoutes);

const middleware = require('./middleware/middleware.js')(app, express);
const server = app.listen(config.PORT, config.HOST, () => {
  console.log('Thumbs on at http://%s:%s', config.HOST, config.PORT);
});

const io = require('./middleware/socket.js')(server);
