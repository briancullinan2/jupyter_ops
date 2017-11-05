// initialize
var Module = require('module').Module;
var path = require('path');
var requireCode = (code, pathToCode, tmpGlobal) => {

    // must have a new name for every generation otherwise cache will be returned
    var filepath = path.resolve(process.cwd(), pathToCode);
    var dirname = path.dirname(filepath);

    var cachedModule = Module._cache[filepath];
    if (cachedModule && tmpGlobal.useCache !== false) {
        tmpGlobal.module = cachedModule;
        return cachedModule.exports;
    }

    var mod = new Module(filepath, global.module);
    tmpGlobal.module = mod;
    Module._cache[filepath] = mod;

    mod.filename = filepath;
    mod.paths = Module._nodeModulePaths(dirname);

    mod._compile('module.exports=(function(ctx) { Object.assign(global, ctx);\n' + code + '\n})', filepath);
    mod.loaded = true;
    mod.exports(tmpGlobal);
    tmpGlobal.exports = mod.exports;
    return mod.exports;
};

// $$.done() for our dumb parser

