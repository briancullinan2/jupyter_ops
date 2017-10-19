var {JSDOM} = require('jsdom');
var fs = require('fs');
var importer = require('../Core');

// parse bookmark html
var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
// TODO: search using glob but include same list of excludes, how to abstract?
var bookmarks = fs.readFileSync(PROFILE_PATH + '/Documents/bookmarks_9_27_17.html').toString();
var dom = new JSDOM(bookmarks);

var getOauthClient, parseBookmarks, ISODateString, updateEvent;
var options = {
    calendarId: 'h8mi0eg8gmgudajbmaepjjvifc@group.calendar.google.com'
};

var syncChromeBookmarks = () => {
    return importer.import([
        'import google calendar api',
        'parse bookmarks file',
        'date iso',
        'update create merge event'
    ], {
        client: {
            execute: (func, ...args) => Promise.resolve({
                value: func.apply(dom.window.document, args)
            }),
            addCommand: () => {
            }
        },
        document: dom.window.document,
        XPathResult: {ORDERED_NODE_ITERATOR_TYPE: 5}
    })
        .then(r => {
            getOauthClient = r[0];
            parseBookmarks = r[1];
            ISODateString = r[2];
            updateEvent = r[3];
            return getOauthClient(options);
        })
        .then(() => parseBookmarks())
        // TODO: copy to chrome history
        .then(links => {
            return Object.keys(links).map(t => ({
                start: {
                    dateTime: ISODateString(new Date(parseInt(t)))
                },
                end: {
                    dateTime: ISODateString(new Date(parseInt(t) + 60 * 30 * 1000))
                },
                summary: links[t].map(l => l.folder).filter((l, i, a) => a.indexOf(l) === i),
                description: JSON.stringify(links[t], null, 4)
            }))
        })
        .then(results => {
            return importer.runAllPromises(results
                .map(event => resolve => updateEvent(event, options)
                    .then(r => importer.runAllPromises(r))
                    .then(r => resolve(r))
                    .catch(e => {
                        console.log(e);
                        resolve()
                    })))
        })
}
module.exports = syncChromeBookmarks;

