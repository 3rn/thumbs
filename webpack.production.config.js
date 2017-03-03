'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: '[name]-[hash].css',
});

module.exports = {
  entry: [
    path.join(__dirname, 'client/main.jsx')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'client/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),

    // Optimization
    new webpack.DefinePlugin({ 
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),

    new ExtractTextPlugin('[name]-[hash].min.css'),

   // extractSass,
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        'presets': ['es2015', 'stage-0', 'react']
      }
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]!sass'),
      exclude: /node_modules|lib/
     // loader: extractSass.extract({
       
     //   // loaders: [
     //   //   'style',
     //   //   'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
     //   //   // 'resolve-url',
     //   //   'sass'

     //   //   ],
     //   loader: [{
     //     loader: 'css-loader'
     //   }, {
     //     loader: 'sass-loader'
     //   }],
     //   fallbackLoader: 'style-loader'
     // })
    }]
  },
  postcss: [
    require('autoprefixer')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
  }
};
