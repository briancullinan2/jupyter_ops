// How to flatten and array in javascript?
var flatten = arr => arr.reduce((acc, val) =>
    acc.concat(Array.isArray(val) ? flatten(val) : val), []);

Array.prototype.flatten = function () {
    return flatten(this)
};

// How to escape a string for regex?
function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}


