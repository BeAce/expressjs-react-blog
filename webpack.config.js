const path = require('path');
const webpack = require('webpack');
const express = require('express');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VENOR = [
  'lodash',
  'react',
  'react-dom',
  'react-router',
];

module.exports = {
  entry: {
    bundle: [
      'webpack-dev-server/client?http://localhost:3000',
      'react-hot-loader/patch',
      './src/index.js',
    ],
    vendor: [
      'webpack-dev-server/client?http://localhost:3000',
      'react-hot-loader/patch',
      ...VENOR,
    ],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      beComponents: path.resolve(__dirname, 'src/beComponents/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      fetch: path.resolve(__dirname, 'src/fetch/'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loaders: 'babel-loader',
        include: path.join(__dirname, 'src'),
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: 'vendor',
      minChunks: Infinity,
    }),
    // 只删除 dist 文件夹下的 bundle 和 manifest 文件
    new CleanWebpackPlugin(['build/bundle.*.js'], {
      // 打印 log
      verbose: true,
      // 删除文件
      dry: false,
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    stats: { chunks: false },
    historyApiFallback: true,
    // respond to 404s with index.html
    publicPath: '/',
    hot: true,
    // enable HMR on the server
    before(app) {
      app.use('/', express.static(path.join(__dirname, 'public')));
    },
  },
};
