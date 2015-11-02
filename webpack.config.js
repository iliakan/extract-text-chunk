'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const rimraf = require('rimraf');

module.exports = {
  context: __dirname + '/frontend',
  entry:  {
    home: './home',
    about: './about'
  },
  output:  {
    path:     __dirname + '/public/assets',
    publicPath: '/assets/',
    filename: '[name].js'
  },

  module: {

    loaders: [{
      test:   /\.css$/,
      loader: ExtractTextPlugin.extract('css')
    }]

  },

  plugins: [
    new ExtractTextPlugin('[name].css', {allChunks: true})
  ]
};

