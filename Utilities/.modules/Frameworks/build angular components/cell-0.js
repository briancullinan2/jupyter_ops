var execSync = require('child_process').execSync;
try {
    require.resolve('@angular/cli');
} catch (e) {
    execSync('npm install @angular/cli');
}

// use utility/filesystem to mock all fs and typescript commands
var mockTypescriptFs, cli;

var importer = require('../Core');
// call the CLI just like from command line
var ng = (project, args = ['generate', 'component', 'test']) => {
    // set up project path
    var previous = process.cwd();

    var conf = {
        cliArgs: args,
        inputStream: null,
        outputStream: process.stdout
    };

    // execute
    return importer.import('memory-fs rewire')
        .then(mockTypescriptFs => {
            // overlay out temp filesystem on top of current filesystem
            mockTypescriptFs(project);
            cli = require('@angular/cli');
            process.chdir(project);
            return cli(conf);
        });
};
module.exports = ng;

