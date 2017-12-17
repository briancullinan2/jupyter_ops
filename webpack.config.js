var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

/*
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });
*/

module.exports = {
    target: 'node',
    entry: './.output/aws-rpc-wrapper.js',
    output: {
      path: __dirname + '/.build',
      filename: 'bundle.js',
      libraryTarget: 'commonjs2'
    },
    resolve: {
      extensions: ['.ts', '.js'],
      modules: [
          'node_modules',
          path.resolve(__dirname, '..', 'node_modules')
      ]
    },
    module: {
      rules: [
        {
            test: /^(?!.*\.spec\.js$).*\.js$/,
            loader: 'babel-loader',
            query: {
              presets: ['latest']
            }
        },
        /*
        {
            test: /^(?!.*\.spec\.ts$).*\.ts$/,
            loader: 'tslint-loader',
            enforce: 'pre',
            options: {emitErrors: true, failOnHint:true}
        },
        */
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin(),
    ],
    node: {
    },
//  externals: nodeModules
}