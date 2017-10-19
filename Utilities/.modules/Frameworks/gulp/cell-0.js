var execSync = require('child_process').execSync;
try {
    require.resolve('gulp');
    require.resolve('gulp-runtime');
    require.resolve('gulp-replace');
    require.resolve('gulp-tap');
} catch (e) {
    execSync('npm install "github:gulpjs/gulp#4.0" gulp-runtime gulp-replace gulp-tap');
}
var gulp = require('gulp');
var tap = require('gulp-tap');
var replace = require('gulp-replace');

// rename the project
gulp.task('build :src :dest', function (files, project) {
    return gulp
        .src(files, {cwd: project})
        .pipe(replace('appId: \'my-app-id\'', 'appId: \'jupytangular-module-server\''))
        .pipe(tap(function (file) {
            console.log(file.contents.toString());
        }))
});

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var project = PROFILE_PATH + '/Documents/universal';

gulp.task('default', () => gulp.task(['build :src :dest'])(['**/app.browser.module.ts'], project));

$$.async()
try {
    gulp.series(() => gulp.task(['default'])(), function (done) {
        done();
        $$.sendResult();
    })();
} catch (e) {
    $$.sendError(e);
}