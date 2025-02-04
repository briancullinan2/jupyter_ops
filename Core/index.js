// How to parse a well formatted simple notebook the cheap way?

// TODO: read create cells and import using first method

var path = require('path')
var Module = require('module').Module
var fs = require('fs')

var notebookPath = path.resolve(path.join(__dirname, 'import.ipynb'))
var notebook = JSON.parse(fs.readFileSync(notebookPath).toString())
var cells = notebook.cells
    .filter(c => c.cell_type === 'code')
    .map(c => c.source.join(''))

module.exports = cells.reduce((obj, code, i) => {
    var cellPath = `${notebookPath}[${i}]`
    var newModule = new Module(cellPath, process.mainModule)
    Module._cache[cellPath] = newModule
    Object.assign(newModule, {
        exports: {},
        parent: module,
        filename: cellPath,
        paths: Module._nodeModulePaths(path.dirname(cellPath))
    })
    newModule._compile(code, cellPath)
    newModule.loaded = true
    return Object.assign(obj, newModule.exports)
}, {})

Module._extensions['.ipynb'] = (module, filename, ctx) => {
    console.log('hit')
    const tmpModule = {
        _compile: () => {}
    }
    tmpModule._compile = () => (module.exports = newModule.exports.import(filename, ctx))
    return Module._extensions['.js'](tmpModule, filename, ctx)
}
