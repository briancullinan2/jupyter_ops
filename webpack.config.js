var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
    target: 'node',
    entry: './index.js',
    output: {
        filename: './.build/bundle.js'
    },
    plugins: [
//    new webpack.BannerPlugin('require("source-map-support").install();',
//                                { raw: true, entryOnly: false })
    ],
    node: {
    },
    externals: nodeModules
}