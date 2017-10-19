var path = require('path');
var importer = require('../Core');
var importedInterpret, importedIntend, importedInterpretMarkdown,
    importedInterpretObject, interpretNotebook;

// How to walk directories and files recursively and synchronously
var glob = require('glob');
var interpretAll = (dirname) => importer.import('interpret questions.ipynb')
    .then(r => {
        interpretNotebook = r['interpretNotebook'];
        importedIntend = r['intend'];
        importedInterpretMarkdown = r['interpretMarkdown'];
        importedInterpretObject = r['interpretObject'];
        importedInterpret = r['interpret'];
    })
    .then(() => glob.sync('**/*.ipynb', {
        ignore: ['**/node_modules/**',
            '**/\\.*',
            '**/.*'],
        cwd: dirname
    }))
    .then(ns => Promise.all(ns.map(n =>
        interpretNotebook(path.resolve(path.join(dirname, n))))))
    .catch(e => console.log(e));
module.exports = interpretAll;

