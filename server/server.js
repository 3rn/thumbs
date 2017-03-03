const express = require('express');
const app = express();

const config = require('./server.config.js');
const helpers = require('./middleware/helpers.js')(app);

// Routes
const db = require('./routes/db.js');

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use('/db', db);

const webpack = require('./middleware/webpack.js')(app, express);
const server = app.listen(config.PORT, () => {
  console.log('Thumbs on at http://localhost:8000');
});

const io = require('./middleware/socket.js')(server);
