const express = require('express');
const app = express();

const config = require('./server.config.js');
const helpers = require('./middleware/helpers.js')(app);

// Routes
const db = require('./routes/db.js');
app.use('/db', db);

const webpack = require('./middleware/webpack.js')(app, express);
// const server = app.listen(config.PORT, config.HOST, () => {
//   console.log('Thumbs on at http://%s:%s', config.HOST, config.PORT);
// });

const server = app.listen(8080);

const io = require('./middleware/socket.js')(server);
