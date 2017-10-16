const functions = require('firebase-functions'),
    admin = require('firebase-admin');

try {
    admin.initializeApp(functions.config().firebase);
} catch (e) {
}

const importer = require('./Core');
for (const k of Object.keys(importer).filter(k => k.indexOf('[') === -1)) {
    module.exports[k] = functions.https.onRequest((req, res) => {
        return new Promise.resolve(importer[k](...req.query))
            .then(r => res.send(r));
    });
}

