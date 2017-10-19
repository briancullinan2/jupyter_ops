// initialize
var path = require('path');
var vm = require('vm');

var runner = function (resolve, reject, file) {
    'use strict';
    this.resolve = resolve;
    this.reject = reject;
    this.isAsync = false;
    this.returnVal = null;
    this.file = file;
    this.async = () => {
        this.isAsync = true;
    };
    this.sendResult = (r) => {
        if (this.isAsync) {
            return this.resolve(r);
        } else {
            this.returnVal = r;
        }
    };
    this.sendError = (e) => {
        console.log(e);
        this.reject(e);
    }

};

var promiseNewContext = (c, ctx, newFilename) => {
    return (resolve, reject) => {
        var isPromise = false;
        var run = new runner(resolve, reject, newFilename);
        var newCtx = Object.assign(ctx || {}, {
            __filename: newFilename,
            $$: run
        });
        const result = runInNewContext(c, newCtx, {filename: newFilename}, false);
        if (typeof result === 'object' && result !== null) {
            if (result.constructor === Promise.prototype.constructor) {
                isPromise = true; // will return result of promise
            }
        }
        return Promise.resolve(result)
            .then(r => {
                if (!run.isAsync) {
                    return resolve(run.returnVal || r);
                } else if (isPromise) {
                    return resolve(run.returnVal || r);
                }
                return r;
            })
            .catch(e => reject(e))
    }
    /*
    .then(r => {
        if (typeof r === 'function') {
            newCtx[filename + '[' + i + ']'] = r;
            newCtx[r.name] = obj[filename + '[' + i + ']'];
        }
        return r;
    });
    */
};

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
