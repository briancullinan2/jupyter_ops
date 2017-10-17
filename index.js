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
    console.log('interpreting ' + req.query['queries']);
    return importer.interpretAll(req.query['queries'])
        .then(r => res.send(JSON.stringify(r, null, 4)))
        .catch(e => res.send(e + ''));
});
