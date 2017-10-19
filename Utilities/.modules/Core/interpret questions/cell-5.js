// How to represent search results in markdown?
var resultMarkdown = (res) => {
    return ('\n\n\n' + res.length + ' match'
        + (res.length !== 1 ? 'es' : '')
        + ' found: ' + res.join(' , ') + '\n\n\n'
        + (res.length > 0
            ? ('\n\n\n' + cacheIds[res[0]].markdown.join('\n') + '\n\n\n'
                + '```\n\n\n' + cacheIds[res[0]].code + '\n\n\n```\n\n\n')
            : ''));
};

var interpretMarkdown = (results) =>
    (typeof results[0] !== 'undefined' && typeof results[0] !== 'string'
        ? results.reduce((str, res) => str += resultMarkdown(res), '')
        : resultMarkdown(results));

module.exports = interpretMarkdown;
