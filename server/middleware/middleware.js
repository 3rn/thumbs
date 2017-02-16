'use strict';

const helpers = require('./helpers.js');
const webpack = require('./webpack.js');

module.exports = function(app, express) {
  // Add helper functions to app
  helpers(app);

  // Webpack middleware
  webpack(app, express);
};