var mysql = require('mysql');
var importer = require('../Core');
var fs = require('fs');
var path = require('path');
var https = require('https');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var project = PROFILE_PATH + '/Documents/studysauce4/data';
var filename = path.join(project, 'cleaned.json');

var con = mysql.createConnection({
    host: 'us-cdbr-iron-east-03.cleardb.net',
    user: 'b9e5a2b2b0eb8f',
    password: '72ced352',
    database: 'heroku_cb7d2d0196b54c6'
});

var mysqlQuery = (q) => {
    return new Promise((resolve, reject) =>
        con.query(q, (err, result) => {
            if (err) reject(err);
            console.log(result);
            resolve(result);
        }));
};

var showTables = () => {
    return mysqlQuery('SHOW TABLES')
        .then(result => result.map(r => r[Object.keys(r)[0]])
            .filter(r => r.indexOf('acl_') === -1
                && r.indexOf('rememberme') === -1
                && r.indexOf('session') === -1
                && r.indexOf('mail') === -1
                && r.indexOf('visit') === -1));
};

var parseBool = r => r === 'true' || r === '0' || parseInt(r) > 0;

var parseString = r => r + '';

var describeTable = (table) => {
    return mysqlQuery('DESCRIBE ' + table)
        .then(fields => {
            var obj = {};
            fields.forEach(f => {
                var parse = parseString;
                if (f.Type === 'tinyint(1)')
                    return obj[f.Field] = parseBool;
                if (f.Type.indexOf('int') > -1)
                    return obj[f.Field] = parseInt;
                if (f.Type.indexOf('datetime') > -1)
                    return obj[f.Field] = Date.parse;
                obj[f.Field] = parse;
            })
            return obj;
        })
};

var selectObjects = (table, descriptor, query = '') => {
    return mysqlQuery('SELECT * FROM ' + table + ' ' + query)
        .then(rows => rows.map(r => {
            delete r['password'];
            delete r['salt'];
            delete r['confirmation_token'];
            if (typeof r['coupon_id'] !== 'undefined') {
                r['bundle_id'] = r['coupon_id'];
                delete r['coupon_id'];
            }
            if (typeof r['options'] !== 'undefined') {
                r['properties'] = r['options'];
                delete r['options'];
            }
            if (typeof r['properties'] !== 'undefined') {
                r['properties'] = unserialize(r['properties']);
            }
            return r;
        }));
};

$$.async();
var tables, unserialize;
new Promise((resolve, reject) => https.get(
    'https://raw.githubusercontent.com/naholyr/js-php-unserialize/master/php-unserialize.js',
    (res) => {
        var data = '';
        res.on('data', (d) => {
            data += d.toString();
        });
        res.on('end', () => {
            resolve(data);
        });
    }).on('error', (e) => {
    reject(e);
}))
    .then(r => {
        unserialize = importer.runInNewContext(r + '\rmodule.exports = exports;\n', {
            __filename: '//raw.githubusercontent.com/naholyr/js-php-unserialize/master/php-unserialize.js',
            exports: {}
        }, {}, false).unserialize;
        return new Promise((resolve, reject) => con.connect((err) => {
            if (err) reject(err);
            console.log('Connected!');
            resolve();
        }))
    })
    .then(() => showTables())
    .then(tables => {
        var results = {};
        return importer.runAllPromises(tables
            .map(t => describeTable(t)
                .then(descriptor => selectObjects(t, descriptor))
                .then(rows => results[t
                    .replace('ss_', '')
                    .replace('coupon', 'bundle')] = rows)))
            .then(() => results)
    })
    .then(result => {
        fs.writeFileSync(filename, JSON.stringify(result, null, 4));
        $$.sendResult(result)
    })
    .then(result => $$.sendResult(result))
    .catch(e => $$.sendError(e))
