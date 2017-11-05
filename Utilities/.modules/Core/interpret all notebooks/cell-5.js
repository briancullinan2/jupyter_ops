var importer = require('../Core');
var path = require('path');
var assert = require('assert');
var fs = require('fs');

var {
    fuseSearch,
    interpretObject,
    cacheNotebook
} = importer.import('interpret questions.ipynb');

assert(fs.existsSync('../Core/interpret all notebooks.ipynb'), 'missing ' + path.resolve('../Core/interpret all notebooks'));
cacheNotebook('../Core/interpret all notebooks.ipynb')

// just do it in load mode
if(typeof describe === 'undefined') {
    var it = ((l, func) => func());
    var beforeEach = ((func) => func());
    var describe = ((l, func) => func());
//    var describe = (() => {});
}

var cacheAll;
describe('notebook search service', () => {
    beforeEach(() => {
        if(typeof cacheAll === 'undefined') {
            const r = fuseSearch('find all notebooks');
            assert(r.length > 0);
            const search2 = interpretObject([r[0]])[0];
            cacheAll = importer.runInNewContext(search2.code, {
                __filename: search2.filename,
            }, {}, false).cacheAll
        }
    })
    
    it('should refresh cache when file changes', () => {
        assert(path.resolve('.').indexOf('Core') > -1);
        cacheAll(path.resolve('../'));
        assert(true);
    })
})
