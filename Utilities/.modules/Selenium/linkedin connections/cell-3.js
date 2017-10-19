var importer = require('../Core');

$$.async();
importer.import('sync linkedin contacts')
    .then(syncLinkedInContacts => syncLinkedInContacts())
    .then(r => $$.sendResult(r))
    .catch(e => $$.sendError(e));

