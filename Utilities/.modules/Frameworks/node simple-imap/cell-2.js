// Fetch emails from the last number of {days}
var delay = 24 * 3600 * 1000 * days;
var lastWeek = new Date();
lastWeek.setTime(Date.now() - delay);
lastWeek = lastWeek.toISOString();
var searchCriteria = ['SEEN', ['SINCE', lastWeek], ['FROM', from]];
var fetchOptions = {bodies: ['HEADER.FIELDS (FROM TO SUBJECT DATE)'], struct: true};
var messages = [];
$$.async();
connection.search(searchCriteria, fetchOptions).then(m => {
    messages = m;
    return m;
}).then((m) => $$.done(m)).catch((e) => $$.done(e));

