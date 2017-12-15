var importer = require('../Core')
var bodyParser = require('body-parser');
var express = require('express');

var selenium = express();
var server = require('http').createServer(selenium);
selenium.use(bodyParser.json());    // to support JSON-encoded bodies
selenium.use(bodyParser.urlencoded({// to support URL-encoded bodies
    extended: true
}));

var router = express.Router();


// auth endpoints
router.post('/auth/oauth2/authorize', (req, res) => {    
});
router.post('/auth/oauth2/token', (req, res) => {
    res.send({
        "access_token": "access_token",
        "token_type": "bearer",
        "expires_in": 28800,
        "refresh_token": "refresh_token",
    })
});


// eloqua endpoints
router.post('/bulk/2.0/contacts/imports', (req, res) => {
    res.send({
        uri: '/imports/1234'
    });
});
router.post('/bulk/2.0/imports/:importId/data', (req, res) => {
    res.status(204);
    res.send({
        uri: '/imports/1234'
    });
});
router.post('/bulk/2.0/syncs', (req, res) => {
    res.send({
        uri: '/sync/1234'
    });
});
var alternateImportStatus = true;
router.get('/bulk/2.0/sync/:syncId', (req, res) => {
    res.send({
        status: alternateImportStatus ? 'active' : 'success',
    });
    alternateImportStatus = !alternateImportStatus;
});


// eloqua custom data object
// as opposed to /bulk/2.0/customobjects/imports which just lists all the imports that have been performed on the CDO
router.post('/bulk/2.0/customobjects/:objectId/imports', (req, res) => {
    res.send({
        uri: '/imports/1234'
        // might be? /customobjects/:objectId/imports/:importId
    });
});




// zuora endpoints
router.post('/object/export', (req, res) => {
    res.send({
        Id: '1234'
    });
});
var alternateExportStatus = true;
router.get('/object/export/:exportId', (req, res) => {
    res.send({
        Status: alternateExportStatus ? 'Processing' : 'Completed',
        FileId: '1234'
    });
    alternateExportStatus = !alternateExportStatus;
});
router.get('/files/:fileId', (req, res) => {
    res.send(`RatePlanCharge.Description,Account.Id
support,123456
premium,654321
`);
});

selenium.use(router);
var app = server.listen(18888).on('error', e => {
    if(e.code !== 'EADDRINUSE') {
        throw e;
    }
});

process.on ('SIGTERM', () => {app.close(); process.exit(0)});
process.on ('SIGINT', () => {app.close(); process.exit(0)});
