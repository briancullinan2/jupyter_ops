// initialize
var path = require('path');
var fs = require('fs');

// provide a function for importing any notebook as a module and executing it
var getCellsOrDirectory = (filename) => {
    const fname = filename.replace('.ipynb', '');
    if (fs.existsSync(fname)
        && fs.statSync(fname).isDirectory()) {
        const files = fs.readdirSync(fname)
            .sort((a, b) => parseInt(a.replace(/[^0-9]/ig, '')) - parseInt(b.replace(/[^0-9]/ig, ''))) //sort numerically
            .filter(f => f.indexOf('.js') > -1);
        var code = files.map(f => fs.readFileSync(path.join(fname, f)).toString());
        return Promise.resolve(code);
    }
    else {
        return getCells(filename, ['javascript', 'code'])
            .then(cells => cells.map((c, i) => ({
                fresher: c.source.join(''),
                id: filename + '[' + i + ']',
                filename: filename
            })));
    }
};

var executeCell = (c, ctx, i) => {
    const obj = {};
    const key = c.id;
    return promiseNewContext(c.fresher, ctx, key)
        .then(r => {
            if (typeof r === 'function') {
                obj[key] = r;
                obj[r.name] = obj[key];
            }
            obj[i] = r;
            return obj;
        })
        .catch(e => console.log(e))
}

// output nothing here, cached version of this function is assigned below.
if (typeof imported !== 'object' || imported === null) {
    var imported = {};
}

// How to test if a notebook has already been imported?
var importNotebook = (notebook, ctx = {}) => {
    if (typeof notebook === 'undefined') {
        return Promise.resolve({});
    }
    if (typeof imported[notebook] !== 'undefined') {
        return Promise.resolve(imported[notebook]);
    }

    return Promise.resolve(fs.existsSync(notebook)
        ? getCellsOrDirectory(notebook)
        : interpret(notebook))
        .then(cells => {
            if (typeof cells.fresher !== 'undefined') {
                return executeCell(cells, ctx, cells.id);
            } else {
                return runAllPromises(cells
                    .map((c, i) => resolve => executeCell(c, ctx, i)
                        .then(r => resolve(r))));
            }
        })
        .then(results => {
            if (typeof results.reduce !== 'undefined') {
                return results.reduce((obj, r) => Object.assign(obj, r), {});
            } else {
                return results[Object.keys(results).pop()];
            }
        })
        .catch(e => console.log(e))
};

// $$.done(); for our dumb parser

