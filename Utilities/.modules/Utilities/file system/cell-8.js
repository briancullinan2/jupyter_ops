// TODO: create a gulp stream angular component out of it// TODO: connect with gulp-git https://www.npmjs.com/package/gulp-git// install https://github.com/Automattic/node-canvas/wiki/installation---osx// install using brew install pkg-config fontconfig cairo pixman giflib libjpeg libpngvar path = require('path');
var importer = require('../Core');var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;var project = PROFILE_PATH + '/jupytangular2';$$.async()
importer.import('d3.ipynb[format d3 tree]')
    .then(formatNodes => importer.import(
        'file system.ipynb[project imports d3 tree]', {formatNodes}))    .then(projectTree => projectTree(project))    .then(svg => $$.svg(svg))    .catch(e => $$.sendError(e))