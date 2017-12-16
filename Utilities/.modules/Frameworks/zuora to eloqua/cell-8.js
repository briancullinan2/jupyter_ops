var util = require('util');
var importer = require('../Core');
var request = importer.import('http request polyfill');
var {
    createTemplate
} = importer.import('eloqua create template');

function eloquaOauth(eloquaConfig) {
    if (typeof eloquaConfig === 'undefined'
        || eloquaConfig === null
        || typeof eloquaConfig.rest_api_company === 'undefined'
        || typeof eloquaConfig.rest_api_user === 'undefined'
        || typeof eloquaConfig.rest_api_password === 'undefined'
        || typeof eloquaConfig.rest_client_id === 'undefined'
        || typeof eloquaConfig.rest_secret === 'undefined') {
        throw new Error('Please supply valid config eloqua configuration.');
    }
    var authBody = {
        "grant_type": "password",
        "scope": "full",
        "username": eloquaConfig.rest_api_company + '\\' + eloquaConfig.rest_api_user,
        "password": eloquaConfig.rest_api_password
    };
    return request({
        followAllRedirects: true,
        uri: eloquaConfig.token_uri,
        method: 'POST',
        json: authBody,
        headers: {
            'Authorization': "Basic " + new Buffer(eloquaConfig.rest_client_id + ":" + eloquaConfig.rest_secret).toString("base64")
        }
    })
        .then(res => {
            res.body.expires = (new Date()).getTime() + parseFloat(res.body.expires_in) * 1000;
            return res.body;
        });
}

function eloquaBulkImportStatus(syncUri, eloquaToken, eloquaConfig) {
    console.log(syncUri);
    return request({
        followAllRedirects: true,
        uri: eloquaConfig.rest_api_url + '/bulk/2.0' + syncUri,
        method: 'GET',
        headers: {
            'Authorization': "Bearer " + eloquaToken.access_token
        }
    }).then(r => {
        if(r.headers['content-type'].indexOf('application/json') > -1 && typeof r.body === 'string') {
            r.body = JSON.parse(r.body);
        }
        if (r.body.status === 'success' || r.body.status === 'warning') {
            return true;
        } else if (r.body.status === 'active' || r.body.status === 'pending') {
            return new Promise(resolve => setTimeout(resolve, 500))
                .then(() => eloquaBulkImportStatus(syncUri, eloquaToken, eloquaConfig));
        } else {
            throw new Error('Sync status error ' + r.statusCode + ' ' + JSON.stringify(r.body));
        }
    });
}

function eloquaBulkImportSync(importUri, eloquaToken, eloquaConfig) {
    return request({
        followAllRedirects: true,
        uri: eloquaConfig.rest_api_url + '/bulk/2.0/syncs',
        method: 'POST',
        json: {
            syncedInstanceUri: importUri
        },
        headers: {
            'Authorization': "Bearer " + eloquaToken.access_token
        }
    }).then(r => {
        const syncUri = r.body.uri;
        return eloquaBulkImportStatus(syncUri, eloquaToken, eloquaConfig);
    });
}

function eloquaBulkImportData(json, importUri, eloquaToken, eloquaConfig) {
    return request({
        followAllRedirects: true,
        uri: eloquaConfig.rest_api_url + '/bulk/2.0' + importUri + '/data',
        method: 'POST',
        json: json,
        headers: {
            'Authorization': "Bearer " + eloquaToken.access_token
        }
    });
}

// TODO: update to custom data object
// https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAB/Developers/BulkAPI/Endpoints/Custom%20objects/Imports/post-customObjects-imports.htm
function eloquaBulkImport(eloquaToken, eloquaConfig, instance, execution) {
    if (typeof instance !== 'undefined' && instance !== null && instance.trim() !== '') {
        eloquaConfig.createTemplate.fields["Content"] = (typeof execution !== 'undefined' && execution !== null && execution.trim() !== '')
            ? `{{ContentInstance(${instance})}}`
            : `{{ContentInstance(${instance}).Execution[${execution}]}}`;
    }
    return request({
        followAllRedirects: true,
        uri: eloquaConfig.rest_api_url + '/bulk/2.0/customobjects/60/imports',
        method: 'POST',
        json: createTemplate,
        headers: {
            'Authorization': "Bearer " + eloquaToken.access_token
        }
    }).then(res => {
        return res.body1.uri;
    });
}


module.exports = {
    eloquaBulkImport,
    eloquaBulkImportData,
    eloquaBulkImportSync,
    eloquaBulkImportStatus,
    eloquaOauth
}
