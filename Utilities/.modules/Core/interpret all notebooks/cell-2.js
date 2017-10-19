var path = require('path');

$$.async();
var interpret = (message) => importedInterpret(message);
interpretAll(path.resolve(path.join(__dirname, '..')))
    .then(() => $$.sendResult(interpret))
    .catch(e => $$.sendError(e));
module.exports = interpret;
