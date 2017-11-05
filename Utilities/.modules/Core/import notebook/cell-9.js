
// initialize
var fs = require('fs');
var path = require('path');

var fileMode = (s, compare) => compare.substr(0, path.basename(s).split('[')[0].length) === s;

var fuseSearch, interpretObject;
var interpret = (s) => {
    if(typeof fuseSearch === 'undefined') {
        var interpreter = importNotebook('interpret all notebooks.ipynb')[1];
        fuseSearch = interpreter.fuseSearch;
        interpretObject = interpreter.interpretObject;
    }
    var searches = (typeof s === 'string' ? [s] : s)
        .map(q => fuseSearch(q));
    if (searches.length === 0
        || (typeof s === 'string'
            && typeof searches[0] === 'undefined')
        || (searches.length === 1
            && searches[0].length === 0)) {
        throw 'Nothing found for ' + JSON.stringify(s).substr(0, 200);
    }
    searches = typeof s === 'string' ? searches[0] : searches;
    var interpreted;
    // TODO: whole file mode or [filename.ipynb]?
    interpreted = typeof s === 'string'
        ? interpretObject(fileMode(s, searches[0]) ? searches : [searches[0]])
        : interpretObject(searches.map((r, i) => fileMode(s[i], r[0]) ? r : r[0]));
    
    const results = interpreted.map(r => {
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
                __filename: r.filename
            }),
            {filename: path.join(path.dirname(r.filename), r.id)}, false);
        return r;
    });
    return typeof s === 'string' && !fileMode(s, searches[0]) ? results[0] : results;
};

// $$.done() for our dumb parser

