var importer = require('../Core');
var webdriverio = require('webdriverio');
var sync = require('wdio-sync')
var fs = require('fs');
var path = require('path');

var TIMEOUT = 10000;
var TOKEN_DIR = path.join(process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE, '.credentials');
var SESSIONS_PATH = path.join(TOKEN_DIR, 'sessions.json');

var sessions;
var sessionModified;
var getSessions = () => {
    try {
        sessionModified = fs.statSync(SESSIONS_PATH).mtime.getTime();
        sessions = JSON.parse(fs.readFileSync(SESSIONS_PATH)
            .toString());
    } catch (e) {
        sessions = {};
    }

    if(typeof sessions.inactive === 'undefined') {
        sessions.inactive = [];
    }
    if(typeof sessions.active === 'undefined') {
        sessions.active = [];
    }
    return sessions;
};

var updateOrAddSession = (currentSession) => {
    if(fs.existsSync(SESSIONS_PATH)
       && fs.statSync(SESSIONS_PATH).mtime.getTime() > sessionModified) {
        getSessions();
    }
    const updateSession = sessions.active.filter(s => s[1] === currentSession)[0];
    if(typeof updateSession !== 'undefined') {
        if((new Date()).getTime() - updateSession[0] > TIMEOUT / 2) {
            updateSession[0] = (new Date()).getTime();
        } else {
            return;
        }
    } else {
        sessions.active.push([(new Date()).getTime(), currentSession]);
    }
    fs.writeFileSync(
        SESSIONS_PATH,
        JSON.stringify(sessions, null, 4))
}

var sessionSync = false;
var createWebdriverClient = (host, port) => {
    if(sessionSync) {
        return new Promise(resolve => setTimeout(() => resolve(), 100))
            .then(() => createWebdriverClient(host, port));
    }
    sessionSync = true;
    const sessions = getSessions();
    
    var webdriverServer = {
        sync: true,
        debug: true,
        host: host || 'localhost',
        port: port || 4444,
        logLevel: 'command',
        baseUrl: 'https://webdriver.io',
        pageLoadStrategy: 'eager',
        connectionRetryTimeout: TIMEOUT,
        desiredCapabilities: {
            browserName: 'chrome',
            chromeOptions: {
                prefs: {
                    'download.default_directory': '/data/downloads',
                    'profile.default_content_setting_values.notifications': 2,
                    'exited_cleanly': true,
                    'exit_type': 'None'
                },
                args: [
                    // TODO: https://superuser.com/questions/461035/disable-google-chrome-session-restore-functionality
                    'user-data-dir=/tmp/profile-' + sessions.active.length,
                    // 'start-fullscreen',
                    'no-sandbox',
                    'disable-session-crashed-bubble',
                    'disable-infobars',
                    'new-window',
                    'disable-geolocation',
                    'disable-notifications',
                    'show-saved-copy',
                    'silent-debugger-extension-api'
                    //'kiosk'
                ]
            }
        },
    };
    
    console.log('Initializing webdriver on ' + webdriverServer.host);
    var client = webdriverio.remote(webdriverServer);
    //global.browser = {options: {sync: true}}
    //sync.wrapCommands(client, [], []);
    //global.$ = (...config) => client.element.apply(client, config)
    //global.$$ = (...config) => client.elements.apply(client, config).value
    //global.browser = client;
    client.on('error', function (e) {
        console.log(e);
        this.endAll();
    });
    client.on('end', function () {
        console.log('Daemon: Closing browser');
    });
    client.on('result', function (result) {
        updateOrAddSession(client.requestHandler.sessionID);
        //console.log(result);
    });
    return client
        .then(() => {
            // validate and close each session
            const inactive = sessions.inactive.concat(sessions.active.filter(session => 
                    // reuse if lagging longer than 120 seconds?
                    (new Date()).getTime() - session[0] > TIMEOUT))
                .filter(session => typeof session[1] !== 'undefined' && session[1] !== null)
            return importer.runAllPromises(inactive.map(session => (resolve) => {
                client.requestHandler.sessionID = session[1];
                client.session()
                    .then(s => resolve(s.sessionId))
                    .catch(e => resolve(null));
            }))
                .then(r => r
                    .filter(sess => typeof sess !== 'undefined' && sess !== null)
                    .filter((elem, pos, arr) => arr.indexOf(elem) === pos))
        })
        // save current session
        .then(validSessions => {
            console.log(validSessions);
            if (validSessions.length == 0) {
                // save new session
                client.requestHandler.sessionID = null;
                // TODO: fix this, doesn't work on second init, keeps opening new windows
                return client.init();
            } else {
                // set to first valid
                client.requestHandler.sessionID = validSessions[0];
            }
        })
        .then(() => {
            updateOrAddSession(client.requestHandler.sessionID);
            const index = sessions.active.map(s => s[1]).indexOf(client.requestHandler.sessionID) % 4;
            console.log(index);
            return importer.import([
                'resize selenium window',
                'only one window'
            ], {
                client,
                OFFSET: index * 9
            })
        })
        .then(r => r[1]())
        /*
        .then(() => client.requestHandler.create({
            path: '/status',
            method: 'GET'
        }))
        */
        .catch(e => console.log(e))
        // Down here at the bottom for safetey
        .then(() => sessionSync = false)
};
module.exports = createWebdriverClient;
createWebdriverClient;
