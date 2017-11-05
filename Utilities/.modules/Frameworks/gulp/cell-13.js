var fs = require('fs');var path = require('path');var gulp = require('gulp');var tap = require('gulp-tap');var importer = require('../Core');var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;var project = typeof project === 'undefined' ? path.join(PROFILE_PATH, 'Documents/portal') : project;var relatives = [];var packages = [];var missing = {};var missingPackages = [];gulp.task('get relative imports', function () {
    return gulp.src(['**/*.+(ts|js|ipynb)'], {
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
        cwd: project
    })        .pipe(tap(function (file) {
        try {
            var content = file.contents.toString();            var re = /(from|require)[\s\\(]*["'](.*?)['"][\\\s\)]*/ig;            var m;            while ((m = re.exec(content))) {                if (m[2].match(/^\./)) {                    relatives[relatives.length] = file.path + '/' + m[2];                    var res = path.resolve(path.join(path.dirname(file.path), m[2]));                    if (!fs.existsSync(res) && !fs.existsSync(res + '.ts')
                        && !fs.existsSync(res + '.js') && !fs.existsSync(res + '.ipynb')) {                        var key = path.basename(m[2]);                        if (typeof missing[key] !== 'undefined') {                            missing[key][missing[key].length] = file.path + '/' + m[2];                        } else {                            missing[key] = [file.path + '/' + m[2]];                        }                    }                } else {                    packages[packages.length] = file.path + '/' + m[2];                    try {                        require.resolve(m[2]);                    } catch (e) {                        if (missingPackages.indexOf(m[2]) === -1) {                            missingPackages[missingPackages.length] = file.path + '/' + m[2];                        }                    } finally {                    }                }            }        } catch (e) {
            console.log(e);
        }
    }))
});var getRelativeImports = (p) => {    relatives = [];    packages = [];    missing = {};    missingPackages = [];    project = p;
    return importer.import('gulp.ipynb[Promise gulp task]', {gulp})        .then(gulpPromise =>  gulpPromise(['get relative imports']))        .then(r => ({relatives, packages, missing, missingPackages}))
        .catch(e => console.log(e))};module.exports = getRelativeImports;