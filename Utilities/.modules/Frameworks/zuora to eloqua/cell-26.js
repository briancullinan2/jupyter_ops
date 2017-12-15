var importer = require('../Core');
var assert = require('assert');
var fs = require('fs');
var {
    zuoraBulkExport,
    zuoraBulkExportStatus,
    zuoraBulkExportFile,
    csvToJson,
    mapDataToFields
} = importer.import('zuora export');
var getQuery = importer.import('zuora query');
var {
    eloquaOauth,
    eloquaBulkImport,
    eloquaBulkImportData,
    eloquaBulkImportSync
} = importer.import('bulk eloqua import');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE || '';

var records;
function getCurrentMonth(months = 0, zuoraConfig) {
    var start = new Date();
    start.setMonth(start.getMonth() - months);
    start.setDate(1);
    start.setHours(0, 0, 0);
    var end = new Date();
    end.setMonth(end.getMonth() + months + 1);
    end.setDate(1);
    end.setHours(0, 0, 0);
    if(start.getMonth() > end.getMonth()) {
        end.getFullYear(end.getFullYear() + 1)
    }
    
    if(typeof records !== 'undefined') {
        return Promise.resolve(records);
    }
    
    console.log(getQuery(start.toString(), end.toString()));
    
    return zuoraBulkExport(getQuery(start.toString(), end.toString()), zuoraConfig)
        .then(exportId => zuoraBulkExportStatus(exportId, zuoraConfig))
        .then(fileId => zuoraBulkExportFile(fileId, zuoraConfig))
        .then(r => (records = csvToJson(r)))
}

function syncZuoraToEloqua(months = 0) {
    var eloquaConfig = JSON.parse(fs.readFileSync(PROFILE_PATH + '/.credentials/eloqua_production.json').toString().trim());
    var zuoraConfig = JSON.parse(fs.readFileSync(PROFILE_PATH + '/.credentials/zuoraRest_production.json').toString().trim());
    
    var accounts, eloquaToken, importUri;
    return getCurrentMonth(months, zuoraConfig)
        .then(() => (accounts = mapDataToFields(records)))
        .then(() => eloquaOauth(eloquaConfig))
        .then(r => {
            eloquaToken = r;
            assert(r.expires > (new Date()).getTime());
            return eloquaBulkImport(eloquaToken, eloquaConfig)
        })
        .then(r => {
            importUri = r;
            return eloquaBulkImportData(accounts, importUri, eloquaToken, eloquaConfig);
        })
        .then(() => eloquaBulkImportSync(importUri, eloquaToken, eloquaConfig))
        .then(() => accounts)
        .catch((e) => console.log(e))
}
module.exports = syncZuoraToEloqua;

if(typeof $$ !== 'undefined') {
    $$.async();
    syncZuoraToEloqua(6)
        .then(r => $$.sendResult(r))
        .catch(e => $$.sendError(e))
}
