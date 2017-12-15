var url = require('url');

try {
    var util = require('util');
    var request = util.promisify(require('request'));
    module.exports = request;
} catch (e) {
    if(e.message.indexOf('module not found') === -1) {
        throw e;
    }
    
    function request(options) {
        return new Promise((resolve, reject) => {
            options.timeout = 1000;
            options.url = url.parse(options.uri);
            Object.assign(options, options.url);
            var https = options.protocol === 'https:' ? require('https') : require('http');
            if(typeof options.json !== 'undefined') {
                options.method = 'POST';
                Object.assign(options.headers || {}, {
                    'Content-Type': 'application/json'
                })
            } else {
                options.method = 'GET';
            }
            const req = https.request(options, (res) => {
                var data = ''
                var isJson = (res.headers['content-type'] || '').indexOf('application/json') > -1;
                res.setEncoding('utf8');
                if(res.statusCode > 299 || res.statusCode < 200) {
                    return reject(res);
                }
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    if(isJson) {
                        res.body = JSON.parse(data);
                    } else {
                        res.body = data;
                    }
                    resolve(res)
                });
            });
            req.on('error', (e) => {
                console.log(`problem with request: ${e.message}`);
            });
            if(typeof options.json !== 'undefined') {
                req.write(JSON.stringify(options.json));
            }
            req.end();
        });
    }
    module.exports = request;
}


