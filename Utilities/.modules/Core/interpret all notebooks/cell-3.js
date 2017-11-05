var path = require('path');
var glob = require('glob');
var fs = require('fs');
var assert = require('assert');
var importer = require('../Core');
var {
    fuseSearch,
    interpretMarkdown,
    interpretObject,
    cacheNotebook
} = importer.import('interpret questions.ipynb');

assert(fs.existsSync('../Utilities/file system.ipynb'), 'missing ' + path.resolve('../Utilities/file system.ipynb'));
cacheNotebook('../Utilities/file system.ipynb');

// How to walk directories and files recursively and synchronously
var listInProject;
var cacheAll = (dirname) => {
    if(typeof listInProject === 'undefined') {
        const r = fuseSearch('list project files');
        assert(r.length > 0)
        const search1 = interpretObject([r[0]])[0];
        listInProject = importer.runInNewContext(search1.code, {
            __filename: search1.filename
        }, {}, false);
    }
    return listInProject(dirname, '**/*.ipynb').map(n => cacheNotebook(n))
};

// Output the imported service functions for interpretObject and intend() so that only this file has to be imported and reduce the chance of reocurrance.
module.exports = {
    fuseSearch,
    interpretMarkdown,
    interpretObject,
    cacheNotebook,
    cacheAll
};

