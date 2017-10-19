var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var project = PROFILE_PATH + '/universal';
var server = require(project + '/src/server/sockify-server.js').sockifyServer(8000);
var client = require('socket.io-client').connect('https://localhost:8000');
client.emit('close');
