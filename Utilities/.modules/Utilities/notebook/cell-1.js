var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var moduleOutput = __dirname + '/.modules';
var importer = require('../Core');
var fs = require('fs');
var path = require('path');

var exportNotebook = (notebook) => {
    const name = path.basename(notebook).replace(/\.ipynb/ig, '');
    const parent = path.basename(path.dirname(notebook));
    if(!fs.existsSync(moduleOutput)) {
        fs.mkdirSync(moduleOutput);
    }
    if(!fs.existsSync(path.join(moduleOutput, parent))) {
        fs.mkdirSync(path.join(moduleOutput, parent));
    }
    if(!fs.existsSync(path.join(moduleOutput, parent, name))) {
        fs.mkdirSync(path.join(moduleOutput, parent, name));
    }
    
    return importer.getCells(notebook, ['*', 'code', 'markdown', 'raw'])
        .reduce((results, cell, i) => {
            var extension;
            if(cell.cell_type === 'markdown') {
                extension = '.md';
            } else if(cell.cell_type === 'markdown') {
                extension = '.txt';
            } else if(cell.language === 'javascript') {
                extension = '.js';
            } else if(cell.language === 'powershell') {
                extension = '.ps1';
            } else if(cell.language === 'csharp') {
                extension = '.cs';
            } else if(cell.language === 'python') {
                extension = '.py';
            } else if(cell.language === 'typescript') {
                extension = '.ts';
            } else if(cell.language === 'bash') {
                extension = '.sh';
            } else {
                throw 'unknown language or cell type: ' + notebook + ' (' + cell.cell_type + ',' + cell.language + ')';
            }
            const cellPath = path.join(moduleOutput, parent, name,
                                       'cell-' + i + extension);
            fs.writeFileSync(cellPath, cell.source.join(''));
            results.push(cellPath);
            return results;
        }, [])
}
module.exports = exportNotebook;
