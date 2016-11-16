var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.ts',
    login: './src/login.ts'
  },
  output: {
    filename: './built/[name].js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.less']
  },
  exclude: /(node_modules|bower_components)/,
  plugins: [
    //new webpack.optimize.UglifyJsPlugin()
    new ExtractTextPlugin('built/styles.css')
  ],
  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    },
    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract(
        'css?sourceMap!' +
        'less?sourceMap'
      )
    }]
  },
  externals: {
    'ko': 'ko'
  }
};