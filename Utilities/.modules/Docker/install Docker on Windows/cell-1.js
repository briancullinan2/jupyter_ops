$$.async();
var exec = require('child_process').exec;
var http = require('https');
var fs = require('fs');
var elevateLoc = path.join(process.cwd(), 'elevate.zip');
var expandedLoc = path.join(process.cwd(), 'elevate');
http.get('https://github.com/jpassing/elevate/releases/download/1.0/elevate.zip', (r) => {
    http.get(r.headers['location'], (r) => {
        r.pipe(fs.createWriteStream(elevateLoc)).on('finish', () => {
            var expand = exec('powershell -c "Expand-Archive -Force ' + elevateLoc + ' ' + expandedLoc + '"', () => {
                $$$.done('downloaded and extracted elevate.exec');
            });
            expand.stdout.on('data', (d) => console.log(d));
            expand.stderr.on('data', (d) => console.log(d));
        });
    });
});

