var importer = require('../Core');

var getAllXPath, scrollClient;
var getAllUntil = (scrollableSelector,
                   dataSelector,
                   set = [],
                   compare = (a, b) => m == e,
                   cb = (i) => i < 3, i = 0) => {
    return client
        .then(() => importer.import([
            'all xpath elements',
            'scroll specific element'
        ], {client}))
        .then(r => {
            getAllXPath = r[0];
            scrollClient = r[1];
            return getAllXPath(dataSelector);
        })
        .then(r => {
            var newPosts = r
                .filter(e => set
                    .filter(m => compare(e, m)).length === 0);
            set = newPosts.concat(set);
            return newPosts.length > 0
                ? scrollClient(scrollableSelector)
                    .pause(5000)
                    .then(() => cb(i)
                        ? getAllUntil(scrollableSelector, dataSelector, set, compare, cb, i + 1)
                        : set)
                : Promise.resolve(set);
        })
        .catch(e => console.log(e))
};
if (typeof client.getAllUntil == 'undefined') {
    client.addCommand('getAllUntil', getAllUntil);
}
module.exports = getAllUntil;
getAllUntil;


