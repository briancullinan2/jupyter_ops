var path = require('path');
var glob = require('glob');
var assert = require('assert');
var fs = require('fs');
var importer = require('../Core');
var exportNotebook = importer.import('notebook.ipynb[export cells modules]');
var exportAll = importer.import('notebook.ipynb[export all notebooks]');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var PROJECT_PATH = PROFILE_PATH + '/jupytangular2/Utilities';
var moduleOutput = PROJECT_PATH + '/.modules';

var sortNumeric = (that) => {
    return that.sort((a, b) => parseInt(a.split(/[^0-9]/ig).join('')) - parseInt(b.split(/[^0-9]/ig).join('')));
}

describe('notebook export service', () => {
    beforeEach(() => {
        assert(fs.existsSync(PROJECT_PATH));
        assert(fs.existsSync(moduleOutput));
    })
    
    it('should export this file', () => {
        exportNotebook(path.resolve(PROJECT_PATH + '/notebook.ipynb'));
        var files = glob.sync('Utilities/notebook/*', {cwd: moduleOutput});
        sortNumeric(files);
        assert(path.basename(files[0]) === 'cell-0.md');
        assert(path.basename(files[1]) === 'cell-1.js');
        assert(path.basename(files[2]) === 'cell-2.md');
    })
    
    it('should have comparable cells', () => {
        var importCells = importer.interpret(['notebook.ipynb[0]', 'notebook.ipynb[1]', 'notebook.ipynb[2]']);
        exportNotebook(path.resolve(PROJECT_PATH + '/notebook.ipynb'));
        var files = glob.sync('Utilities/notebook/*', {cwd: moduleOutput});
        sortNumeric(files);
        var fsCell0 = fs.readFileSync(path.join(moduleOutput, files[0])).toString();
        var fsCell1 = fs.readFileSync(path.join(moduleOutput, files[1])).toString();
        var fsCell2 = fs.readFileSync(path.join(moduleOutput, files[2])).toString();
        assert(fsCell0 === importCells[0].markdown.join(''));
        assert(fsCell1 === importCells[0].fresher, fsCell1.length + ' != ' + importCells[0].fresher.length)
        assert(fsCell2 === importCells[1].markdown.join(''))
    })
    
    it('should export all notebooks', () => {
        var exported = exportAll(PROJECT_PATH);
        assert(exported.length > 0);
    })
})
