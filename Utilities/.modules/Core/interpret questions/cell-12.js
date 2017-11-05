
// do nothing in cell run mode, describe is injected by test runner.ipynb
if(typeof describe === 'undefined') {
    var describe = (() => {});
}

describe('importer search service', () => {
    it('should require a codebase using nothing but search terms', () => {
        
    })
    
    it('should match entire notebooks', () => {
        
    })
    
    it('should match code cells by numeric index', () => {
        
    })
    
    it('should return the full cell descriptor from a list of IDs', () => {
        
    })
    
    it('should store searchable content for later lookup', () => {
        /*
        var assert = require('assert');
        var testNotebook = 'test import.ipynb';
        var testCells = [
            {cell_type: 'code', source: []},
            {cell_type: 'markdown', source: ['how to test for errors line 2?']},
            {cell_type: 'code', source: ['(function (err) { throw error; })']}
        ];
        global[testNotebook + '[1]']
            = eval(testCells[testCells.length - 1].source.join('').trim());
        var markdownCache = cacheCells(testCells, testNotebook);
        assert(markdownCache[0].id == testNotebook + '[1]');
        */
    })
    
})

