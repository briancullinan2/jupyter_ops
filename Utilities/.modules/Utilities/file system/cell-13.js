var glob = require('glob');
var path = require('path');

// TODO: pull all from gitignore library and add to ignore list
//  https://github.com/github/gitignore
// TODO: submit script to github project for fame and fortune!

// But we also want to automatically load projects?
var listInProject = (root, match = '{,*,*/,*/*/*,*/*/*/*,*/*/*/*/*}package.json') => {
    return glob.sync(match, {
        ignore: ['**/node_modules/**',
            '**/packages/**',
            '**/vendor/**',
            '**/*test*/*',
            '**/*Test*/*',
            '**/Downloads/**',
            '**/bin/**',
            '**/obj/**',
            '**/Library/**',
            '**/Applications/**',
            '**/AppData/**',
            '**/Trash/**',
            '**/Music/**',
            '**/wp-content/**',
            '**/wp-includes/**',
            '**/Pods/**',
            '**/svn/**',
            '**/lib/**',
            '**/.git/**',
            '**/.vscode/**',
            '**/.npm/**',
            '**/\\.*',
            '**/.*',
            '**/Cache/**',
            '**/Creative Cloud Files/**'],
        cwd: path.resolve(root),
        silent: true,
        nodir: true,
        strict: false
    })
    .map(m => path.join(root, m))
};
module.exports = listInProject;
listInProject;

