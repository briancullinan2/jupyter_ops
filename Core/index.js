// How to parse a well formatted simple notebook the cheap way?
var path = require('path');
var Module = require('module');

var newModule = new Module(__filename, process.mainModule);
Module._cache[__filename] = newModule;
newModule.filename = __filename;
newModule.paths = Module._nodeModulePaths(__dirname);

if(typeof importer == 'undefined') {
    ((notebook) => {
        var filename = path.basename(notebook);
        var f = fs.readFileSync(notebook).toString();
        var re = new RegExp('initialize([\\s\\S]*?)done', 'ig');
        var m; co = []; while ((m = re.exec(f)) && co.push(m[1]));
        var code = JSON.parse('["//'+co.join('","')+'"]').join('');
        var footer = '\n\n;(Object.assign(module.exports, imported["'+filename+'"]))';
        var header = '\n\n__filename='+JSON.stringify(notebook)+';\n\n'
        newModule._compile(header + code + footer, notebook);
        newModule.loaded = true;
    })(path.join(__dirname, 'How to import a notebook.ipynb'));
}
module.exports = newModule.exports;
module.exports.interpretAll = (dirname) => Promise.all([
    path.join(__dirname, 'How to interpret questions.ipynb'),
    path.join(__dirname, 'How to import all notebooks.ipynb')
    ].map(n => module.exports.importNotebook(n)))
    .then(r => walkSync(path.join(dirname, '**', '*.ipynb'), 2))
    .then(ns => Promise.all(ns.map(n => interpretNotebook(n))));
