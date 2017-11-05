var importer = require('../Core');
var path = require('path');

try {
    var r = importer.import([
        'test cells continuously',
        'list project files'
    ]);
    var {testCells, listInProject} = r;

    var files = listInProject(path.dirname(__dirname), '**/*.ipynb');
    var cells = files.reduce((cells, f) => {
        try {
            const notebookCells = importer.interpret(path.basename(f));
            const testable = notebookCells
                .filter(c => c.markdown.join('').match(/test/ig)
                        && c.fresher.indexOf('describe(') > -1
                       && c.filename.indexOf('test runner.ipynb') === -1);
            const allCellsForNotebook = [];
            
            // include cells leading up to matching cell, concat ... indexOf ...
            testable.forEach(c => {
                const leadingCells = notebookCells.slice(0, notebookCells.indexOf(c))
                // TODO: not necessary, no questions means it's unaddressable by matching
                    .filter(c => c.questions.length > 0)
                    .concat([c])
                leadingCells.forEach(c => allCellsForNotebook.push(c));
            });
            
            cells = cells.concat(allCellsForNotebook.filter((c, i, arr) => arr.indexOf(c) === i));
        } catch (e) {
            if((e + '').indexOf('Nothing found') > -1) {
                return cells; // ignore it
            }
            throw e;
        }
        return cells;
    }, [])
    cells.forEach(r => {
        try {
            var required = r.runInNewContext(global);
            Object.assign(global, required);
        } catch (e) {
            console.log(e);
        }

    });
} catch (e) {
    console.log(e);
}

describe('test runner service', () => {
    it('should find all notebook tests', () => {
        // TODO: automatically turn console logs on and off for tests that fail or have changed
        //console.log(cells.map(c => c.id));
        //testCells(cells).then(r => {
        //    done();
        //})

        // TODO: put them in the order to include them in the context
        
    })
    
    it('should run notebook tests', () => {
        
    })
    
    it('should run all tests when a dependency changes', () => {
        
    })
})