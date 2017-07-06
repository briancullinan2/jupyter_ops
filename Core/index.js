// How to parse a well formatted simple notebook the cheap way?
var path = require('path');
var Module = require('module');

var newModule = new Module(__filename, process.mainModule);
Module._cache[__filename] = newModule;
newModule.filename = __filename;
newModule.paths = Module._nodeModulePaths(__dirname);
if(typeof importer == 'undefined') {
    var importer = ((notebook, __dirname, __filename) => {
        var f = fs.readFileSync(notebook).toString();
        var re = new RegExp('initialize([\\s\\S]*?)done', 'ig');
        var m; co = []; while ((m = re.exec(f)) && co.push(m[1]));
        var code = JSON.parse('["//'+co.join('","')+'"]').join('');
        var footer = '\n\n;(Object.assign(module.exports, imported["'+__filename+'"]))';
        newModule._compile(code + footer, notebook);
        newModule.loaded = true;
    });
    var howTo = path.join(__dirname, 'How to import a notebook.ipynb');
    importer(howTo, path.dirname(howTo), path.basename(howTo))
}
module.exports = newModule.exports;

