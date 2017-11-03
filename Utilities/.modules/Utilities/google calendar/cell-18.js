var importer = require('../Core');

var options = {};
var listEvents, getOauthClient, sumEvents, d3Swimlane;

var now = new Date();
var calendarSearchToHeatmap = (searches) => {
    return importer.import([
        'list events',
        'import google calendar api',
        'sum a list of events',
        'd3 calendar'
    ])
        .then(r => {
            listEvents = r[0];
            getOauthClient = r[1];
            sumEvents = r[2];
            d3Heatmap = r[3];
            return getOauthClient(options);
        })
        .then(() => {
            return importer.runAllPromises(searches
                .map((s, i) => (resolve) => listEvents({
                    auth: options.auth,
                    q: s
                })
                    .then(r => {
                        //console.log(s);
                        //console.log(r.map(e => e.event.summary));
                        resolve(r.map(e => ({
                            id: e.event.id,
                            lane: i,
                            start: new Date(e.event.start.dateTime),
                            end: new Date(e.event.end.dateTime),
                            class: e.event.end.dateTime > now ? 'future' : 'past',
                            desc: e.event.summary
                        })));
                    })
                    .catch(e => console.log(e))))
        })
        .then(r => d3Heatmap(r))
        .catch(e => console.log(e))
}

$$.async();
calendarSearchToHeatmap([
    'study sauce',
    /*
    'portal',
    'renewal',
    'work on sos',
    'jupyter',
    'jupytangular',
    'unit tests',
    'selenium',
    'angular',
    'mind spree',
    '"c#"',
    'docker'
    */
])
    .then(r => $$.html(r))
    .catch(e => $$.sendError(e))
