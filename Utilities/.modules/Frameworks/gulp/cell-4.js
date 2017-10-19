var execSync = require('child_process').execSync;
try {
    require.resolve('gulp');
    require.resolve('gulp-watch');
} catch (e) {
    execSync('npm install "github:gulpjs/gulp.git#4.0" gulp-watch');
}
var gulp = require('gulp'),
    watch = require('gulp-watch');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var project = PROFILE_PATH + '/Documents/universal';

var searching = false;
;
gulp.task('watch for changes', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event 
    return watch('src/**/*.ts', {
        cwd: project,
        ignoreInitial: true,
        read: false,
        readDelay: 100
    }, function () {
        if (!searching) {
            searching = true;
            projectRelatives(project).then(() => {
                searching = false
            });
        }
    });
});

$$.async();
gulp.task(['watch for changes'])();

