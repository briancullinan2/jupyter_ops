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
        var f = fs.readFileSync(notebook).toString();
        var re = new RegExp('initialize([\\s\\S]*?)\\$\\$\\.done', 'ig');
        var m, co = [];
        while ((m = re.exec(f)) && co.push(m[1])) ;
        var location = 'var __filename=' + JSON.stringify(__filename) + ';'
            + 'var __dirname=' + JSON.stringify(__dirname) + ';'
            + 'process.chdir(' + JSON.stringify(__dirname) + ');\n';
        var code = JSON.parse('["//' + co.join('","') + '"]').join('\n');
        newModule._compile(location + code, notebook);
        newModule.loaded = true;
    });
    var notebookReaderPath = path.join(__dirname, 'import notebook.ipynb');
    importer(notebookReaderPath, path.dirname(notebookReaderPath), path.basename(notebookReaderPath))
}
module.exports = newModule.exports;

