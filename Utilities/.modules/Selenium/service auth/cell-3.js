var importer = require('../Core');

var waitForPasswordLoad = (r) => {
    return Promise.all([
        client.getText(r + ' [role="rowheader"]'),
        client.getText(r + ' [role="rowheader"] ~ [role="gridcell"]:nth-child(2)'),
        client.getValue(r + ' [role="rowheader"] ~ [role="gridcell"]:last-child input')
    ])
        .then(r => r[2] === 'Loading...'
            ? client.pause(1000).then(() => waitForPasswordLoad(r))
            : Promise.resolve(r))
};

var copyPasswordRow = (i) => {
    const r = '[role="row"]:nth-of-type(' + i + ') ';
    return client.click(r + ' [role="button"][aria-label*="Toggle"]')
        .pause(1000)
        .then(() => waitForPasswordLoad(r))
        .then(r => saveCredentials({
            host: r[0],
            username: r[1],
            password: r[2]
        }))
        .catch(e => console.log(e))
};

var copyPasswords = () => {
    return client.url('https://passwords.google.com')
        .then(() => importer.import('log in google', {client, getCredentials}))
        .then(() => client.loginGoogle())
        .pause(1000)
        .elements('[role="row"]')
        .then(els => importer.runAllPromises(els.value.map((e, i) => resolve => {
            return client.isExisting('[role="row"]:nth-of-type(' + i + ') [role="button"][aria-label*="Toggle"]')
                .then(is => is ? copyPasswordRow(i) : client)
                .then(row => resolve(row))
        })));
};

var saveCredentials;
var downloadGooglePasswords = () => {
    return importer.import('add encrypted passwords.json')
        .then(r => {
            saveCredentials = r;
            return copyPasswords();
        })
};
module.exports = downloadGooglePasswords;
