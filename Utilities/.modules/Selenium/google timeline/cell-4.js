var chrono = require('chrono-node');

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var readTimelinePage = () => {
    return client.getAllXPath({
        day: ['//*[contains(@class,"timeline-subtitle")]//text()|//*[contains(@class,"timeline-title")]//text()'],
        items: [
            '//*[contains(@class,"timeline-item")]/parent::*/*[@jsinstance]',
            {
                duration: './/*[contains(@class, "duration-text")]//text()',
                data: './/*[contains(@class, "timeline-item")]/@data-segment-key',
                title: './/*[contains(@class, "timeline-item-title-content")][.//i]/*[not(self::i)]//text()|.//*[contains(@class, "timeline-item-title-content")][not(.//i)]//text()',
                location: './/*[contains(@class, "timeline-item-text")][not(contains(@class,"add-child"))][.//a]/a//*[not(self::i)]//text()|.//*[contains(@class, "timeline-item-text")][not(contains(@class,"add-child"))][not(.//a)]/text()'
            }
        ]
    })
        .then(r => {
            if (r.day.length == 0) {
                return;
            }
            var currDate = chrono.parseDate(r.day[0] + '')
                || chrono.parseDate(r.day[1] + '');
            var newKey = currDate.getDate()
                + months[currDate.getMonth()]
                + (currDate.getFullYear() + '').substr(2, 2);
            return r.items.map(i => {
                var timelineData = (i.data + '').split(':');
                var start, end, length;
                if (timelineData.length == 3) {
                    start = new Date(parseFloat(timelineData[1]));
                    end = new Date(parseFloat(timelineData[2]));
                    length = end.getTime() - start.getTime();
                } else {
                    start = chrono.parseDate(r.day + ' ' + i.duration.join('').trim().split('-')[0]);
                    end = chrono.parseDate(r.day + ' ' + i.duration.join('').trim().split('-')[1]);
                    length = 0;
                }
                var traveling = (/(Driving|Walking|Traveling|Flying|Moving).*\s+-\s+(.*),/ig).exec(i.title + ', ' + i.location)
                return ({
                    traveling: traveling ? traveling[0] : false,
                    type: 'timeline',
                    timeline: newKey,
                    name: i.title,
                    location: i.location,
                    time: start,
                    length: isNaN(length) ? 0 : length
                })
            })
        })
        .catch(e => console.log(e))
};
if (typeof client.readTimelinePage == 'undefined') {
    client.addCommand('readTimelinePage', readTimelinePage);
}
module.exports = readTimelinePage;
readTimelinePage;
