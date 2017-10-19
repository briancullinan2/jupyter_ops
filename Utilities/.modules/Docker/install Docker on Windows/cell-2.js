$$.async();
var exec = require('child_process').exec;
var http = require('https');
var fs = require('fs');
var dockerLoc = path.join(process.cwd(), 'InstallDocker.msi');
var downloads = http.get('https://download.docker.com/win/stable/InstallDocker.msi', (r) => {
    r.pipe(fs.createWriteStream(dockerLoc)).on('finish', () => {
        $$.done('downloaded InstallDocker.msi');
    });
});
