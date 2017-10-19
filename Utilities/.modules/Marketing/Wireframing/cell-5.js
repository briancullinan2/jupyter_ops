var Git = require('nodegit');
var url = 'https://github.com/megamindbrian/sosmethod';
var directory = './sosmethod';
var clone = Git.Clone.clone;
var branch = 'master';
var cloneOptions = new Git.CloneOptions();
cloneOptions.checkoutBranch = branch;

clone(url, directory, cloneOptions)
    .then(function (repository) {
        console.log(repository);
    })
    .catch(e => console.log(e));
0