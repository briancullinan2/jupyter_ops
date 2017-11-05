var importer = require('../Core')var bodyParser = require('body-parser');var io = require('socket.io-client');var express = require('express');var client = io('https://localhost:8000', {    secure: true,    rejectUnauthorized: false});
var currentCallback = null;
client.on('result', function (name, ...args) {
    // TODO: not just verify the service,
    //   also verify the tab id matches
    if (name === 'BrowserService.prototype.chrome') {
        if(currentCallback) {
            currentCallback.apply(this, args);
        }
    }
})

var promisifyChrome = (...args) => {    return new Promise((resolve, reject) => {
        console.log('call ' + JSON.stringify(args).substr(0, 200));
        if(typeof currentCallback === 'function') {
            throw new Error('Callback already defined.');
        }
        var cmdTimeout = setTimeout(() => {
            currentCallback = null;
            reject(new Error('command took too long to respond', 3000));
        }, 9000)
        currentCallback = (err, data) => {
            currentCallback = null;
            clearTimeout(cmdTimeout);
            if (err !== null) {
                return reject(err);
            }
            return resolve.apply(this, JSON.parse(data));
        };
        client.emit.apply(client, [            'call',            'BrowserService.prototype.chrome',            ...args        ]);
    });};
var response = (res, promise) => {
    return promise.then(r => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(r));
    })
}
var tabId;var seleniumServer = () => {    const selenium = express();    const server = require('http').createServer(selenium);    selenium.use(bodyParser.json());    // to support JSON-encoded bodies    selenium.use(bodyParser.urlencoded({// to support URL-encoded bodies        extended: true    }));    // TODO: import the rest of the modules in this script
    return importer.getCells(__dirname + '/../Selenium/selenium server.ipynb')        .then(cells => {            for (const c of cells.slice(1)) /* exclude this cell */ {                const mod = importer.runInNewContext(c.source.join(''), {                    __filename: __dirname + '/../Selenium/selenium server.ipynb',                    promisifyChrome,                    getTab: () => tabId,                    setTab: (id) => (tabId = id),
                    response                }, {}, false);                if (typeof mod !== 'undefined' && typeof mod.router !== 'undefined') {                    selenium.use('/wd/hub', mod.router);                }            }            return server.listen(4444);        });};module.exports = seleniumServer;