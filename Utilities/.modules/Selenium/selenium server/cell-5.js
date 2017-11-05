var importer = require('../Core');var express = require('express');var router = express.Router();

var waitForComplete = () => {
    return promisifyChrome('debugger.sendCommand', {
        tabId: getTab()
    }, 'Runtime.evaluate', {
        expression: `new window.BackupPromise(resolve => {
resolve(document.readyState === "complete" || document.readyState === "interactive");
})`,
        awaitPromise: true
    })
    .then(b => b ? ({value: {}}) : waitForComplete())
}
var go = (url) => {
    return promisifyChrome('windows.getAll', {})
        .then(windows => importer.runAllPromises(windows            .map(w => resolve =>                promisifyChrome('tabs.getAllInWindow', w.id)                    .then(tabs => resolve(tabs)))))        .then(tabs => {            for (const t of [].concat(...tabs)) {                if (t.url.indexOf(url) > -1 || t.id === getTab()) {                    return promisifyChrome(                        'tabs.update', t.id, {active: true});                }            }            return promisifyChrome('tabs.create', {                active: true,                url            });        })        .then(t => {
            if(t.id !== getTab()) {
                setTab(t.id)
                return promisifyChrome('debugger.attach', {
                    tabId: getTab()
                }, '1.1')
            }
        })        .then(() => promisifyChrome('debugger.sendCommand', {            tabId: getTab()        }, 'Page.navigate', {            url: url        }))
        .then(() => waitForComplete())        .catch(e => console.log(e))}
router.get('/session/:sessionId/url', (req, res) => {
    response(res, promisifyChrome('tabs.get', {
        tabId: getTab()
    }).then(r => ({value: r.url})));
})router.post('/session/:sessionId/url', (req, res) => {
    response(res, go(req.body.url))
})module.exports = {    go,    router};