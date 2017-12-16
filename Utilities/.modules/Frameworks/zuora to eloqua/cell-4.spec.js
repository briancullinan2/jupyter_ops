var assert = require('assert');
var fs = require('fs');
var xlsx = require('xlsx');
var importer = require('../Core');
var getQuery = importer.import('zuora renewals query');
var {
    zuoraBulkExport,
    zuoraBulkExportStatus,
    zuoraBulkExportFile,
    csvToJson,
    mapDataToFields
} = importer.import('zuora export service');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE || '';

describe('zuora oauth', () => {
    var zuoraConfig;
    
    beforeEach(() => {
        zuoraConfig = JSON.parse(fs.readFileSync(PROFILE_PATH + '/.credentials/zuoraRest_sandbox.json').toString().trim());
        
        var oldUrl = zuoraConfig.rest_api_url;
        zuoraConfig.rest_api_url = zuoraConfig.rest_api_url.replace(/http.*\.zuora\.com\/v1/ig, 'http://localhost:18888');
        assert(oldUrl !== zuoraConfig.rest_api_url);
    })
    
    it('should connect to zuora using oauth', (done) => {
        zuoraBulkExport(getQuery('beginning of October', 'beginning of November'), zuoraConfig)
            .then(r => {
                assert(r);
                done();
            })
    })
    
    it('should wait for the export to complete', (done) => {
        zuoraBulkExport(getQuery('first of October', 'first of November'), zuoraConfig)
            .then(exportId => zuoraBulkExportStatus(exportId, zuoraConfig))
            .then(r => {
                assert(r);
                done();
            })
    })
    
    it('should download the csv file', (done) => {
        zuoraBulkExport(getQuery('first of October', 'first of November'), zuoraConfig)
            .then(exportId => zuoraBulkExportStatus(exportId, zuoraConfig))
            .then(fileId => zuoraBulkExportFile(fileId, zuoraConfig))
            .then(r => {
                assert(r.length > 0);
                done();
            })
    })
    
    it('should convert CSV to JSON', (done) => {
        zuoraBulkExport(getQuery('first of October', 'first of November'), zuoraConfig)
            .then(exportId => zuoraBulkExportStatus(exportId, zuoraConfig))
            .then(fileId => zuoraBulkExportFile(fileId, zuoraConfig))
            .then(r => csvToJson(r))
            .then(r => {
                assert(r.length > 0);
                done();
            })
    })
})

