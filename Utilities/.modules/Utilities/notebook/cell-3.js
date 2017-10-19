var glob = require('glob');
var path = require('path');
var importer = require('../Core');

var exportAll = (project) => {
    const notebooks = glob.sync('**/*.ipynb', {cwd: project});
    return importer.runAllPromises(notebooks.map(n => resolve => {
        return exportNotebook(path.join(project, n))
        .then(r => resolve(r))
        .catch(e => { console.log(e); resolve(); })
    }))
}
module.exports = exportAll;
