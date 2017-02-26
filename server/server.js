const express = require('express');
const app = express();

const config = require('./server.config.js');
const dbRoutes = require('./dbRoutes/dbRoutes.js');
const helpers = require('./middleware/helpers.js')(app);

app.use('/db', dbRoutes);

const webpack = require('./middleware/webpack.js')(app, express);
const server = app.listen(config.PORT, config.HOST, () => {
  console.log('Thumbs on at http://%s:%s', config.HOST, config.PORT);
});

const io = require('./middleware/socket.js')(server);
