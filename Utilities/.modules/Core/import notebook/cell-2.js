// initialize
var path = require('path');
var fs = require('fs');
var Fiber = require('fibers');
var Future = require('fibers/future');

// provide a function for importing any notebook as a module and executing it
var getCellsOrDirectory = (filename) => {
    const fname = filename.replace('.ipynb', '');
    if (fs.existsSync(fname)
        && fs.statSync(fname).isDirectory()) {
        const files = fs.readdirSync(fname)
            .sort((a, b) => parseInt(a.replace(/[^0-9]/ig, '')) - parseInt(b.replace(/[^0-9]/ig, ''))) //sort numerically
            .filter(f => f.indexOf('.js') > -1);
        return files.map(f => fs.readFileSync(path.join(fname, f)).toString());
    }
    else {
        return getCells(filename, ['javascript', 'code'])
            .map((c, i) => ({
                fresher: c.source.join(''),
                id: path.basename(filename) + '[' + i + ']',
                filename: filename,
                runInNewContext: (ctx) => runInNewContext(c.source.join(''), Object.assign(ctx, {
                    __filename: filename,
                }), {}, false)
            }));
    }
};

// output nothing here, cached version of this function is assigned below.
if (typeof imported !== 'object' || imported === null) {
    var imported = {};
}

// How to test if a notebook has already been imported?
var importNotebook = (notebook, ctx = {}) => {
    if (typeof notebook === 'undefined') {
        return Promise.resolve({});
    }
    var cells;
    // TODO: do Core notebooks synchronously?
    if(typeof notebook === 'string' && fs.existsSync(path.resolve(notebook))) {
        // ONLY RETURN CACHE?
        if (typeof imported[notebook] !== 'undefined' && path.resolve(notebook) === path.resolve('interpret questions.ipynb')) {
            return imported[notebook];
        }
        cells = getCellsOrDirectory(path.resolve(notebook));
    } else {
        cells = interpret(notebook);
        if( typeof cells.fresher !== 'undefined') {
            return (imported[notebook] = cells.runInNewContext(ctx));
        }
    }
    
    return (imported[notebook] = cells.reduce((obj, c, i) => {
        var result = c.runInNewContext(ctx);
        if (typeof result === 'function') {
            obj[cells[i].id] = result;
            obj[result.name] = obj[cells[i].id];
        }
        obj[i] = result;
        Object.assign(ctx, obj);
        return obj;
    }, {}));
};

// $$.done(); for our dumb parser

