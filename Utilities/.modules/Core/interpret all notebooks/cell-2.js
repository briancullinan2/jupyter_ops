var path = require('path');

$$.async();
cacheAll(path.resolve(path.join(__dirname, '..')))
    .then(() => $$.sendResult(importedFuseSearch))
    .catch(e => $$.sendError(e));
module.exports = importedFuseSearch;
