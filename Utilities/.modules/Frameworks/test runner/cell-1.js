var importer = require('../Core');
var path = require('path');
var Module = require('module').Module;
var Mocha = require('mocha');

// call test runner
var mocha;
if(typeof mocha === 'undefined') {
    mocha = new Mocha({
        ui: 'bdd',
        reporter: 'list'
    });
}

function resetTests(suite) {
    suite.tests.forEach(function(t) {
        delete t.state;
        t.timedOut = false;
    });
    suite.suites.forEach(resetTests);
    suite.tests = [];
}

var testCells = (cells, ctx = {}) => {
    cells.forEach(r => {
        mocha.suite.emit('pre-require', ctx, r.id, mocha);
        Object.assign(ctx, Mocha);
        var required = r.runInNewContext(ctx);
        Object.assign(ctx, required);
        mocha.suite.emit('require', required, r.id, mocha);
        mocha.suite.emit('post-require', ctx, r.id, mocha);    
    });
    return new Promise(resolve => mocha.run(function (failures) {
        resetTests(mocha.suite);
        resolve(failures);
    }));
}
module.exports = testCells;
