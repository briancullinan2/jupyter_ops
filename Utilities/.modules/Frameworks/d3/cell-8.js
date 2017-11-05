var formatNodes = (nodes, edges) => {
    var nodeMap = {};
    nodes.forEach(function (x) {
        if (typeof x.size == 'undefined') {
            x.size = 1;
        }
        nodeMap[x.name] = x;
    });

    edges.forEach(function (x) {
        if (typeof nodeMap[x.source].children == 'undefined') {
            nodeMap[x.source].children = [];
        }
        nodeMap[x.target].parent = nodeMap[x.source];
        nodeMap[x.source].children.push(nodeMap[x.target]);
        // return { parent: nodeMap[x.target], source: nodeMap[x.source], target: nodeMap[x.target] };
    });
    edges.forEach(function (x) {
        if (typeof nodeMap[x.target].branch != 'undefined' && nodeMap[x.target].branch != ''
            && typeof nodeMap[x.source].branch == 'undefined' || nodeMap[x.source].branch == '') {
            nodeMap[x.source].branch = nodeMap[x.target].branch;
        }
    });
    
    return nodes;
};
module.exports = formatNodes;
