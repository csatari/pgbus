var webpack = require('webpack'); 
module.exports = {  
  entry: {
    main:  './src/main.ts',
    login: './src/login.ts'
  },
  output: {
    filename: './built/[name].js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  exclude: /(node_modules|bower_components)/,
  /*plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],*/
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  externals: {
		'ko': 'ko'
  }
};