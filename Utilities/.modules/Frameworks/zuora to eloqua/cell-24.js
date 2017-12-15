var importer = require('../Core');
var syncZuoraToEloqua = importer.import('sync zuora');

function handler(event, context, callback) {
    var body = event;
    if (event.body && event.body !== '') {
        body = JSON.parse(event.body);
    }
    // TODO: add Eloqua Notify service entry point for retrieving temporary data?
    // TODO: parse action and call from notify service or call with posted data?
    // TODO: add an entry point for Zuora subscription callout to update single records in eloqua?
    return syncZuoraToEloqua()
        .then(() => callback(null, {
            'statusCode': 200,
            'headers': { 'Content-Type': 'text/plain' },
            'body': 'Success!'
        }))
        .catch(e => callback(e, {
            'statusCode': 500,
            'headers': { 'Content-Type': 'text/plain' },
            'body': 'Error: ' + e.message
        }));
}
module.exports = handler;
