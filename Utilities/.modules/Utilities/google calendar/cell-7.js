var importer = require('../Core');

var queries = 'scrape facebook events';

$$.async();
var interpret, interpretObject;
importer.import('interpret all notebooks.ipynb')
    .then((f) => {
        interpret = f['interpret'];
        interpretObject = f['interpretObject'];
    })
    // use Promise.all to do all of your code searches up front
    .then(r => typeof queries === 'string'
        ? interpret(queries)
        : Promise.all(queries.map(interpret)))
    //.then(r => typeof queries == 'string'
    //      ? interpretObject([r[0]])
    //      : interpretObject(r.map(r => r[0])))
    .then(r => $$.sendResult(r))
    .catch(e => $$.sendError(e));
