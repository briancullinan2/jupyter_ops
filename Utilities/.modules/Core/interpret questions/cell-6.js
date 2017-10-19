var corePath = path.resolve(__dirname);
var getCells = require(corePath).getCells;

var getFresher = (cache) => {
    return getCells(cache.filename, ['*', 'markdown', 'code'])
        .then(r => {
            cache.fresher = accumulateMarkdown(r.slice(cache.from, cache.to))[0].code;
            return cache;
        });
};

var interpretObject = (results) =>
    (typeof results[0] !== 'undefined' && typeof results[0] !== 'string'
        ? Promise.all(results.map((res) => Promise.all(res.map(r => {
            delete cacheIds[r].function;
            return getFresher(cacheIds[r]);
        }))))
        : Promise.all(results.map(r => {
            delete cacheIds[r].function;
            return getFresher(cacheIds[r]);
        })));
module.exports = interpretObject;
