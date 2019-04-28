/**
  * Written by Brian Cullinan, exported using magic.
  * Copyright (c) 2019 by Brian Cullinan, All rights reserved.
  *
  * get google data sheet?
  * 
  * google sheet array objects?
  * 
**/

var Remarkable = require('remarkable');
var md = new Remarkable({html: true, xhtmlOut: true, breaks: true});
var util = require('util');

function getDataSheet(worksheet) {
    if(!worksheet) {
        return Promise.resolve(false);
    }
    return util.promisify(worksheet.getCells)({
        'min-row': 1,
        'max-row': 100,
        'return-empty': false
    })
        .then(cells => {
            var columns = [];
            return cells.reduce((acc, o, arr) => {
                if (o.row == 1) {
                    columns[o.col] = o.value;
                    return acc;
                }
                if (!acc[o.row - 2]) {
                    acc[o.row - 2] = {};
                }
                var html = md.render(o.value);
                // if all markdown did was insert a paragraph and line break, use value instead
                if(html.replace(/<\/?p>|\s+/ig, '') == o.value.replace(/<\/?p>|\s+/ig, '')) {
                    html = o.value;
                }
                acc[o.row - 2][columns[o.col]] = html;
                return acc;
            }, []);
        })
}
module.exports = getDataSheet;
