var importer = require('../Core');
var chrono = require('chrono-node');

var ISODateString;
var correctTimeLimits = (options) => {
    return importer.import('convert date to ISO')
        .then(ISODateString => {
            if (typeof options.timeMin !== 'undefined') {
                options.timeMin = ISODateString(
                    chrono.parseDate(options.timeMin));
            }
            if (typeof options.timeMax !== 'undefined') {
                options.timeMax = ISODateString(
                    chrono.parseDate(options.timeMax));
            }
            return options;
        });
};
module.exports = correctTimeLimits;
correctTimeLimits;

