const functions = require('firebase-functions'),
    admin = require('firebase-admin');

try {
    admin.initializeApp(functions.config().firebase);
} catch (e) {
}

const importer = require('./Core');
//for (const k of Object.keys(importer).filter(k => k.indexOf('[') === -1)) {
//}

module.exports.interpretAll = functions.https.onRequest((req, res) => {
//    console.log(k);
//    console.log(importer[k]);
    return importer.interpretAll(req.query['queries'])
        .then(r => res.send(r));
});
