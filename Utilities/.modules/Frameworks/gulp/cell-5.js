var importer = require('../Core');
var gulp = require('gulp');
var tap = require('gulp-tap');
var JSONStream = require('JSONStream');
var Duplex = require('stream').Duplex;

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var project = PROFILE_PATH + '/jupytangular2';

var bufferToStream = (buffer) => {
    let stream = new Duplex();
    stream.push(buffer);
    stream.push(null);
    return stream;
}

var searchNotebooks = (search) => {
    var cells;
    gulp.task('search notebooks', function () {
        cells = [];
        return gulp.src(
            ['**/*.ipynb', '!**/node_modules/**', '!**/\\.*'],
            {cwd: project})
            .pipe(tap(file => {
                var matches = bufferToStream(file.contents)
                    .pipe(JSONStream.parse([true, {emitPath: true}]));
                var accumulatedMarkdown = [], counter = 0;
                matches.on('data', match => {
                    var c = match.value;
                    if (match.path[0] === 'cells') {
                        counter++;
                        var source = c.source.join('');
                        if (c.cell_type === 'markdown') {
                            accumulatedMarkdown.push(source);
                        } else if (c.cell_type !== 'code') {
                            return;
                        }

                        if (source.match(new RegExp(search, 'ig'))) {
                            cells[cells.length] = {
                                filename: file.path,
                                code: source,
                                markdown: accumulatedMarkdown,
                                from: counter - 1,
                                to: counter,
                                language: c.language
                            };
                        }
                        accumulatedMarkdown = [];
                    }
                });
            }));
    });

    return importer.import('gulp tasks to promise')
        .then(tasksToPromise => tasksToPromise(['search notebooks'], []))
        .then(() => cells);
};
module.exports = searchNotebooks;

