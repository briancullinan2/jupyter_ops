var importer = require('../Core');

var googleTakeout, syncChromeHistory, syncChromeBookmarks;
var syncChrome = () => {
    return importer.import([
        'order google takeout',
        'sync chrome history',
        'sync chrome bookmarks'
    ])
        .then(r => {
            googleTakeout = r[0];
            syncChromeHistory = r[1];
            syncChromeBookmarks = r[2];
            //return googleTakeout('chrome');
        })
        .then(() => syncChromeHistory())
        .then(() => syncChromeBookmarks())
}
module.exports = syncChrome;
