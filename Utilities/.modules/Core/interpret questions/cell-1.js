// install fuse
var path = require('path');

if (typeof cellCache === 'undefined') {
    var cellCache = [];
}
if (typeof cacheIds === 'undefined') {
    var cacheIds = {};
}
var Fuse = require('fuse.js');
var fuse = new Fuse(cellCache, {
    shouldSort: true,
    keys: ['question'],
    id: 'id'
});

// filter query results by filename
var filterFilename = (arr, fname) => arr.filter(id => id.substr(0, fname.length + 1) === fname + '[')

var fuseSearch = (message) => {
    const cellIds = Object.keys(cacheIds);
    const query = path.basename(message).split(/[\[\]]/ig);
    const files = filterFilename(cellIds, query[0]);
    if (query.length === 3) {
        // filter query using exact cell if it is numeric
        return filterFilename(parseInt(query[1]) + '' === query[1]
            ? cellIds.filter(id => id === path.basename(message))
            : fuse.search(query[1]), query[0])
    } else if (query[0].indexOf('.ipynb') > -1 || query.length === 1 && files.length > 0) {
        return files;
    } else {
        return fuse.search(message);
    }
};
module.exports = fuseSearch;
