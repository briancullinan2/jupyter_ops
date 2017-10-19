var importer = require('./Core');

// search notebooks for keywords, return the top search result and the contextual markdown and code cells?

importer.interpret([
    'docker selenium',
    'docker vnc'
]).then(r => $$.sendResult(r))
    .catch(e => $$.sendError(e));

