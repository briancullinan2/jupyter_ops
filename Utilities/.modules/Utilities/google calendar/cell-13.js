var importer = require('../Core');var chrono = require('chrono-node');var ISODateString = importer.import('convert date to ISO');
var correctTimeLimits = (options) => {    if (typeof options.timeMin !== 'undefined') {
        options.timeMin = ISODateString(
            chrono.parseDate(options.timeMin));
    }
    if (typeof options.timeMax !== 'undefined') {
        options.timeMax = ISODateString(
            chrono.parseDate(options.timeMax));
    }
    return options;};module.exports = correctTimeLimits;correctTimeLimits;