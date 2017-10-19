// TODO: display a tree of require dependencies and make sure it all still compiles properly
var importer = require('../Core');
var fs = require('fs');
var path = require('path');
var execSync = require('child_process').execSync;


var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var project = PROFILE_PATH + '/AppData/Local/Temp/';


$$.async();
var diffTwoTexts;
importer.interpretAll([
    'diff'
])
    .then(r => {
        var filename = project + '/jupyter/' + path.basename(r[0].filename) + '-cell-' + r[0].to + '.js';
        if (!fs.existsSync(project + '/jupyter')) {
            fs.mkdirSync(project + '/jupyter');
        }
        fs.writeFileSync(filename, r[0].code);
        diffTwoTexts = r[0].runInNewContext();
        execSync('"C:\\Program Files\\JetBrains\\WebStorm 2017.1.1\\bin\\format.bat" "' + project + '/jupyter"');
        return diffTwoTexts(r[0].code, fs.readFileSync(filename).toString());
    })
    .then(r => $$.html(r))
    .catch(e => $$.sendError(e))

