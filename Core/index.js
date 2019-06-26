// How to parse a well formatted simple notebook the cheap way?
var path = require('path');
var Module = require('module').Module;
var fs = require('fs');

var filepath = path.resolve(process.cwd(), __filename);
var newModule = new Module(filepath, process.mainModule);
Module._cache[filepath] = newModule;
newModule.parent = module;
newModule.filename = filepath;
newModule.paths = Module._nodeModulePaths(path.dirname(filepath));
if (typeof importer === 'undefined') {
    var notebookPath = path.join(__dirname, 'import.ipynb');
    var f = fs.readFileSync(notebookPath).toString();
    var re = new RegExp('initialize([\\s\\S]*?)\\$\\$\\.done', 'ig');
    var m, co = [];
    while ((m = re.exec(f)) && co.push(m[1])) ;
    var code = JSON.parse('["//' + co.join('","') + '"]').join('\n');
    newModule._compile(code, notebookPath);
    newModule.loaded = true;
}
Module._extensions['.ipynb'] = (module, filename, ctx) => {
    const tmpModule = {
        _compile: () => {
        }
    };
    tmpModule._compile = () => (module.exports = newModule.exports.import(filename, ctx));
    return require.extensions['.js'](tmpModule, filename)
};
module.exports = newModule.exports;

