var importer = require('../Core');

// just do it in load mode
if(typeof describe === 'undefined') {
    var it = ((l, func) => func());
    var beforeEach = ((func) => func());
    var describe = ((l, func) => func());
//    var describe = (() => {});
}

describe('de-linting service', () => {
    it('should de-lint a file', (done) => {
        const r = importer.interpret('diff code blocks');
        assert(r.filename.indexOf('diff.ipynb') > -1);
        //delint().then(r => {
        //    console.log(r);
            done();
        //}).catch(r => console.log(r));
    }).timeout(10000)
})

