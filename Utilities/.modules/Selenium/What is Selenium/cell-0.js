var importer = require('../Core');
var fs = require('fs');

// add some run commands to the bash script
var bashToRun = (code) => code.split('\n').filter(n => n.trim().length > 0).map(l => 'RUN ' + l.trim())
    .join('\n').replace(/\\\s*\nRUN\s*/ig, '\\\n ');

// create a selenium Dockerfile with a vnc connection
var seleniumDocker = (outputFile) => {
    return importer.interpret([
        'run selenium',
        // add some extra services
        'linux dev tools',
        'vnc html',
        'vnc docker'
    ]).then(r => {
        // convert some results to Docker RUN commands instead of bash
        r[1].code = bashToRun(r[1].code);
        r[2].code = bashToRun(r[2].code);
        return r.map(r => r.code).join('\n');
    })
        .then(r => {
            // save the Dockerfile
            fs.writeFileSync(outputFile, r);
            return r;
        })
        .catch(e => console.log(e))
};
module.exports = seleniumDocker;
