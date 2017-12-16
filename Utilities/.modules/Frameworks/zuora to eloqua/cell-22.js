var importer = require('../Core');
var util = require('util');
var request = importer.import('http request polyfill');
var {
    zuoraBulkExport,
    zuoraBulkExportStatus,
    zuoraBulkExportFile,
    csvToJson
} = importer.import('zuora export service');
var {eloquaOauth} = importer.import('eloqua import service');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE || '';

var eloquaToken, eloquaConfig;
function eloquaCustomObjects() {
    eloquaConfig = JSON.parse(fs.readFileSync(PROFILE_PATH + '/.credentials/eloqua_production.json').toString().trim());
    return Promise.resolve(typeof eloquaToken !== 'undefined'
                    && eloquaToken.expires > (new Date()).getTime()
                    ? eloquaToken
                    : eloquaOauth(eloquaConfig))
        .then(r => {
            eloquaToken = r;
            fs.writeFileSync(
                    PROFILE_PATH + '/.credentials/eloqua_token.json',
                    JSON.stringify(r, null, 4));
            assert(r.expires > (new Date()).getTime());
            return request({
                followAllRedirects: true,
                uri: eloquaConfig.rest_api_url + '/bulk/2.0/customobjects/60/imports', // /60/fields',
                method: 'GET',
                headers: {
                    'Authorization': "Bearer " + eloquaToken.access_token
                }
            })
        })
}
module.exports = eloquaCustomObjects;

if(typeof $$ !== 'undefined') {
    $$.async();
    eloquaCustomObjects()
    /*
        .then(r => {
            // delete import definitions
            const imports = JSON.parse(r.body).items;
            return importer.runAllPromises(imports.map(r => resolve => {
                return request({
                    followAllRedirects: true,
                    uri: eloquaConfig.rest_api_url + '/bulk/2.0' + r.uri,
                    method: 'DELETE',
                    headers: {
                        'Authorization': "Bearer " + eloquaToken.access_token
                    }
                }).then(r => resolve(r)).catch(e => resolve(e))
            }))
        })
        */
        .then(r => $$.mime({'text/html': '<pre>' + JSON.stringify(JSON.parse(r.body), null, 4) + '</pre>'}))
        .catch(e => $$.sendError(e))
}


// TODO: find other definitions, compare, and import using the same definition

