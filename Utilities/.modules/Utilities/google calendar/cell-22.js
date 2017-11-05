var google = require('googleapis');var calendar = google.calendar('v3');var importer = require('../Core');
var chrono = require('chrono-node');var googlePromise = (func) => {    return new Promise((resolve, reject) => func((err, response) => {        if (err) reject(err);        try {        } catch (e) {            reject(e);        }        setTimeout(() => resolve(response), 100);    })).catch(e => console.log(e));};var listEvents, eventCache = {};var updateEvent = (event, options) => {
    var startDate = chrono.parseDate(event.start.dateTime);
    var day = new Date(Math.floor(startDate.getTime() / 60 / 1000 / 60 / 24) * 24 * 60 * 60 * 1000);
    var dayEnd = new Date(day);
    dayEnd.setDate(dayEnd.getDate() + 1);
    var todaysEvents;
    if(typeof eventCache[options.calendarId] === 'undefined') {
        eventCache[options.calendarId] = {};
    }
    if(typeof eventCache[options.calendarId][day.getTime()] !== 'undefined') {
        todaysEvents = Promise.resolve(eventCache[options.calendarId][day.getTime()])
    } else {
        console.log(day);
        todaysEvents = importer.import([
            'list events',
            'convert date iso'
        ])
            .then(r => r.listEvents({
                auth: options.auth,
                calendarId: options.calendarId,
                timeMin: r.ISODateString(day),
                timeMax: r.ISODateString(dayEnd)
            }))
    }
    return todaysEvents        .then(m => {
            eventCache[options.calendarId][day.getTime()] = m;            const actionsArray = [];            const matches = m.filter(match => match.event.summary === event.summary
                                    && new Date(match.event.start.dateTime).getTime() === new Date(event.start.dateTime).getTime());            if (matches.length > 0) {                const descriptions = [].concat(                    ...JSON.parse(event.description),                    ...matches.map(match => {
                        try {
                            return JSON.parse(match.event.description)
                        } catch (e) {
                            return [];
                        }
                    }));                // TODO: make sure there are no duplicates                const urls = descriptions.map(d => d.url);                const unique = descriptions                    .filter((d, i) => urls.indexOf(d.url) === i);                // patch the first match
                var newDescription = JSON.stringify(unique, null, 4);
                if(matches[0].event.description !== newDescription) {                    actionsArray.push(googlePromise(                        calendar.events.patch.bind(calendar.events, {                            eventId: matches[0].event.id,                            calendarId: options.calendarId,                            auth: options.auth,                            resource: {                                description: newDescription                            }                        })));
                }                // TODO: delete the rest                for (const match of matches.slice(1)) {                    actionsArray.push(googlePromise(                        calendar.events.delete.bind(calendar.events, {                            eventId: match.event.id,                            calendarId: options.calendarId,                            auth: options.auth                        })));                }            } else {
                actionsArray.push(googlePromise(                    calendar.events.insert.bind(calendar.events, Object.assign({}, {                        calendarId: options.calendarId,                        auth: options.auth,                        resource: event                    }))));            }            return actionsArray;        })        .catch(e => console.log(e))};module.exports = updateEvent;