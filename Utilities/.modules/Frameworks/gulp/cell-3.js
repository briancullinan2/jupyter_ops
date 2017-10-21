var gulp = require('gulp');// I wish Linus Torvolds had absolute power over everything javascript(+derivatives) and he could just do a massive purge of all the bullshit.var tasksToPromise = (tasks) => {    return new Promise((resolve, reject) => {
        gulp.series.apply(gulp, tasks.concat([function (done) {
            resolve(done());
        }]))();
    });};module.exports = tasksToPromise;tasksToPromise;