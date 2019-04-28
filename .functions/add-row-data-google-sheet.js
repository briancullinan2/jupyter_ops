/**
  * Written by Brian Cullinan, exported using magic.
  * Copyright (c) 2019 by Brian Cullinan, All rights reserved.
  *
  * add a row of data to a google sheet?
  * 
  * add row data google sheet?
  * 
**/

var path = require('path');
var util = require('util');
var fs = require('fs');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var credentials;
if(fs.existsSync('./sheet to web-3104d99bba02.json')) {
    credentials = require('./sheet to web-3104d99bba02.json');
} else {
    credentials = require(path.join(PROFILE_PATH, '.credentials/sheet to web-3104d99bba02.json'));
}
var GoogleSpreadsheet = require('google-spreadsheet');

function addRow(docId, newRow) {
    var doc = new GoogleSpreadsheet(docId);
    
    return util.promisify(doc.useServiceAccountAuth)(credentials)
        .then(() => util.promisify(doc.getInfo)())
        .then(info => {
            console.log('Loaded doc: ' + info.title + ' by ' + info.author.email);
            return info;
        })
        .then(info => {
            sheet = info.worksheets[0];
            console.log('sheet #1: ' + sheet.title + ' ' + sheet.rowCount + 'x' + sheet.colCount);

            return util.promisify(doc.addRow)(1, newRow);
        });
}

module.exports = addRow;