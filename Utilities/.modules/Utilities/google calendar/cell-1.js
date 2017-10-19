var google = require('googleapis');
var calendar = google.calendar('v3');
var importer = require('../Core');

var processResult = (err, response, options) => {
    if (err) {
        console.log('The API returned an error: ' + err);
        throw err;
    }
    resultEvents = []; // reset the array
    var events = response.items;
    if (events.length === 0) {
        const q = Object.assign({}, options);
        q.auth = null;
        console.log('No events found for ' + JSON.stringify(q));
    } else {
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            var start = event.start.dateTime || event.start.date;
            resultEvents[resultEvents.length] = {
                start: new Date(start), event: event
            };
        }
    }
    return resultEvents;
};


/**
 * Lists the next 10 events on the user's primary calendar.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
var resultEvents = [];
var getOauthClient, correctTimeLimits, correctCalendarId;
var listEvents = (options = {calendarId: 'primary'}) => {
    return importer.import([
        'import calendar google api',
        'correct dates time',
        'lookup calendar name'
    ])
        .then(r => {
            getOauthClient = r[0];
            correctTimeLimits = r[1];
            correctCalendarId = r[2];
            if (typeof options.auth === 'undefined') {
                return getOauthClient(options);
            }
        })
        .then(() => correctTimeLimits(options))
        .then(() => correctCalendarId(options))
        .then(() => {
            if (typeof options['calendarId'] === 'undefined') {
                options['calendarId'] = 'primary';
            }
            var data = Object.assign({}, options, {
                maxResults: 100,
                singleEvents: true,
                orderBy: 'startTime'
            });
            return new Promise((resolve, reject) => {
                calendar.events.list(data, (err, response) => {
                    if (err) reject(err);
                    try {
                        var events = processResult(err, response, options);
                        resolve(events);
                    } catch (e) {
                        reject(e);
                    }
                });
            });
        });
};
module.exports = listEvents;

