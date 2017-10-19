// How to parse a well formatted simple notebook the cheap way?
var path = require('path');
var Module = require('module');
var fs = require('fs');

var newModule = new Module(__filename, process.mainModule);
Module._cache[__filename] = newModule;
newModule.filename = __filename;
newModule.paths = Module._nodeModulePaths(__dirname);
if (typeof importer === 'undefined') {
    var importer = ((notebook, __dirname, __filename) => {
        const filename = notebook.replace('.ipynb', '');
        const files = fs.readdirSync(filename)
            .sort((a, b) => parseInt(a.replace(/[^0-9]/ig, '')) - parseInt(b.replace(/[^0-9]/ig, ''))) //sort numerically
            .filter(f => f.indexOf('.js') > -1);
        var code = files.map(f => fs.readFileSync(path.join(filename, f)).toString()).join('');
        newModule._compile(code, notebook);
        newModule.loaded = true;
    });
    var notebookReaderPath = path.join(__dirname, 'import notebook.ipynb');
    importer(notebookReaderPath, path.dirname(notebookReaderPath), path.basename(notebookReaderPath))
}
module.exports = newModule.exports;

