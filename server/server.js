const express = require('express');
const config = require('./server.config.js');
const db = require('./routes/db.js');

const app = express();

const helpers = require('./middleware/helpers.js')(app);
const webpack = require('./middleware/webpack.js')(app, express);

app.get('*.js', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use('/db', db);

const server = app.listen(config.PORT, () => {
  console.log('Thumbs on at http://localhost:8000');
});

const io = require('./middleware/socket.js')(server);
