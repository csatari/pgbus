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
    new ExtractTextPlugin('built/styles.css'),
    new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
      })
  ],
  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract(
        'css?sourceMap!' +
        'less?sourceMap'
      )
    }, {
      test: /\.(woff|woff2)$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.ttf$/,
      loader: "file-loader"
    }, {
      test: /\.eot$/,
      loader: "file-loader"
    }, {
      test: /\.svg$/,
      loader: "file-loader"
    }]
  },
  externals: {
    'ko': 'ko'
  }
};