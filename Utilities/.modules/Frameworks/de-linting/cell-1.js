// TODO: display a tree of require dependencies and make sure it all still compiles properly
var importer = require('../Core');
var fs = require('fs');
var path = require('path');
var execSync = require('child_process').execSync;
var ncp = require('ncp').ncp;
ncp.limit = 16;

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var project = path.resolve('../Utilities/.modules');
var webstormWin = 'C:\\Program Files\\JetBrains\\WebStorm 2017.1.1\\bin\\format.bat';
var webstormMac = '/Applications/WebStorm.app/Contents/bin/format.sh';
var webstorm = '';
if (process.platform === 'win32') {
    webstorm = webstormWin;
} else if (process.platform === 'darwin') {
    webstorm = webstormMac;
}
var idea = path.resolve('../.idea');

$$.async();
var diffTwoTexts;
importer.interpret([
    'diff'
])
    .then(r => {
        if (!fs.existsSync(project)) {
            fs.mkdirSync(project);
        }
        return r;
    })
    .then(r => new Promise((resolve, reject) => {
        // output .idea to set the framework preferences?
        return ncp(idea, project + '/.idea', function (err) {
            if (err) {
                return reject(err);
            }
            resolve(r);
        });
    }))
    .then(r => {
        var filename = project + path.basename(r[0].filename) + '-cell-' + r[0].to + '.js';
        fs.writeFileSync(filename, r[0].code);
        diffTwoTexts = r[0].runInNewContext();
        // I think I overwrote the default
        const cmd = '"' + webstorm + '" "' + project
            + '/" -R -settings "' + project + '/Default.xml"';
        console.log(cmd);
        execSync(cmd);
        return diffTwoTexts(r[0].code, fs.readFileSync(filename).toString());
    })
    .then(r => $$.html(r))
    .catch(e => $$.sendError(e))

