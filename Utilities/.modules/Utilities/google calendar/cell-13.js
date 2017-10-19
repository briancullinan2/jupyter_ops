var importer = require('../Core');
var url = require('url');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var PROJECT_PATH = PROFILE_PATH + '/Downloads/Takeout 6/Chrome/BrowserHistory.json';

var loadChromeHistory = (file) => {
    var chromeHistory = {};
    return importer.streamJson(file, [true, {emitPath: true}], (match) => {
        if (match.path[0] === 'Browser History') {
            var timeGroup = Math.round(match.value.time_usec / 60 / 30 / 1000000) * 60 * 30 * 1000;
            if (typeof chromeHistory[timeGroup] === 'undefined') {
                chromeHistory[timeGroup] = [];
            }
            match.value.host = url.parse(match.value.url).hostname;
            var hostAlreadyListed = chromeHistory[timeGroup]
                .filter(h => h.host === match.value.host)
            if (hostAlreadyListed.length === 0) {
                chromeHistory[timeGroup].push(match.value);
            } else {
                if (typeof hostAlreadyListed[0].urls === 'undefined') {
                    hostAlreadyListed[0].urls = {};
                }
                hostAlreadyListed[0].urls[match.value.time_usec] = match.value.url;
            }
        }
    })
        .then(() => chromeHistory)
}

var getOauthClient, ISODateString, updateEvent;
var options = {
    calendarId: 'h8mi0eg8gmgudajbmaepjjvifc@group.calendar.google.com'
};

var syncChromeHistory = () => {
    return importer.import([
        'import google calendar api',
        'convert date iso',
        'update create merge event'
    ])
        .then(r => {
            getOauthClient = r[0];
            ISODateString = r[1];
            updateEvent = r[2];
            return getOauthClient(options);
        })
        .then(() => loadChromeHistory(PROJECT_PATH))
        .then(links => {
            console.log(new Date(parseInt(Object.keys(links)[0])));
            return Object.keys(links).map(t => ({
                start: {
                    dateTime: ISODateString(new Date(parseInt(t)))
                },
                end: {
                    dateTime: ISODateString(new Date(parseInt(t) + 60 * 30 * 1000))
                },
                summary: 'Chrome activity',
                description: JSON.stringify(links[t], null, 4)
            }))
        })
        .then(results => {
            return importer.runAllPromises(results
                .map(event => resolve => {
                    console.log(event);
                    return updateEvent(event)
                        .then(r => importer.runAllPromises(r))
                        .then(r => resolve(r))
                        .catch(e => {
                            console.log(e);
                            resolve()
                        })
                }))
        })
        .catch(e => console.log(e))
}
module.exports = syncChromeHistory;
