var path = require('path');
var fs = require('fs');
var importer = require('../Core');
var writeFileSync = fs.writeFileSync;

var GITHUB_TOKEN = path.join(
    process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE, '.credentials',
    'github_token.txt');

// add some run commands to the bash script
var bashToRun = (code) => code.split('\n').map(l => 'RUN ' + l)
    .join('\n').replace(/\\\s*\nRUN\s*/ig, '\\\n ');

// create a selenium Dockerfile with a vnc connection
var identityDockerfile = (output) => {
    var DOCKERFILE = path.resolve(path.join(output, 'Dockerfile'));
    return importer.interpretAll([
        'run Mono',
        'linux dev tools',
        // add some extra services
        'act identity repository',
        'build mono'
    ]).then(r => {
        // lets fix the middle result
        r[1].code = bashToRun(r[1].code);
        r[2].code = bashToRun(r[2].code)
            .replace('{username}', fs.readFileSync(GITHUB_TOKEN));
        r[3].code = bashToRun(r[3].code);
        return r.map(r => r.code).join('\n');
    })
        .then(r => {
            // save the Dockerfile
            writeFileSync(DOCKERFILE, r);
            return r;
        });
};
(identityDockerfile);
