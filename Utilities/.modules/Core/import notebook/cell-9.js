// initialize
var fs = require('fs');

// save for later use
var fuseSearch, interpretObject;
var runInNewContext = (code, ctx) => void 0;

var interpret = (s) => {
    var searches = typeof s === 'string' ? [s] : s;
    return importNotebook('interpret all notebooks.ipynb')
        .then((f) => {
            fuseSearch = f['fuseSearch'];
            interpretObject = f['interpretObject'];
        })
        .then(() => runAllPromises(searches.map(q => resolve => {
            const query = (/([^\[]*)\[(.*?)]/ig).exec(q);
            if (query) {
                // TODO: filter query results by filename
                return fuseSearch(query[2])
                    .then(r => {
                        return r.filter(id =>
                            id.substr(0, query[1].length + 1) === query[1] + '[')
                    })
                    .then(r => resolve(typeof s === 'string' ? r : [r]))
            } else {
                return fuseSearch(q)
                    .then(r => resolve(typeof s === 'string' ? r : [r]))
            }
        })))
        .then(r => {
            if (r.length === 0) {
                throw 'Nothing found for ' + s;
            }
            if (typeof s === 'string' && r[0].substr(0, s.length + 1) === s + '[') {
                return interpretObject([r]);
            }
            return typeof s === 'string'
                ? interpretObject([r[0]])
                : interpretObject(r.map(r => r[0]))
        })
        .then(r => {
            return r.map(r => {
                if (typeof r === 'undefined') {
                    return r;
                }
                // must have a unique id for each unique cell so that
                // individual cells can serve as modules as well as notebooks
                // adding the cell id as a part of the filename
                r.runInNewContext = (ctx) => runInNewContext(
                    r.fresher,
                    Object.assign(ctx || {}, {
                        useCache: false,
                        __filename: r.filename + r.id
                    }),
                    {filename: r.filename + r.id}, false);
                return r;
            })
        })
        .then(r => typeof s === 'string' ? r[0] : r)
        .catch(e => console.log(e));
};

// $$.done() for our dumb parser

