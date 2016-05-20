"use strict";

var path = require('path');

module.exports = {
  entry: "./app/src/app.jsx",
  output: {
    path: __dirname,
    filename: "app.bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/, 
        loader: "style!css"
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  debug: true,
  devtool: 'source-map'
}
