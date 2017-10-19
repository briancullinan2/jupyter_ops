// initialize

// save for later use
var fuseSearch, interpretObject;
var runInNewContext = (code, ctx) => void 0;

var interpret = (queries, root = '') => {
    return (typeof fuseSearch === 'undefined'
        ? importNotebook('interpret all notebooks.ipynb')
            .then((f) => {
                fuseSearch = f['fuseSearch'];
                interpretObject = f['interpretObject'];
            })
        : Promise.resolve())
    // use Promise.all to do all of your code searches up front
        .then(() => {
            return typeof queries === 'string'
                ? fuseSearch(queries)
                : Promise.all(queries.map(fuseSearch))
        })
        .then(r => {
            if (r.length === 0) {
                throw 'Nothing found for ' + queries;
            }
            return typeof queries === 'string'
                ? interpretObject([r[0]])
                : interpretObject(r.map(r => r[0]))
        })
        .then(r => r.map(r => {
            if (typeof r === 'undefined') {
                return r;
            }
            // must have a unique id for each unique cell so that
            // individual cells can serve as modules as well as notebooks
            // adding the cell id as a part of the filename
            r.runInNewContext = (ctx) => runInNewContext(
                r.fresher,
                Object.assign(ctx || {}, {useCache: false, __filename: r.filename + r.id}),
                {filename: r.filename + r.id}, false);
            return r;
        }))
        .then(r => typeof queries === 'string' ? r[0] : r)
        .catch(e => console.log(e))
};

// $$.done() for our dumb parser

