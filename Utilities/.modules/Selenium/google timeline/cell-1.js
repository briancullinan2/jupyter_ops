$$.async();
getClient()
    .then(c => $$.sendResult(c))
    .catch(e => $$.sendError(e));
