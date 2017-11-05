var importer = require('../Core');
var fs = require('fs');
var runSeleniumCell = importer.import(['selenium cell']);
var {
    loginFacebook, listFacebookThreads, readFacebookThread
} = runSeleniumCell([
    'log in facebook',
    'list facebook threads',
    'messages from facebook',
]);

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var project = PROFILE_PATH + '/Conversations';

$$.async();
loginFacebook()
    .then(threads => {
        try { threads = JSON.parse(fs.readFileSync(project + '/facebook-threads.json')); }
        catch (e) { threads = []; }
    // TODO: compare glob/stat to see which threads need updating
        return importer.runAllPromises(threads.slice(450, 600)
            .map(t => ((resolve) => readFacebookThread(t).then((r) => resolve(r)))));
    })
    // TODO: when threads gets to 100% call listFacebookThreads()
    //.then(() => listFacebookThreads())
