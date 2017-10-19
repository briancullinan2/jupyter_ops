var glob = require('glob');
var fs = require('fs');
var path = require('path');
var importer = require('../Core');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var project = PROFILE_PATH + '/Conversations';
var filename = path.join(project, 'events.json');

var regexToArray = (ex, str, i = 0) => {
    var co = [];
    var m;
    while ((m = ex.exec(str)) && co.push(m[i])) ;
    return co;
};
var getEvents = (file) => {
    var html = fs.readFileSync(file).toString();
    return regexToArray(/href="([^"?]*)/ig, html, 1)
        .filter(h => h.indexOf('.js') === -1)
        .filter(h => h.indexOf('.css') === -1)
        .filter(h => h.match(/events\/[0-9]+/ig));
};

var scrapeFacebookEvent, loginFacebook;
var scrapeFacebookEvents = () => {
    var eventFiles = glob.sync(
        '**/*@(Past|Events|Cullinan).htm',
        {cwd: project});
    return importer.import('selenium cell')
        .then(runSeleniumCell => runSeleniumCell([
            'log in facebook',
            'facebook event'
        ]))
        .then(r => {
            console.log(r);
            loginFacebook = r[0];
            scrapeFacebookEvent = r[1];
            return loginFacebook();
        })
        .then(() => {
            var events = [
                ...getEvents(path.join(project, eventFiles[0])),
                ...getEvents(path.join(project, eventFiles[1])),
                ...getEvents(path.join(project, eventFiles[2]))
            ]
                .filter((elem, pos, arr) => arr.indexOf(elem) === pos);
            console.log(events);
            return importer.runAllPromises(events
                .map(e => resolve => scrapeFacebookEvent(e)
                    .then(r => resolve(r))
                    .catch(r => resolve(r))))
        })
        .then(r => {
            fs.writeFileSync(filename, JSON.stringify(r, null, 4));
            return r;
        })
};
module.exports = scrapeFacebookEvents;
