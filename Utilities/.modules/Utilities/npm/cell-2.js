var execSync = require('child_process').execSync;
try {
    require.resolve('npm');
} catch (e) {
    execSync('npm install npm');
}

var npm = (project, args, conf) => {
    var previous = process.cwd();
    process.chdir(project);
    return importer
        .import('memory-fs rewire')
        .then(r => {
            // set up project path
            return new Promise((resolve, reject) => {
                //if(typeof mockTypescriptFs == 'undefined') {
                //    mockTypescriptFs = eval("'use strict';" + r[0].code);
                // overlay out temp filesystem on top of current filesystem
                //    mockTypescriptFs(project, data);
                //}

                var cli = require('npm');
                cli.load(conf, (err) => {
                    // handle errors
                    if (err) {
                        return reject(err);
                    }

                    // install module
                    cli.commands[args[0]](args.slice(1), (er, data) => {
                        if (er) {
                            return reject(er);
                        }
                        // log errors or data
                        resolve(data);
                    });

                    cli.on('log', (message) => {
                        // log installation progress
                        console.log(message);
                    });
                });
            });
        })
        .then((r => {
            process.chdir(previous);

            return r;
        }));
};
module.exports = npm;
