var execSync = require('child_process').execSync;
try {
    require.resolve('bluebird');
    require.resolve('socket.io');
    require.resolve('socket.io-client');
} catch (e) {
    execSync('npm install bluebird automock socket.io socket.io-client');
}

$$.async();
var importer = require('../Core');
var automock;
importer.import('mock all properties and functions using rewire')
    .then(r => {
        automock = r;
        $$.sendResult('automock loaded');
    });

