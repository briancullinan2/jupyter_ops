var importer = require('./Core');

// search notebooks for keywords, return the top search result and the contextual markdown and code cells?

var interpret; // store loaded functions for later use
importer.interpretAll([
    'docker selenium',
    'docker vnc'
]).then(r => $$.sendResult(r))
    .catch(e => $$.sendError(e));

