var importer = require('../Core');
var testCells = importer.import('test cells continuously');
var watch = require('glob-watcher');

var callTests = (tests) => {
    try {
        var cells = importer.interpret(typeof tests === 'string' ? [tests] : tests);
        return testCells(cells);
    } catch (e) {
        console.log(e);
    }
}

// TODO: code analysis to combine blocks into modules?

var rateLimiter;
var testWatcher = (files, tests) => {
    files = typeof files === 'string' ? [files] : files;
    watch(['../**/*.ipynb'], () => {
//    watch(['../!(\.*|node_modules)**/*'], () => {
        console.log('running all tests');
        return callTests(tests)
    });
    callTests(tests);
    var stdin = process.openStdin();
    stdin.addListener("data", function(d) {
        stdin.close();
    });
    // TODO: restart this test script every loop? fork and abandon current thread?
    // TODO: update cell cache in intrepret notebooks.ipynb
    // TODO: git apply without whitespace, reset the rest?  separate index?  how do make git-scenario app?
    // TODO: re-import cells on Utilities/.modules folder change. run all "watcher" commands from a test below?  mocha.grep?
}
module.exports = testWatcher;
