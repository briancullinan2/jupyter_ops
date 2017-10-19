var importer = require('../Core')

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var project = PROFILE_PATH + '/universal';

$$.async();
var left, right;
importer.interpretAll(['search notebook component', 'files in project'])
    .then(r => {
        left = r[0].code;
        var listInProject = r[1].runInNewContext({});
        return listInProject(project, '**/search.component.ts')
    })
    .then(r => {
        right = fs.readFileSync(r[0]).toString();
        return diffTwoTexts(left, right);
    })
    .then(r => $$.html(r))
    .catch(e => $$.sendError(e));

