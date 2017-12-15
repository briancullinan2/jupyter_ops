var importer = require('../Core');
var util = require('util');
var xlsx = require('xlsx');
var request = importer.import('request polyfill');
var mapDataToFields = importer.import('map zuora data to eloqua fields');

function getAuthHeaders(zuoraConfig) {
    return {
        'Content-Type': 'application/json',
        'apiAccessKeyId': zuoraConfig.rest_api_user,
        'apiSecretAccessKey': zuoraConfig.rest_api_password,
    };
}

function zuoraBulkExport(query, zuoraConfig) {
    return request({
        followAllRedirects: true,
        uri: zuoraConfig.rest_api_url + '/object/export',
        json: query,
        method: 'POST',
        headers: getAuthHeaders(zuoraConfig)
    }).then(r => r.body.Id)
}

function zuoraBulkExportStatus(exportId, zuoraConfig) {
    console.log('waiting...');
    return request({
        followAllRedirects: true,
        uri: zuoraConfig.rest_api_url + '/object/export/' + exportId,
        method: 'GET',
        headers: getAuthHeaders(zuoraConfig)
    }).then(r => {
        if(r.headers['content-type'].indexOf('application/json') > -1) {
            r.body = JSON.parse(r.body);
        }
        if (r.body.Status === 'Completed') {
            return r.body.FileId;
        } else if (r.body.Status === 'Processing') {
            return new Promise(resolve => setTimeout(resolve, 500))
                .then(() => zuoraBulkExportStatus(exportId, zuoraConfig));
        } else {
            throw new Error('Export status error ' + r.statusCode + ' ' + r.body.Status);
        }
    });
}

function zuoraBulkExportFile(fileId, zuoraConfig) {
    return request({
        followAllRedirects: true,
        uri: zuoraConfig.rest_api_url + '/files/' + fileId,
        method: 'GET',
        headers: getAuthHeaders(zuoraConfig)
    }).then(r => r.body)
}

function csvToJson(csv) {
    const workbook = xlsx.read(new Buffer(csv), {type:"buffer"});
    return xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
}

module.exports = {
    mapDataToFields,
    csvToJson,
    zuoraBulkExport,
    zuoraBulkExportFile,
    zuoraBulkExportStatus,
}
