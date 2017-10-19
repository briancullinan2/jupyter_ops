// install fuse

if (typeof cellCache == 'undefined') {
    var cellCache = []
}
;

var Fuse = require('fuse.js');
var fuse = new Fuse(cellCache, {
    shouldSort: true,
    keys: ['question'],
    id: 'id'
});

var interpret = (message) => fuse.search(message);
module.exports = interpret;
