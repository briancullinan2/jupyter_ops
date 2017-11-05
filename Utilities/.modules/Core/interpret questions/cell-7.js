// TODO: interpret markdown leading up to code results and find the resulting function in the list// for now, the boring solution is to assume all markdown output is a question?// How to store code markdown results for later use?if (typeof cellCache === 'undefined') {    var cellCache = [];
}if (typeof cacheIds === 'undefined') {    var cacheIds = {};}var cacheCells = ((cells, notebook) => {
    var filename = path.basename(notebook);
    // update cells when files change
    cellCache.forEach(c => {
        if(c.id.indexOf(filename) > -1) {
            // does this evaluate in contant time because it is by reference?
            cellCache.splice(cellCache.indexOf(c), 1);
        }
    });
    var newCache = accumulateMarkdown(cells);    newCache.forEach((c, i) => {
        var questions = regexToArray(re, c.markdown)
            .map(r => r.replace(/how to|\?/ig, '').trim())            .concat(regexToArray(re, c.source)                .map(r => r.replace(/how to|\?/ig, '').trim()));
        cacheIds[filename + '[' + i + ']'] = Object.assign({}, c, {            id: filename + '[' + i + ']',            filename: notebook,            questions: questions,            notebook: filename,        });        questions.forEach((q) => cellCache.push({            id: filename + '[' + i + ']',            question: q        }));    });
    return cellCache;});