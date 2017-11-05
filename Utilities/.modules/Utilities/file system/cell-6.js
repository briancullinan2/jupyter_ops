var importer = require('../Core');
var path = require('path');

var extensions = /\.(ts|js|ipynb)\//ig;

var icons = (c) => {
    return c.replace('.component', '\u2699')
           .replace('.module', '\u26E9')
           .replace('.service', '\u26F4')
           .replace('.routing', '\u2697');
}

var wordCount = function (r) {
    var words = r['packages'].map(p => p.split(extensions)[2])
        .concat(r['packages'].map(p => path.basename(p.split(extensions)[0])))
        .concat(r['relatives'].map(r => path.basename(r)))
        .concat(r['relatives'].map(r => path.basename(r.split(extensions)[0])));
    var wordCounts = {};
    words.forEach(w => {
        if (typeof wordCounts[w] === 'undefined') {
            wordCounts[w] = 1;
        } else {
            wordCounts[w]++;
        }
    });
    var resultWords = Object.keys(wordCounts).map((d, i) => ({
        name: icons(d),
        branch: ((/\.component|\.module|\.service|\.routing/ig).exec(d) || {})[0],
        size: wordCounts[d]}));
    var edges = [];
    r['packages'].forEach(p => edges[edges.length] = {
        source: icons(p.split(extensions)[2]),
        target: icons(path.basename(p.split(extensions)[0]))
    });
    r['relatives'].forEach(p => edges[edges.length] = {
        source: icons(path.basename(p.split(extensions)[0])),
        target: icons(path.basename(p.split(extensions)[2]))
    });
    return {nodes: resultWords, edges: edges};
};

var formatNodes;
var projectTree = (project) => {
    var words = [];

    return importer.import('relative paths and includes', {project})
        .then(projectRelatives => projectRelatives(project))
        .then(r => {
            words = r;
        })
        .then(() => importer.import('d3.ipynb[format tree]'))
        .then(r => formatNodes = r)
        .then(() => importer.import('d3.ipynb[display d3 tree]'))
        //.then(() => importer.import('d3.ipynb[d3 tiered pie chart]'))
        .then(d3TieredPieSVG => {
            var tree = wordCount(words);
            var nodeNames = tree.nodes.map(n => n.name);
            tree.nodes = tree.nodes
                .filter((n, i, arr) => nodeNames.indexOf(n.name) === i)
                .map((n, i) => {
                    Object.assign(n, {index: tree.nodes
                                      .filter(f => f.branch === n.branch).indexOf(n)})
                    return n;
                })
            var edgeNames = tree.edges.map(n => n.source + '/' + n.target);
            tree.edges = tree.edges
                .filter((n, i, arr) => edgeNames.indexOf(n.source + '/' + n.target) === i)
            var root = formatNodes(tree.nodes, tree.edges);
            return d3TieredPieSVG(root);
        })
        .catch(e => console.log(e))
};
module.exports = projectTree;

