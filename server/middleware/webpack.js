'use strict';

const path = require('path');
const config = require('../server.config.js');

// The following Webpack middleware allows for hot reloading on the client when in development.
// No refresh or restart needed. It saves state in memory, and it's awesome. Don't break it.
// If you'd like to learn more:
// https://github.com/webpack/webpack-dev-middleware
// https://github.com/glenjamin/webpack-hot-middleware
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config.js');

const compiler = webpack(webpackConfig);
const middleware = webpackMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

// Build directory is where the bundle file will be placed
const BUILD_DIR = path.join(__dirname, '/../../', 'dist/');

module.exports = function(app, express) {
  

  switch(config.env) {

    case config.prod: 
      // Production environment
      app.use(express.static(BUILD_DIR));
        app.get('*', function response(req, res) {
          res.sendFile(path.join(BUILD_DIR, 'index.html'));
        });

      break;

    default:
    // Dev environment
      app.use(middleware);
      app.use(webpackHotMiddleware(compiler));
      app.get('*', function response(req, res) {
        res.write(middleware.fileSystem.readFileSync(path.join(BUILD_DIR, 'index.html')));
        res.end();
      });

      break;
  }
  
};
