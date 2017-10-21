// install fuseif (typeof cellCache === 'undefined') {    var cellCache = [];}var Fuse = require('fuse.js');var fuse = new Fuse(cellCache, {    shouldSort: true,    keys: ['question'],    id: 'id'});var fuseSearch = (message) => {
    const notebook = cellCache.filter(c => c.id.substr(0, message.length + 1) === message + '[');
    if(notebook.length > 0) {
       return Promise.resolve(notebook.map(c => c.id));
    }
    const result = fuse.search(message);
    return Promise.resolve(result);
};module.exports = fuseSearch;