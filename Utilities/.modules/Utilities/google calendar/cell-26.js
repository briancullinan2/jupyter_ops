var {JSDOM} = require('jsdom');var fs = require('fs');var importer = require('../Core');var glob = require('glob');
var path = require('path');
var fs = require('fs');
// TODO: search using glob but include same list of excludes, how to abstract?var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var PROJECT_PATH = PROFILE_PATH + '/Downloads';
var files = glob.sync('Takeout*/Chrome/Bookmarks.html', {cwd: PROJECT_PATH})
    .map(f => path.join(PROJECT_PATH, f));
files.sort((a, b) => fs.statSync(a).ctime - fs.statSync(b).ctime);
var BOOKMARKS_PATH = files.pop();
var getOauthClient, parseBookmarks, ISODateString, updateEvent;var options = {    calendarId: 'h8mi0eg8gmgudajbmaepjjvifc@group.calendar.google.com'};var syncChromeBookmarks = () => {    // parse bookmark html
    var dom = new JSDOM(BOOKMARKS_PATH);
    return importer.import([        'import google calendar api',        'convert date iso',        'update create merge event'    ])
        .then(r => {            getOauthClient = r[0];            ISODateString = r[1];            updateEvent = r[2];            return getOauthClient(options);        })
        .then(() => importer.import('all xpath elements', {
            client: {
                execute: (func, ...args) => Promise.resolve({
                    value: func.apply(dom.window.document, args)
                }),
                addCommand: () => {
                }
            },
            document: dom.window.document,
            XPathResult: {ORDERED_NODE_ITERATOR_TYPE: 5}
        }))
        .then(getAllXPath => importer.import('parse bookmarks file', {getAllXPath}))        .then(parseBookmarks => parseBookmarks())        // TODO: copy to chrome history        .then(links => {            return Object.keys(links).map(t => ({                start: {                    dateTime: ISODateString(new Date(parseInt(t)))                },                end: {                    dateTime: ISODateString(new Date(parseInt(t) + 60 * 30 * 1000))                },                summary: links[t].map(l => l.folder).filter((l, i, a) => a.indexOf(l) === i),                description: JSON.stringify(links[t], null, 4)            }))        })        .then(results => {            return importer.runAllPromises(results                .map(event => resolve => updateEvent(event, options)                    .then(r => importer.runAllPromises(r))                    .then(r => resolve(r))                    .catch(e => {                        console.log(e);                        resolve()                    })))        })}module.exports = syncChromeBookmarks;