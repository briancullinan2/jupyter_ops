var importer = require('../Core');
var express = require('express');
var router = express.Router();
var response = (res, promise) => {
    return promise.then(r => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(r));
    })
}

var go = (url) => {
    return promisifyChrome('windows.getAll', {})
        .then(windows => importer.runAllPromises(windows
            .map(w => resolve =>
                promisifyChrome('tabs.getAllInWindow', w.id)
                    .then(tabs => resolve(tabs)))))
        .then(tabs => {
            for (const t of [].concat(...tabs)) {
                if (t.url.indexOf(url) > -1 || t.id === getTab()) {
                    return promisifyChrome(
                        'tabs.update', t.id, {active: true});
                }
            }
            return promisifyChrome('tabs.create', {
                active: true,
                url
            });
        })
        .then(t => setTab(t.id))
        .then(() => promisifyChrome('debugger.attach', {
            tabId: getTab()
        }, '1.1'))
        .then(() => promisifyChrome('debugger.sendCommand', {
            tabId: getTab()
        }, 'Page.navigate', {
            url: url
        }))
        .then(() => ({value: {}}))
        .catch(e => console.log(e))
}

router.post('/session/:sessionId/url', (req, res) =>
    response(res, go(req.body.url)));

module.exports = {
    go,
    router
};

