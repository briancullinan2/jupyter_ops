var fs = require('fs');
var rfs = require('fs').readFileSync;
var crypto = require('crypto');
var path = require('path');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var PASS_FILE = path.join(PROFILE_PATH, '.credentials', 'password.txt');
var PASSWORDS_FILE = path.join(PROFILE_PATH, '.credentials', 'passwords.json');
var pass = process.env.SELENIUM_PASS || rfs(PASS_FILE);

function encrypt(text) {
    var cipher = crypto.createCipher('aes-256-ctr', pass);
    var crypted = cipher.update(text, 'latin1', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

function encryptSet(set) {
    var resultSet = {};
    for (var i in set) {
        if (set.hasOwnProperty(i)) {
            if (i == 'added' || i == 'host') {
                resultSet[i] = set[i];
                continue;
            }
            resultSet[i] = encrypt(set[i]);
        }
    }
    return resultSet;
}

function saveCredentials(passwordAddJson) {
    // TODO: passAdd from file?
    var passwords = JSON.parse(fs.readFileSync(PASSWORDS_FILE));
    passwordAddJson.added = new Date();
    var encrypted = encryptSet(passwordAddJson);
    if (passwordAddJson.host) {
        passwords = passwords.filter(function (el) {
            return el.host.toLowerCase() != passwordAddJson.host.toLowerCase() && el.username.toLowerCase() != passwordAddJson.username.toLowerCase();
        });
    }
    passwords[passwords.length] = encrypted;
    var passwordString = JSON.stringify(passwords, null, 4);
    //var compressed = zlib.gzipSync(passwordString).toString('base64');
    console.log('Passwords: Saving encrypted file');
    fs.writeFileSync('passwords-new.json', passwordString);
    fs.renameSync(PASSWORDS_FILE, 'passwords-backup.json');
    fs.renameSync('passwords-new.json', PASSWORDS_FILE);
    fs.unlinkSync('passwords-backup.json');
    if (typeof passAdd !== 'undefined' && fs.existsSync(passAdd)) {
        console.log('Passwords: Deleting input file: ' + passAdd);
        fs.unlinkSync(passAdd);
    }
    return encrypted;
}

module.exports = saveCredentials;
saveCredentials;
