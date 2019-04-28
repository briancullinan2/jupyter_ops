/**
  * Written by Brian Cullinan, exported using magic.
  * Copyright (c) 2019 by Brian Cullinan, All rights reserved.
  *
  * get sheet identifier from link?
  * 
**/

var util = require('util');
var GoogleSpreadsheet = require('google-spreadsheet');
var getDataSheet = require('./get-google-data-sheet.js');
var addRow = require('./add-row-data-google-sheet.js');

var purchaseId = '1kWjkjLGxQyzFUzRLBk3LpcjPW3UjcaF-PBMDX_3hZfM';
var project = 'spahaha-ea443';

function safeName(name) {
    return name.replace(/[^a-z\-]/ig, '-').substr(0, 40);
}

function getSheet(link) {
    var docId = link.replace(/https:\/\/docs.google.com\/spreadsheets\/d\/|\/edit.*$|\/copy.*$/ig, '');
    var name, title;
    return util.promisify((new GoogleSpreadsheet(docId)).getInfo)()
        // return assigned subdomain
        .then(info => {
            name = safeName(info.title.replace(/\s*(config|configuration)\s*/ig, ''));
            title = info.title;
            return util.promisify((new GoogleSpreadsheet(purchaseId)).getInfo)();
        })
        .then(signups => {
            return getDataSheet(signups.worksheets.filter(w => w.title.includes('Purchases'))[0]);
        })
        .then(purchases => {
            var match = purchases.filter(p => p.sheet == docId)[0];
            if(match) {
                console.log(`Purchase ${docId} already exists: ${match.domain} or ${match.bucket}`);
                return Promise.resolve(match.domain || match.bucket);
            }
            return addRow(purchaseId, {
                timestamp: Date.now(),
                title: title,
                email: '',
                address: '',
                domain: '',
                bucket: name + '.sheet-to-web.com',
                project: project,
                sheet: docId
            })
                .then(() => name + '.sheet-to-web.com')
        })
}

module.exports = getSheet;