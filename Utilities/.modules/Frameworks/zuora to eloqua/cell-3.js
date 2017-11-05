var assert = require('assert');
var fs = require('fs');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;

describe('zuora to eloqua', () => {
    beforeEach(() => {
        var xlsx = require('xlsx');
        var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
        var worksheet = PROFILE_PATH + '/Documents/asm/Marketing_File_Oct_.xslx';
        var zuoraConfig = JSON.parse(fs.readFileSync(PROFILE_PATH + '/.credentials/zuoraRest_production.json').toString());

    })
    
    it('should transfer data end-to-end', () => {
        var success = eloquaBulkImport(
            mapDataToFields(
                csvToJson(
                    zuoraExport(
                        zuoraOauth()))), eloquaOauth());
        assert(success);
    })
    
    it('should have comparable records', () => {
        const workSheetsFromFile = XLSX.utils.sheet_to_json(worksheet);
        console.log(workSheetsFromFile);
    })
})

describe('zuora oauth', () => {
    it('should connect to zuora using oauth', () => {
        
    })
})

describe('zuora export', () => {
    it('should export a CSV from zuora', () => {
        
    })
    
    it('should convert CSV to JSON', () => {
        
    })
})

describe('map zuora data fields', () => {
    it('should map basic data', () => {
        
    })
    
    it('should map contact data', () => {
        
    })
    
    it('should map support data', () => {
        
    })
    
    it('should map cancelled data', () => {
        
    })
})

describe('eloqua bulk upload', () => {
    var eloquaToken, eloquaConfig;
    
    beforeEach(() => {
        try {
            eloquaConfig = JSON.parse(fs.readFileSync(PROFILE_PATH + '/.credentials/eloqua_production.json').toString().trim());
            eloquaToken = JSON.parse(fs.readFileSync(PROFILE_PATH + '/.credentials/eloqua_token.json').toString().trim());
        } catch (e) {
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
    
    it('should update data to eloqua', (done) => {
        eloquaBulkImport({}, eloquaToken, eloquaConfig)
            .then(r => {
                assert(r.statusCode === 201);
                assert(r.body.uri.indexOf('/imports/') > -1);
                done();
            })
    })
    
    it('should confirm upload was successful', () => {
        
    })
})
