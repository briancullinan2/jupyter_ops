$$.async();

execCmd(`docker ps -a`)
    .then(r => $$.sendResult(r))
    .catch(e => $$.sendError(e));

