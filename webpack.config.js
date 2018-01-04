var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
        ]
    },
    plugins: [
      new UglifyJsPlugin({
        uglifyOptions: {
            compress: {
                keep_fnames: true
            },
            mangle: false
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