var importer = require('../Core');
var path = require('path');
var gulp = require('gulp');
var tap = require('gulp-tap');
var replace = require('gulp-replace');

// list all broken references in modules?
var tasksToPromise, findSimilarFile;
var projectRelatives = (project) => {
    var missing, missingPackages;

    var fixRelative = (m, match) => {
        if (typeof m === 'undefined') {
            return;
        }
        var file = m.split('.ts/')[0] + '.ts';
        var fromPath = m.split('.ts/')[1];
        var newRelative = path.relative(path.dirname(file), path.join(project, match));
        gulp.task('fix include', function () {
            var fixFile = path.relative(project, file);
            console.log('Replacing ' + fromPath + ' -> ' + newRelative + ' in ' + fixFile)
            return gulp.src(['**/' + fixFile], {cwd: project})
                .pipe(replace(fromPath, newRelative))
                .pipe(gulp.dest(project));
        });

        return tasksToPromise(['fix include'], []);
    };

    var uniqueArray = (arr) => arr.filter((value, index, array) => array.indexOf(value, index + 1) < 0);

    gulp.task('add packages', function () {
        var toAdd = '';
        return gulp.src('package.json', {cwd: project})
            .pipe(tap(file => {
                // TODO: resolve using existing package.json from another project?  This method of using the import isn't going to go far, how does NPM do this?
                // Possible to search for top two directories? @angular/material versus angular2-jwt versus zone.js/dist/zone
                var content = file.contents.toString();
                missingPackages.map(p => p.split('.ts/')[1].forEach(m => {
                    if (content.indexOf(m) === -1) {
                        toAdd += '"' + m + '": "latest",'
                    }
                }));
                if (toAdd !== '') {
                    console.log('Adding ' + toAdd);
                    file.contents = new Buffer(content.replace(/"dependencies"\s*:\s*\{/ig, (m) => m + toAdd));
                }
            }))
            .pipe(gulp.dest(project));
    });

    return importer.import([
        'relative paths and includes',
        'task to promise',
        'similar filename in project'
    ], {gulp})
        .then(r => {
            tasksToPromise = r[1];
            findSimilarFile = r[2];
            return r[0];
        })
        .then(r => r['getRelativeImports'](project))
        .then(r => {
            missing = r['missing'];
            missingPackages = r['missingPackages'];
            return Promise.all(Object.keys(missing).map(k => findSimilarFile(k, project).then(f => {
                if (typeof f === 'undefined') {
                    return Promise.resolve();
                }
                return Promise.all(missing[k].map(m => fixRelative(m, f)));
            })));
        })
        .then(r => tasksToPromise(['add packages']));
    // TODO: try building with all results resolved
    // TODO: create path and apply
};
module.exports = projectRelatives;
