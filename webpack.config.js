const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = {
  entry: path.join(__dirname, 'app/main.js'),
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      // exclude: /node_modules/,
      loader: ExtractTextPlugin.extract({
        loader: 'css-loader?sourceMap'
      })
    }]
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true })
  ]
};
module.exports = config;