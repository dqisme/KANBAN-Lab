var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.ts'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['','.js','.ts','.jade']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        include: path.join(__dirname, 'src'),
        loaders: ['ts']
      },
      {
        test: /\.jade$/,
        include: path.join(__dirname, 'src'),
        loaders: ['jade']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.jade')
    })
  ]
};
