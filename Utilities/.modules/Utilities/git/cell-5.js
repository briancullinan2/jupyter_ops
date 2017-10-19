var D3Node = require('d3-node');

var margin = {top: 25, right: 300, bottom: 25, left: 25},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var displayBranches = (nodeTree) => {
    var d3n = new D3Node(); // initializes D3 with container element 
    var d3 = d3n.d3;

    var tree = d3.hierarchy(nodeTree[0], d => d.children);
    var gitRoot = // partition(
        tree
            .sum(d => 1)
            .sort((a, b) => b.data.time - a.data.time || b.value - a.value)
            //)
            .descendants();
    var branches = gitRoot
        .map(r => r.data.branch.replace('HEAD -> ', '').trim())
        .filter((b, i, arr) => arr.indexOf(b) === i)

    gitRoot.forEach(r => {
        r.name = r.data.name;
        r.index = r.data.index;
        r.branch = r.data.branch;
    })

    var tree = d3.tree().nodeSize([25, 150]);

    var nodes = tree(d3.hierarchy(gitRoot[0], d => d.children))
        .descendants();

    var links = nodes.slice(1);

    var fill = d3.scaleOrdinal(d3.schemeCategory20);
    var svg = d3n.createSVG(
        branches.length * 20 + margin.left + margin.right,
        (nodes.length + 1) * 20 + margin.top + margin.bottom)
    var g = svg.append('g');

    var x = d3.scaleLinear().range([branches.length * 20, 0]);
    var y = d3.scaleLinear().range([(nodes.length + 1) * 20, 0]);

    x.domain([0, branches.length]);
    y.domain([0, nodes.length]);

    var branchIndex = (d) => {
        var result = Math.min.apply(null, d.data.branch
            .split(/\s*,\s*/ig)
            .map(b => branches.indexOf(b))
            .filter(i => i > -1));
        if (!isFinite(result)) {
            result = 0;
        }
        return result;
    };

    g.selectAll('.link')
        .data(links)
        .enter().append('path')
        .attr('class', 'link')
        .attr('fill', 'none')
        .attr('stroke', '#000')
        .attr('stroke-width', 2)
        .attr('d', d => `
            M${x(branchIndex(d))},${y(d.data.index)}
            C${x((branchIndex(d) + branchIndex(d.parent)) / 2.0)},
              ${y(d.data.index)} ${x((branchIndex(d) + branchIndex(d.parent)) / 2.0)},
              ${y(d.parent.data.index)} ${x(branchIndex(d.parent))},
              ${y(d.parent.data.index)}`);

    // Declare the nodes
    var node = g.selectAll('g.node')
        .data(nodes)
        .enter().append('g')
        .attr('class', 'node')
        .style('fill', function (d, i) {
            return fill(d.data.branch);
        })
        .attr('transform', d => `translate(${x(branchIndex(d))},${y(d.data.index)})`);

    node.append('circle')
        .attr('class', d => (d.data).isAux ? 'node-aux-route' : 'node-route')
        .attr('r', 6);

    node.append('text')
        .attr('x', (d) => 13)
        .attr('dy', '.35em')
        .attr('text-anchor', 'start')
        .text(d => (d.data).name + (d.data.branch && (!d.data.children || d.data.children.filter(
            c => c.data.branch == d.data.branch) == 0) ? (' ( ' + d.data.branch + ' ) ') : ''))
        .attr('class', 'monospace');

    // reset transform
    g.attr('transform', 'translate(0, 0)');

    g.attr(
        'transform',
        'translate(' + (margin.left) + ',' + (margin.top) + ')')
    return d3n.svgString();
}
module.exports = displayBranches;
displayBranches;

