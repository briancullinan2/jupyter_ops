var tryReset = false;
try {
    var io = sockifyServer(8098);
} catch (e) {
    if (e.code !== 'EADDRINUSE') {
        throw e;
    } else {
        tryReset = true;
    }
}
var fs = sockifyClient(require('fs'), 'fs', 'http://localhost:8098');
if (tryReset) {
    fs.___close();
    var io = sockifyServer(8098);
}
