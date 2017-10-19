// TODO: move this to web extension code?
var importer = require('../Core');
var fs = require('fs');
var https = require('https');
var app = require('express')();

var httpsOptions = {
    key: fs.readFileSync('../Utilities/ca/intermediate/private/localhost.key.pem'),
    cert: fs.readFileSync('../Utilities/ca/intermediate/certs/localhost.cert.pem'),
    passphrase: 'x',
    //requestCert: true,
    rejectUnauthorized: false
};
var secureServer = require('https').createServer(httpsOptions, app);
var trustedCa = ['../Utilities/ca/intermediate/certs/localhost.cert.pem'];

https.globalAgent.options.ca = [];
for (const ca of trustedCa) {
    https.globalAgent.options.ca.push(httpsOptions.cert);
}

$$.async();
var searchProvider, sockify, automock, seleniumServer;
importer.import([
    'mock properties rewire'
])
    .then(r => {
        automock = r;
        return importer.import([
            'search notebook provider',
            'socket.io server',
            'selenium http server'
        ], {automock});
    })
    .then(r => {
        sockify = r[2];
        searchProvider = r[1];
        seleniumServer = r[3];

        var listener = secureServer.listen(8000);
        sockify.sockifyServer(listener);
        sockify.sockifyRequire({
            prototype: {
                search: function () {
                },
                results: function () {
                }
            }
        }, 'SearchService');
        sockify.sockifyRequire({
            prototype: {
                chrome: function () {
                }
            }
        }, 'BrowserService');
        return searchProvider();
    })
    .then(() => seleniumServer())
    .then(() => {
        console.log('registered');
    })
    .catch(e => $$.sendError(e));

// var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
// var keyChain = path.join(PROFILE_PATH, '/Library/Keychains/login.keychain');

// security add-trusted-cert -d -r trustAsRoot -k ../Library/Keychains/login.keychain ../server.crt

/// 
/* TODO: integrate with native messaging?

{
  "name": "com.my_company.my_application",
  "description": "My Application",
  "path": "C:\\Program Files\\My Application\\chrome_native_messaging_host.exe",
  "type": "stdio",
  "allowed_origins": [
    "chrome-extension://knldjmfmopnpolahpmmgbagdohdnhkik/"
  ]
}

*/

