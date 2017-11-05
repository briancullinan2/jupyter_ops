// TODO: display a tree of require dependencies and make sure it all still compiles properlyvar importer = require('../Core');var fs = require('fs');var path = require('path');var ncp = require('ncp').ncp;
var {execCmd, diffTwoTexts} = importer.import([
    'spawn child process',
    'diff code blocks',
]);
var cell = importer.interpret('diff code blocks');
ncp.limit = 16;
var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;var project = path.resolve('../Utilities/.modules');var webstormWin = 'C:\\Program Files\\JetBrains\\WebStorm 2017.1.1\\bin\\format.bat';var webstormMac = '/Applications/WebStorm.app/Contents/bin/format.sh';
var webstorm = '';
if (process.platform === 'win32') {
    webstorm = webstormWin;
} else if (process.platform === 'darwin') {
    webstorm = webstormMac;
}
// TODO: how to force CLI to use project based settings instead of user settings?
var idea = path.resolve('../.idea');

var delint = () => {
    return new Promise((resolve, reject) => {
        // output .idea to set the framework preferences?
        return ncp(idea, project + '/.idea', function (err) {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    })
    // TODO: make this a test script for exporting all notebooks on file change watcher
        .then(() => {
            // I think I overwrote the default, some way to env variables for this?
            const cmd = '"' + webstorm + '" "' + project + '/" -R -settings "' + project + '/Default.xml"';
            var cwd = process.cwd();
            if (!fs.existsSync(project)) {
                fs.mkdirSync(project);
            }
            return execCmd(cmd, {cwd: project})
        })
        .then(r => {
            console.log(r);
            var filename = path.join(project, 'Utilities/diff/cell-' + cell.to + '.js');
            return diffTwoTexts(cell.code, fs.readFileSync(filename).toString());        })};
module.exports = delint;