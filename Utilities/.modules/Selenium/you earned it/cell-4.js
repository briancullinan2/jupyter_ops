$$.async()
runHighFiver()
    .then(r => $$.sendResult(r))
    .catch(e => $$.sendError(e))