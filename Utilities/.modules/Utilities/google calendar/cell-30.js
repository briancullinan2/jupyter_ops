var importer = require('../Core');
var path = require('path');
var glob = require('glob');
var fs = require('fs');
var rimraf = require('rimraf');
var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var DOWNLOADS_PATH = PROFILE_PATH + '/Downloads';

// TODO: run unzip as a service?
var unzip = (file) => {
    console.log('unzipping ' + file);
    return execCmd('unzip "' + file + '"', {}, {cwd: DOWNLOADS_PATH})
}
var googleTakeout, syncChromeHistory, syncChromeBookmarks, execCmd;var syncChrome = () => {    return importer.import([        'order google takeout',        'sync chrome history',        'sync chrome bookmarks',
        'child process'    ])        .then(r => {            googleTakeout = r[0];            syncChromeHistory = r[1];            syncChromeBookmarks = r[2];
            execCmd = r[3];            return googleTakeout('chrome');        })
        .then(() => {
            if(fs.existsSync(DOWNLOADS_PATH + '/Takeout')) {
                rimraf.sync(DOWNLOADS_PATH + '/Takeout');
            }
            var takeouts = glob.sync('takeout-*.zip', {cwd: DOWNLOADS_PATH});
            return unzip(path.join(DOWNLOADS_PATH, takeouts.pop()));
        })        .then(() => syncChromeHistory())        .then(() => syncChromeBookmarks())}module.exports = syncChrome;