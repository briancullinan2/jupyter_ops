var path = require('path');
// TODO: fix mono build step
var execSync = require('child_process').execSync;
var getIdentityServer = (name = 'act-identity') => {
    var DOCKERFILE = path.resolve(__dirname);
    return identityDockerfile(DOCKERFILE)
        .then(r => execSync('docker build -t ' + name + ' "' + DOCKERFILE + '"').toString())
        .then(r => {
            var ps = execSync('docker ps -a').toString();
            if (ps.indexOf(name) !== -1) {
                return r
                    + execSync('docker stop ' + name).toString()
                    + execSync('docker rm ' + name).toString();
            }
            return '';
        })
        .then(r => r + execSync('docker run --name ' + name + ' ' + name).toString())
        // wait for process to start
        .then(() => new Promise((resolve, reject) =>
            setTimeout(resolve, 5000)));
};
(getIdentityServer);
