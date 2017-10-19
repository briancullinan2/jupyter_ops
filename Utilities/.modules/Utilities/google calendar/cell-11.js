var google = require('googleapis');
var calendar = google.calendar('v3');
var importer = require('../Core');

var googlePromise = (func) => {
    return new Promise((resolve, reject) => func((err, response) => {
        if (err) reject(err);
        try {
        } catch (e) {
            reject(e);
        }
        setTimeout(() => resolve(response), 100);
    })).catch(e => console.log(e));
};

var listEvents;
var updateEvent = (event, options) => {
    return importer.import('list events')
        .then(listEvents => listEvents({
            auth: options.auth,
            calendarId: options.calendarId,
            timeMin: event.start.dateTime,
            timeMax: event.end.dateTime
        }))
        .then(m => {
            const actionsArray = [];
            const matches = m.filter(match => match.event.summary === event.summary);
            if (matches.length > 0) {
                const descriptions = [].concat(
                    ...JSON.parse(event.description),
                    ...matches.map(match => JSON.parse(match.event.description)));
                // TODO: make sure there are no duplicates
                const urls = descriptions.map(d => d.url);
                const unique = descriptions
                    .filter((d, i) => urls.indexOf(d.url) === i);

                // patch the first match
                actionsArray.push(googlePromise(
                    calendar.events.patch.bind(calendar.events, {
                        eventId: matches[0].event.id,
                        calendarId: options.calendarId,
                        auth: options.auth,
                        resource: {
                            description: JSON.stringify(unique, null, 4)
                        }
                    })));

                // TODO: delete the rest
                for (const match of matches.slice(1)) {
                    actionsArray.push(googlePromise(
                        calendar.events.delete.bind(calendar.events, {
                            eventId: match.event.id,
                            calendarId: options.calendarId,
                            auth: options.auth
                        })));
                }
            } else {
                actionsArray.push(googlePromise(
                    calendar.events.insert.bind(calendar.events, Object.assign({}, {
                        calendarId: options.calendarId,
                        auth: options.auth,
                        resource: event
                    }))));
            }
            return actionsArray;
        })
        .catch(e => console.log(e))
};
module.exports = updateEvent;
