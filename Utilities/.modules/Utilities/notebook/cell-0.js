var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var moduleOutput = PROFILE_PATH + '/jupytangular2/Utilities/.modules';
var importer = require('../Core');
var fs = require('fs');
var path = require('path');

var exportNotebook = (notebook) => {
    const name = path.basename(notebook).replace(/\.ipynb/ig, '');
    const parent = path.basename(path.dirname(notebook));
    if (!fs.existsSync(moduleOutput)) {
        fs.mkdirSync(moduleOutput);
    }
    if (!fs.existsSync(path.join(moduleOutput, parent))) {
        fs.mkdirSync(path.join(moduleOutput, parent));
    }
    if (!fs.existsSync(path.join(moduleOutput, parent, name))) {
        fs.mkdirSync(path.join(moduleOutput, parent, name));
    }

    return importer.getCells(notebook)
        .then(cells => {
            const results = [];
            for (const i in cells) /* exclude this cell */ {
                if (!cells.hasOwnProperty(i)) {
                    continue;
                }
                const cellPath = path.join(moduleOutput, parent, name, 'cell-' + i + '.js');
                fs.writeFileSync(cellPath, cells[i].source.join(''));
                results.push(cellPath);
            }
            return results;
        })
}
module.exports = exportNotebook;
