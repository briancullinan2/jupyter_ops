var google = require('googleapis');
var calendar = google.calendar('v3');

var filterCalendar = (options) => {
    var rexexp = new RegExp(options.calendarId, 'ig');
    var matches = calendarList.items
        .filter(c => c.id == options.calendarId);
    if (matches.length == 0) {
        matches = calendarList.items
            .filter(c => c.summary.match(rexexp));
    }
    if (lastCalendar !== matches[0].summary) {
        lastCalendar = matches[0].summary;
        console.log('Using calendar: ' + matches[0].summary
            + ' - ' + matches[0].id);
    }
    options.calendarId = matches[0].id;
    return options;
}

var calendarList = [], lastCalendar;
var correctCalendarId = (options) => {
    if (typeof options.calendarId == 'undefined') {
        return Promise.resolve(Object.assign(options, {
            calendarId: 'primary'
        }))
    }
    if (calendarList.length > 0) {
        return filterCalendar(options);
    }
    return (calendarList.length == 0
        ? new Promise((resolve, reject) => {
            calendar.calendarList.list({
                auth: options.auth
            }, (err, response) => {
                if (err) reject(err);
                try {
                    resolve(response);
                } catch (e) {
                    reject(e);
                }
            });
        })
        : Promise.resolve(calendarList))
        .then(r => {
            calendarList = r;
            return filterCalendar(options);
        })
        .catch(e => console.log(e))
};
module.exports = correctCalendarId;
correctCalendarId;

