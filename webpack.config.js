const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

const sourcePath = path.join(__dirname, 'app');
const distPath = path.join(__dirname, 'dist');

const config = {
  entry: path.join(__dirname, 'app/index.js'),
  output: {
    path: distPath,
    // publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: distPath,
    port:9000,
    // historyApiFallback: true,
    // inline: true,
  },
  module: {
    rules: [ // Loaders are last to first
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?sourceMap'
        })
      }
    ]
  },
  devtool: isProd ? 'source-map' : 'eval',
  plugins: [
    new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true }),
    new HtmlWebpackPlugin({ template: './app/index.html' })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      sourcePath
    ]
  }
};
module.exports = config;