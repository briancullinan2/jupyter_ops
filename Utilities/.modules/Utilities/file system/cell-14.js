var glob = require('glob');var path = require('path');// But we also want to automatically load projects?var listInProject = (root, match = '**/package.json') => {
    return glob.sync(match, {
        ignore: ['**/node_modules/**',
            '**/packages/**',
            '**/vendor/**',
            '/Users/**/Downloads/**',
            '/Users/**/Library/**',
            '/Users/**/Applications/**',
            '/Users/**/Music/**',
            '**/wp-content/**',
            '**/wp-includes/**',
            '**/Pods/**',
            '**/svn/**',
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
    .map(m => path.join(root, m))};module.exports = listInProject;listInProject;