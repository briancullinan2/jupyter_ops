var importer = require('./Core');

// eval a cell in the current context?

// performs cheap text based searching on cells
var mountAndRewireAngular = importer.evalNotebook(
    'Utilities/file system.ipynb',
    'memory-fs' || 1); // use cheap search terms or the numeric code cell

