const express = require('express');
const app = express();
const config = require('./server.config.js');



// Middleware
const middleware = require('./middleware/middleware.js')(app, express);



// Start server
app.listen(config.PORT, config.HOST, () => {  
  console.log('Thumbs on at http://%s:%s', config.HOST, config.PORT);
});
