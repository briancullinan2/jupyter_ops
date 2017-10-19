var fs = require('fs');
var path = require('path');
var cwd = 'C:\\Users\\brian.cullinan\\Documents\\portal\\';
var execSync = require('child_process').execSync;
var packages = execSync('npm list --dev', {cwd: cwd}).toString().split('\n');
var packageJson = JSON.parse(fs.readFileSync(path.join(cwd, 'package.json')));
var deps = Object.keys(packageJson.dependencies);
deps.forEach((d, k) => {
    packages.forEach((p, i) => {
        if (p.indexOf(d + '@') > -1) {
            packageJson.dependencies[d] = '~' + p.split('@').pop().replace(' deduped', '');
        }
    });
});
console.log(packages);
var devDeps = Object.keys(packageJson.devDependencies);
devDeps.forEach((d, k) => {
    packages.forEach((p, i) => {
        if (p.indexOf(d + '@') > -1) {
            packageJson.devDependencies[d] = '~' + p.split('@').pop().replace(' deduped', '');
        }
    });
});
$$.mime({'text/html': '<pre>' + JSON.stringify(packageJson, null, 4) + '</pre>'});
