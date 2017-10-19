// initialize

// How to use getCells?
getCells = (notebook, types = ['*', 'code']) => {
    var cells = [];
    var kernel;
    return streamJson(notebook, [true, {emitPath: true}], (match) => {
        if (match.path[0] === 'metadata'
            && match.path[1] === 'kernelspec') {
            kernel = match.value;
        } else if (match.path[0] === 'cells'
            && types.indexOf(match.value.cell_type) > -1) {
            cells[cells.length] = match.value;
        }
    }).then((file) => {
        if (types.indexOf(kernel.language) === -1
            && types.indexOf('*') === -1) {
            console.log('tried to import ' + types + JSON.stringify(kernel))
            return [];
        }
        return cells.map(c => Object.assign(c, {language: kernel.language}));
    });
};


// $$.done() for our dumb parser
