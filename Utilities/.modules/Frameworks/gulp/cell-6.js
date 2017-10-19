var importer = require('../Core');
var searchRegexp = 'takeout';

$$.async();
importer.import('search notebooks using gulp')
    .then(searchNotebooks => searchNotebooks(searchRegexp))
    .then(r => $$.mime({'text/markdown': r}))
    .catch(e => $$.sendError(e));
