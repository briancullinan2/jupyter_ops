$$.async();
//  /usr/bin/osascript -e 'do shell script "/path/to/myscript args 2>&1 etc" with administrator privileges'
var exec = require('child_process').exec;
var installCmd = exec('npm install rimraf JSONStream', () => {
    $$.done('installed basic node utilities, rimraf, JSONStream, etc');
});
installCmd.stdout.on('data', (d) => console.log(d));
installCmd.stderr.on('data', (d) => console.log(d));
