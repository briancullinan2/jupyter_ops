// initialize

if (typeof imported !== 'object' || imported === null) {
    var imported = {};
}

// cache results when notebooks are processed
assignResults = (results, notebook) => {
    var filename = path.basename(notebook);
    results = results.reduce((obj, r, i) => {
        if (typeof r === 'function') {
            obj[filename + '[' + i + ']'] = r;
            obj[r.name] = obj[filename + '[' + i + ']'];
        }
        else if (typeof r === 'object'
            && typeof r['error'] !== 'undefined') {
            obj[filename + '[' + i + ']'] = r['error'];
            console.log(filename + '[' + i + ']' + '\n' + r['error']['evalue']);
        }
        return obj;
    }, {});
    // TODO: offer results as an express service instead of global context?
    imported[filename] = results;
    return results;
};

// $$.done() for our dumb parser
