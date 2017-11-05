var google = require('googleapis');
var calendar = google.calendar('v3');
var importer = require('../Core');

var {
    getOauthClient,
    listEvents,
    correctCalendarId
} = importer.import([
    'list events',
    'import google calendar api',
    'lookup calendar name'
]);

var options = {};
describe('calendar service', () => {
    beforeEach(() => {
    })
    
    it('should list events from around today', (done) => {
        (typeof options.auth === 'undefined'
           ? getOauthClient(options)
           : Promise.resolve([]))
        .then(() => correctCalendarId(Object.assign(options, {
            calendarId: 'commands'
        })))
        .then(() => listEvents({
            auth: options.auth,
            calendarId: options.calendarId,
            timeMin: '12 AM today',
            timeMax: 'next hour today'
        }))
        .then(r => {
            assert(r.length > 0)
            done()
        })
    })
})
