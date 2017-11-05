var getCells = require('../Core').getCells;

var getFresher = (cache) => {
    try {
        if(typeof cache === 'undefined') {
            return cache;
        }
        const r = getCells(cache.filename, ['*', 'markdown', 'code'])
        const cells = r.slice(cache.from, cache.to);
        cache.fresher = accumulateMarkdown(cells)[0].code;
    } finally {
        return cache;
    }
};

var interpretObject = (results) => {
    return typeof results[0] !== 'undefined' && typeof results[0] !== 'string'
        ? results.map((res) => res.map(r => {
            return getFresher(cacheIds[r]);
        }))
        : results.map(r => {
            return getFresher(cacheIds[r]);
        })
};
module.exports = interpretObject;
