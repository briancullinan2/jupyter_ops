$$.async()

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var PROJECT_PATH = PROFILE_PATH + '/Documents/jupytangular2';

exportAll(PROJECT_PATH)
.then(r => $$.sendResult(r))
.catch(e => $$.sendError(e))
