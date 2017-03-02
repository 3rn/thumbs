const express = require('express');
const app = express();

const config = require('./server.config.js');
const helpers = require('./middleware/helpers.js')(app);

// console.log('config.PORT: ', config.PORT);
// console.log('typeof config.PORT: ', typeof config.PORT);

// Routes
const db = require('./routes/db.js');
app.use('/db', db);

const webpack = require('./middleware/webpack.js')(app, express);
const server = app.listen(config.PORT, () => {
  console.log('Thumbs on at http://localhost:8000');
});

const io = require('./middleware/socket.js')(server);
