var path = require('path');
var importer = require('../Core');
var importedFuseSearch, importedInterpretMarkdown,
    importedInterpretObject, cacheNotebook;

// How to walk directories and files recursively and synchronously
var glob = require('glob');
var cacheAll = (dirname) => importer.import('interpret questions.ipynb')
    .then(r => {
        cacheNotebook = r['cacheNotebook'];
        importedInterpretMarkdown = r['interpretMarkdown'];
        importedInterpretObject = r['interpretObject'];
        importedFuseSearch = r['fuseSearch'];
    })
    .then(() => glob.sync('**/*.ipynb', {
        ignore: ['**/node_modules/**',
            '**/\\.*',
            '**/.*'],
        cwd: dirname
    }))
    .then(ns => Promise.all(ns.map(n =>
        cacheNotebook(path.resolve(path.join(dirname, n))))))
    .catch(e => console.log(e));
module.exports = cacheAll;

