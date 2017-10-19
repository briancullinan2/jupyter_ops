var importer = require('../Core');
var path = require('path');

var projectTree = (project) => {
    var words = [];

    var wordCount = function (r) {
        var words = r['packages'].map(p => p.split('.ts/')[1])
            .concat(r['packages'].map(p => path.basename(p.split('.ts/')[0])))
            .concat(r['relatives'].map(r => path.basename(r)))
            .concat(r['relatives'].map(r => path.basename(r.split('.ts/')[0])));
        var wordCounts = {};
        words.forEach(w => {
            if (typeof wordCounts[w] === 'undefined') {
                wordCounts[w] = 1;
            } else {
                wordCounts[w]++;
            }
        });
        var resultWords = Object.keys(wordCounts).map((d) => ({name: d, size: wordCounts[d]}));
        var edges = [];
        r['packages'].forEach(
            p => edges[edges.length] = {source: p.split('.ts/')[1], target: path.basename(p.split('.ts/')[0])});
        r['relatives'].forEach(p => edges[edges.length] = {
            source: path.basename(p.split('.ts/')[0]),
            target: path.basename(p.split('.ts/')[1])
        });
        return {nodes: resultWords, edges: edges};
    };

    return importer.import('relative paths and includes', {project})
        .then(projectRelatives => projectRelatives(project))
        .then(r => {
            words = r;
        })
        .then(() => importer.import('../Frameworks/d3.ipynb[d3TreeToSVG]'))
        .then(d3TreeToSVG => {
            var tree = wordCount(words);
            return d3TreeToSVG(tree.nodes, tree.edges);
        });
};
module.exports = projectTree;

