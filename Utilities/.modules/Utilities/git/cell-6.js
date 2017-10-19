var importer = require('../Core');
var _ = require('underscore');
var fs = require('fs');
var path = require('path');
var execSync = require('child_process').execSync;
var gulp = require('gulp');
var copy = require('gulp-copy');
var clean = require('gulp-clean');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var project_orig = PROFILE_PATH + '/Documents/portal';
var project = PROFILE_PATH + '/Documents/portal3';
process.chdir(PROFILE_PATH + '/Documents');

gulp.task('clear project', function () {
    return gulp.src(project, {read: false})
        .pipe(clean({force: true}));
});

gulp.task('copy index', function () {
    return gulp.src(project_orig)
        .pipe(copy(project))
        .dest(project);
});

var getResetCommit = (branch, parent) => {
    const b = branch.replace('HEAD -> ', '').trim();
    execSync('git checkout ' + b);
    execSync('git reset --mixed ' + parent.replace('HEAD -> ', '').trim());
    execSync('git add -A')
    execSync('git commit -m "auto reset ' + b + '"')
}

var resetAllBranches = () => {
    var children = [];
    var nodeTree = _.sortBy(gitTree(project), a => a.time);
    var promises = [];
    for (const n of nodeTree) {
        var current = n;
        var parentCount = 0;
        while (typeof current.parent !== 'undefined'
        && current.parent.branch === current.branch) {
            current = current.parent;
            parentCount++;
        }
        if (parentCount > 0 && typeof current.parent !== 'undefined') {
            promises.push(resolve => {
                try {
                    if (typeof n.children !== 'undefined') {
                        children.push(n);
                    }
                    getResetCommit(n.branch, current.parent.name);
                } finally {
                    var nodeTree = _.sortBy(gitTree(project), a => a.time);
                    svgs.push(displayBranches(nodeTree));
                    resolve();
                }
            });
        }
    }
    return importer.runAllPromises(promises)
        .then(() => children);
}

var gitTree, displayBranches, tasksToPromise, listInProject;
var svgs = [];
var gitTipOfTree = () => {
    svgs = [];
    return importer.import([
        'gulp tasks',
        'json git tree',
        'display git branches tree',
        'list files project'
    ], {gulp})
        .then(r => {
            tasksToPromise = r[0];
            gitTree = r[1];
            displayBranches = r[2];
            listInProject = r[3];
            if (fs.existsSync(project)) {
                return tasksToPromise(['clear project']);
            }
        })
        .then(() => Promise.all([
            listInProject(project_orig, '**/*'),
            listInProject(project_orig + '/.git', '**/*')
        ]))
        .then(r => {
            for (file of [].concat(...r).sort()) {
                const dirname = path.dirname(
                    file.replace(project_orig, project)).split('/');

                for (var i = 2; i <= dirname.length; i++) {
                    if (!fs.existsSync(dirname.slice(0, i).join('/'))) {
                        fs.mkdirSync(dirname.slice(0, i).join('/'));
                    }
                }
                fs.copyFileSync(file, file.replace(project_orig, project));
            }
            process.chdir(project);
        })
        .then(() => {
            var nodeTree = _.sortBy(gitTree(project), a => a.time);
            return displayBranches(nodeTree);
        })
        .then(r => svgs.push(r))
        .then(() => resetAllBranches())
        .then(() => svgs)
};
module.exports = gitTipOfTree;
