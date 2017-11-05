var importer = require('../Core');
var runSeleniumCell = importer.import('selenium cell');

$$.async()
runSeleniumCell('test docker selenium')
    .then(r => $$.sendResult(r))
    .catch(e => $$.sendError(e));
