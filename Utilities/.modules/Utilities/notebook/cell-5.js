var importer = require('../Core');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var PROJECT_PATH = PROFILE_PATH + '/jupytangular2';

$$.async()
importer.import('notebook.ipynb[export cells modules]')
.then(exportNotebook => importer.import(
    'notebook.ipynb[export all notebooks]', {exportNotebook}))
.then(exportAll => exportAll(PROJECT_PATH))
.then(r => $$.sendResult(r))
.catch(e => $$.sendError(e))
