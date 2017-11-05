var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();

var getWindowHandles = () => {
    return promisifyChrome('windows.getAll', {})
        .then(windows => {
            return {value: windows.map(w => w.id)};
        })
        .catch(e => console.log(e))
}

router.get('/session/:sessionId/window', (req, res) => {
    throw new Error('not implemented! ' + req.originalUrl + JSON.stringify(req.params).substr(0, 200));
}); //,"GetWindow",ExecuteGetCurrentWindowHandle,
router.get('/session/:sessionId/window_handle', (req, res) => {
    throw new Error('not implemented! ' + req.originalUrl + JSON.stringify(req.params).substr(0, 200));
}); //,"GetWindow",ExecuteGetCurrentWindowHandle,
router.get('/session/:sessionId/window/handles', (req, res) => {
    throw new Error('not implemented! ' + req.originalUrl + JSON.stringify(req.params).substr(0, 200));
}); //,"GetWindows",ExecuteGetWindowHandles,
router.get('/session/:sessionId/window_handles', (req, res) => {
    response(res, getWindowHandles(req.params['sessionId']));
}); //,"GetWindows",ExecuteGetWindowHandles,

module.exports = {
    getWindowHandles,
    router
}

