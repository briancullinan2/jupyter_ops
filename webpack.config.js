var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
    entry: [
        'es6-shim',
        'babel-polyfill',
        './.output/aws-rpc-wrapper.js'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
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
            {
                test: /(\.json)|(package\.json)$/,
                loader: 'json-loader'
            }
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
      new UglifyJsPlugin({
        uglifyOptions: {
            compress: {
                keep_fnames: true
            },
            mangle: {
                keep_fnames: true
            }
        }
      }),
      new webpack.ProvidePlugin({
          'document': 'min-document',
          'self': 'node-noop',
          'self.navigator.userAgent': 'empty-string',
          'window': 'node-noop'
      })
    ],
    node: {
        fs: 'empty',
        __dirname: true
    }
    /*
    externals: [nodeExternals({
      whitelist: [/^(?:(?!jsonpath|aws-sdk).)*$/]
    })],*/
}