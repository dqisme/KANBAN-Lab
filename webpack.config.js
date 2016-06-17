var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.ts'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        include: path.join(__dirname, 'src'),
        loaders: ['ts']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0'
  }
};
