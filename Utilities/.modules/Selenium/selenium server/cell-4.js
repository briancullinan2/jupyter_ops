var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();

var TOKEN_DIR = path.join(process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE, '.credentials');
var SESSIONS_PATH = path.join(TOKEN_DIR, 'sessions.txt');
var sessionId = fs.readFileSync(SESSIONS_PATH).toString().split('\n')[0];

var response = (res, promise) => {
    return promise.then(r => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(r));
    })
}

var deleteSession = () => {
    if (typeof getTab() !== 'undefined') {
        return promisifyChrome('debugger.detach', {tabId: getTab()})
            .then(() => ({value: {}}))
            .catch(e => console.log(e))
    } else {
        return Promise.resolve({value: {}});
    }
}

var createSession = () => {
    return Promise.resolve({
        value: {
            sessionId: sessionId,
            capabilities: {}
        }
    });
}

router.post('/session', (req, res) =>
    response(res, createSession()));
router.delete('/session/:sessionId', (req, res) =>
    response(res, deleteSession()));

module.exports = {
    deleteSession,
    createSession,
    router
}

