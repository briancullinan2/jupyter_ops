/**
  * Written by Brian Cullinan, exported using magic.
  * Copyright (c) 2019 by Brian Cullinan, All rights reserved.
  *
  * get sheet identifier from link?
  * 
**/

var util = require('util');
var GoogleSpreadsheet = require('google-spreadsheet');

function getSheet(link) {
    var doc = link.replace(/https:\/\/docs.google.com\/spreadsheets\/d\/|\/edit.*$|\/copy.*$/ig, '');
    if(typeof doc === 'string') {
        doc = new GoogleSpreadsheet(doc);
    }
    return util.promisify(doc.getInfo)()
}

module.exports = getSheet;