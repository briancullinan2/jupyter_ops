// initialize
var path = require('path');
var fs = require('fs');

// TLDR; What do we end up with?
var getCells = ((notebook, types = ['code']) => Promise.resolve([]));
var assignResults = (results, filename) => results;

var getCellsOrDirectory = (filename) => {
    const fname = filename.replace('.ipynb', '');
    if (fs.existsSync(fname)
        && fs.statSync(fname).isDirectory()) {
        const files = fs.readdirSync(fname).filter(f => f.indexOf('.js') > -1)
        var code = files.map(f => fs.readFileSync(path.join(fname, f)).toString());
        return Promise.resolve(code);
    }
    else {
        return getCells(filename, ['javascript', 'code'])
            .then(cells => cells.map(c => c.source.join('')));
    }
}

// provide a function for importing any notebook as a module and executing it
var executeNotebook = (notebook, ctx = {}) => {
    var filename = path.resolve(notebook);
    var dirname = path.resolve(path.dirname(filename));
    var oldDir = process.cwd();
    process.chdir(dirname);
    console.log(filename);
    // only read javascript kernels
    return getCellsOrDirectory(filename)
        .then(cells => {
            // TODOCUMENT: Notebooks are imported in to the same context so filename and dirname are overwritten.
            if (cells.length > 0) {
                cells[0] = 'var __filename=' + JSON.stringify(filename) + ';'
                    + 'var __dirname=' + JSON.stringify(dirname) + ';'
                    + 'process.chdir(' + JSON.stringify(dirname) + ');\n'
                    + cells[0];
            }
            return cells;
        })
        .then(cells => runAllPromises(cells
            .map((c, i) => promiseNewContext(c, ctx, notebook + '[' + i + ']'))))
        .then(r => {
            console.log(r);
            const results = assignResults(r, notebook);
            process.chdir(oldDir);
            return results;
        })
        .catch(e => console.log(e))
};
// output nothing here, cached version of this function is assigned below.
if (typeof imported !== 'object' || imported === null) {
    var imported = {};
}

var interpret, interpretObject;
var importCells = (queries, ctx) => {
    return Promise.resolve(
        typeof imported['interpret all notebooks.ipynb'] !== 'undefined'
            ? imported['interpret all notebooks.ipynb']
            : executeNotebook('interpret all notebooks.ipynb'))
        .then(r => {
            interpret = r['interpret'];
            interpretObject = r['interpretObject'];
        })
        .then(() => {
            return typeof queries === 'string'
                ? interpret(queries)
                : Promise.all(queries.map(interpret))
        })
        .then(r => {
            return typeof queries === 'string'
                ? interpretObject([r[0]])
                : interpretObject(r.map(r => r[0]))
        })
        .then(r => r.map(r => {
            if (typeof r === 'undefined') {
                return r;
            }
            return promiseNewContext(r.fresher, ctx);
        }))
        .then(r => typeof queries === 'string' ? r[0] : r)
        .catch(e => console.log(e));
};

// How to test if a notebook has already been imported?
var importNotebook = (notebook, ctx) => {
    if (typeof notebook === 'undefined') {
        return Promise.resolve({});
    }
    var filename = path.basename(notebook);
    if (typeof imported[filename] !== 'undefined') {
        return Promise.resolve(imported[filename]);
    }
    const queries = ((/\[(.*?)]/ig).exec(filename) || {})[1];
    if (typeof queries !== 'undefined') {
        return importCells(queries, ctx);
    }
    return executeNotebook(notebook, ctx);
};

// $$.done(); for our dumb parser

