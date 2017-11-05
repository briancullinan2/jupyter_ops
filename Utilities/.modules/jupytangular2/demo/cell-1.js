var importer = require('./Core');

// execute every cell and provide output functions as a service?

$$.async();
importer.importNotebook('./Frameworks/node express.ipynb')
    .then(r => $$.sendResult(r))
    .catch(e => $$.sendError(e));

