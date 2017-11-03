var glob = require('glob');
var path = require('path');
var importer = require('../Core');
var exportNotebook = importer.import('notebook.ipynb[export cells modules]');

var exportAll = (project) => {
    const notebooks = glob.sync('**/*.ipynb', {cwd: project});
    return notebooks.map(n => {
        return exportNotebook(path.join(project, n))
    })
}
module.exports = exportAll;
