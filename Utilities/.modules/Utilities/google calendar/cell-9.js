var importer = require('../Core');var {
    filterDistant,
    getOauthClient,
    listEvents,
    graphDates
} = importer.import([    'import google calendar api',    'how to list events',    'number of days between events',    'display recurrence line graph']);
$$.async();
listEvents({    q: 'period',    calendarId: 'p4685f6at8ccctenocjlqgnqss@group.calendar.google.com'})    .then(r => $$.svg(graphDates(filterDistant(r))))    .catch(e => $$.sendError(e));