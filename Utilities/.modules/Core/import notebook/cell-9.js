// initialize
var path = require('path');
var vm = require('vm');

var promiseNewContext = (c, ctx, newFilename) => {
    return new Promise((resolve, reject) => {
        var isPromise = false;
        var returnVal = null;
        var newCtx = Object.assign(ctx || {}, {
            __filename: newFilename,
            $$: {
                async: () => {
                    isPromise = true
                },
                sendResult: (r) => {
                    if (isPromise) {
                        return resolve(r);
                    } else {
                        returnVal = r;
                    }
                },
                sendError: (e) => reject(e)
            }
        });
        return Promise.resolve(runInNewContext(c, newCtx, {filename: newFilename}, false))
            .then(r => {
                if (!isPromise) {
                    return resolve(r);
                }
                return r || returnVal;
            })
            .catch(e => reject(e))
    })
    /*
    .then(r => {
        if (typeof r === 'function') {
            newCtx[filename + '[' + i + ']'] = r;
            newCtx[r.name] = obj[filename + '[' + i + ']'];
        }
        return r;
    });
    */
}

var runInNewContext = (code, ctx, options, isModule = true) => {
    var tmpGlobal = ctx || {};
    tmpGlobal.global = tmpGlobal;
    Object.assign(tmpGlobal, ctx);
    Object.assign(tmpGlobal, {
        requireCode: requireCode,
        moduleCode: '"use strict";\n' + code,
        projectPath: ctx.__filename,
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
    //var result = vm.runInNewContext('"use strict";(requireCode(moduleCode, projectPath, global));', tmpGlobal);
    var result = vm.runInNewContext(isModule
        ? 'requireCode(moduleCode, projectPath, global);'
        : tmpGlobal.moduleCode, tmpGlobal, options);
    return tmpGlobal.global.module.exports || result;
};

// $$.done() for our dumb parser
