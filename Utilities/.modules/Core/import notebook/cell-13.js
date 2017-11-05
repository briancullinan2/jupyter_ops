// initialize

var Module = require('module').Module;
var path = require('path');
var vm = require('vm');

var runInNewContext = (code, ctx, options, isModule = true) => {
    var tmpGlobal = ctx || {};
    tmpGlobal.global = tmpGlobal;
    Object.assign(tmpGlobal, ctx);
    Object.assign(tmpGlobal, {
        'console': console,
        'process': process,
        'Promise': Promise,
        'Buffer': Buffer,
        'clearImmediate': clearImmediate,
        'clearInterval': clearInterval,
        'clearTimeout': clearTimeout,
        'setImmediate': setImmediate,
        'setInterval': setInterval,
        'setTimeout': setTimeout,
        '__filename': path.basename(ctx.__filename),
        '__dirname': path.dirname(ctx.__filename),
        'require': require
    });
    Object.assign(options || {}, {lineOffset: -1});
    if (!isModule) {
        tmpGlobal.module = {};
    }
    if(isModule) {
        var result = requireCode(code, path.join(ctx.__dirname, ctx.__filename), tmpGlobal);
        return tmpGlobal.global.module.exports || result;
    } else {
        var result = vm.runInNewContext('"use strict";\n' + code, tmpGlobal, options);
        module.paths = Module._nodeModulePaths(path.join(ctx.__dirname, ctx.__filename));
        return tmpGlobal.global.module.exports || result;
    }
};

// $$.done() for our dumb parser
