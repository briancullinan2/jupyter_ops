var assert = require('assert');
var fs = require('fs');
var importer = require('../Core');
var {
    eloquaOauth,
    eloquaBulkImport,
    eloquaBulkImportData,
    eloquaBulkImportSync
} = importer.import('bulk eloqua import');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE || '';

describe('eloqua bulk upload', () => {
    var eloquaToken, eloquaConfig;
    
    beforeEach(() => {
        try {
            eloquaConfig = JSON.parse(fs.readFileSync(PROFILE_PATH + '/.credentials/eloqua_production.json').toString().trim());

            var oldUrl = eloquaConfig.token_uri;
            eloquaConfig.token_uri = eloquaConfig.token_uri.replace(/http.*\.eloqua\.com/ig, 'http://localhost:18888')
            assert(oldUrl !== eloquaConfig.token_uri)

            var oldUrl2 = eloquaConfig.rest_api_url;
            eloquaConfig.rest_api_url = eloquaConfig.rest_api_url.replace(/http.*\.eloqua\.com\/API/ig, 'http://localhost:18888')
            assert(oldUrl2 !== eloquaConfig.rest_api_url)
            
            eloquaToken = JSON.parse(fs.readFileSync(PROFILE_PATH + '/.credentials/eloqua_token.json').toString().trim());
        } catch (e) {
            console.log(e);
        }
    })
    
    it('should get a valid oauth token', (done) => {
        Promise.resolve(typeof eloquaToken !== 'undefined'
                        && eloquaToken.expires > (new Date()).getTime()
                        ? eloquaToken
                        : eloquaOauth(eloquaConfig))
            .then(r => {
                eloquaToken = r;
                fs.writeFileSync(
                        PROFILE_PATH + '/.credentials/eloqua_token.json',
                        JSON.stringify(r, null, 4));
                assert(r.expires > (new Date()).getTime());
                done();
            })
    })
    
    it('should create a bulk import instance', (done) => {
        eloquaBulkImport(eloquaToken, eloquaConfig)
            .then(r => {
                assert(r.indexOf('/imports/') > -1);
                done();
            })
    })
    
    it('should update data to eloqua', (done) => {
        eloquaBulkImport(eloquaToken, eloquaConfig)
            .then(r => {
                const importUri = r;
                return eloquaBulkImportData([
                    {
                    "AccountId": '1234',
                    "ActProduct": 'premium',
                    "EmailAddress": "brian.cullinan@swiftpage.com",
                    "ExpirationMonth": '12',
                    "ExpirationYear": '2017',
                    "Last4DigitsOfCard": '1234',
                    "Quantity": 5,
                    "RenewalDate": '11/12/2017',
                    "RenewalsStatus": "Drew loves marketing!",
                    "RepName": 'Brian',
                    "RORName": 'James',
                    "RORNumber": '1111',
                    "State": 'AZ',
                    }
                ], importUri, eloquaToken, eloquaConfig)
            })
            .then(r => {
                assert(r.statusCode === 204, 'invalid status recieved from import ' + r.statusCode);
                done();
            })
    })
    
    it('should verify upload was successful', (done) => {
        var importUri;
        eloquaBulkImport(eloquaToken, eloquaConfig)
            .then(r => {
                importUri = r;
                return eloquaBulkImportData([
                    {
                    "AccountId": '1234',
                    "ActProduct": 'premium',
                    "EmailAddress": "brian.cullinan@swiftpage.com",
                    "ExpirationMonth": '12',
                    "ExpirationYear": '2017',
                    "Last4DigitsOfCard": '1234',
                    "Quantity": 5,
                    "RenewalDate": '11/12/2017',
                    "RenewalsStatus": "Drew loves marketing!",
                    "RepName": 'Brian',
                    "RORName": 'James',
                    "RORNumber": '1111',
                    "State": 'AZ',
                    }
                ], importUri, eloquaToken, eloquaConfig)
            })
            .then(() => eloquaBulkImportSync(importUri, eloquaToken, eloquaConfig))
            .then(r => {
                assert(r === true);
                done();
            })
    })
    
    it('should transfer data end-to-end', (done) => {
        var importUri;
        Promise.resolve(typeof eloquaToken !== 'undefined' && eloquaToken.expires > (new Date()).getTime()
            ? eloquaToken
            : eloquaOauth(eloquaConfig))
            .then(r => {
                eloquaToken = r;
            })
            .then(() => eloquaBulkImport(eloquaToken, eloquaConfig))
            .then(r => {
                importUri = r;
                return eloquaBulkImportData([
                    {
                    "AccountId": '1234',
                    "ActProduct": 'premium',
                    "EmailAddress": "brian.cullinan@swiftpage.com",
                    "ExpirationMonth": '12',
                    "ExpirationYear": '2017',
                    "Last4DigitsOfCard": '1234',
                    "Quantity": 5,
                    "RenewalDate": '11/12/2017',
                    "RenewalsStatus": "Drew loves marketing!",
                    "RepName": 'Brian',
                    "RORName": 'James',
                    "RORNumber": '1111',
                    "State": 'AZ',
                    }
                ], importUri, eloquaToken, eloquaConfig);
            })
            .then(() => eloquaBulkImportSync(importUri, eloquaToken, eloquaConfig))
            .then(() => done())
    })
})
