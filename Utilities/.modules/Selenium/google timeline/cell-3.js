var importer = require('../Core');
var fs = require('fs');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var PROJECT_PATH = '/Users/briancullinan/Timeline';

var readTimelinePage;
var readAllPages = () => {
    // TODO: add start/stop conditions
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(2016, 8, 21);
    var secondDate = new Date();
    var days = Math.round(
        Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
    var promises = [];
    for (var c = 0; c < days; c++) {
        promises[promises.length] = (resolve) => {
            var result;
            return client
                .then(() => typeof readTimelinePage !== 'undefined'
                    ? []
                    : importer.import('single timeline page', {client}))
                .then(readTimelinePage => readTimelinePage())
                .then(r => result = r)
                .click('.previous-date-range-button')
                .pause(3000)
                .then(() => {
                    if (typeof result === 'undefined') {
                        resolve();
                    }
                    fs.writeFileSync(
                        PROJECT_PATH + '/timeline-' + result[0].timeline + '_.json',
                        JSON.stringify(result, null, 4))
                    resolve(result);
                })
        };
    }
    return promises;
}
if (typeof client.getGoogleTimeline == 'undefined') {
    client.addCommand('readAllPages', readAllPages);
}
module.exports = readAllPages;
readAllPages;
