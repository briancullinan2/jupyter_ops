$$.async();
getIdentityServer()
    .then(r => $$.sendResult(r))
    .catch(e => $$.sendError(e));
