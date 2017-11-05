// source: https://github.com/rangle/augury/blob/dev/src/frontend/components/router-tree/router-tree.tsvar D3Node = require('d3-node');var margin = {top: 25, right: 150, bottom: 25, left: 150},    width = 960 - margin.left - margin.right,    height = 500 - margin.top - margin.bottom;var d3TieredPieSVG = (nodes) => {    var d3n = new D3Node(); // initializes D3 with container element     var d3 = d3n.d3;    var fill = d3.scaleOrdinal(d3.schemeCategory20);    var svg = d3n.createSVG(        width + margin.left + margin.right,        height + margin.top + margin.bottom)    var g = svg.append('g');
    
    // display sunburst with lines between
    var radius = Math.min(width, height) / 4

    var x = d3.scaleLinear().range([0, 2 * Math.PI]);
    var y = d3.scaleLinear().range([0, radius]);

    var partition = d3.partition()
    var tree = d3.hierarchy(nodes[0], d => d.children);
    var root = // partition(
        tree.sum(d => 1)
            .sort((a, b) => b.size - a.size || b.value - a.value)
            //)
            .descendants();
    root.forEach(r => {
        r.name = r.data.name;
        r.index = r.data.index;
        r.branch = r.data.branch;
    })
    var tree = d3.hierarchy(root[0], d => d.depth < 3 ? d.children : []);
    var root = partition(tree.sum(d => 1)).descendants();

    var arc = d3.arc()
        .startAngle(function (d) {
            return Math.max(0, Math.min(2 * Math.PI, x(d.x0)));
        })
        .endAngle(function (d) {
            return Math.max(0, Math.min(2 * Math.PI, x(d.x1)));
        })
        .innerRadius(function (d) {
            return Math.max(0, d.depth == 0
                ? 0 : (d.depth == 1 ? y(1 / 3) : y(d.depth)));
        })
        .outerRadius(function (d) {
            return Math.max(0, d.depth == 0
                ? 0 : y(d.depth + 1));
        });

    // Interpolate the arcs in data space.
    function arcTween(a) {
        var i = d3.interpolate({x: a.x0, dx: a.dx0}, a);
        return function (t) {
            var b = i(t);
            a.x0 = b.x;
            a.dx0 = b.dx;
            return arc(b);
        };
    }

    var path = g.selectAll('path')
        .data(root)
        .enter().append('path')
        //            .attr("display", function(d) { return d.depth ? null : "none"; }) // hide inner ring
        .attr('d', arc)
        .style('stroke', '#fff')
        .style('fill', function (d, i) {
            return fill(i);
        })
        .style('fill-rule', 'evenodd')

    function computeTextRotation(d) {
        return (x((d.x0 + d.x1) / 2) - Math.PI / 2) / Math.PI * 180;
    }

    g.selectAll('text')
        .data(root.filter(d => d.depth == 1))
        .enter().append('text')
        .attr('transform', function (d) {
            return 'rotate(' + computeTextRotation(d) + ')';
        })
        .attr('x', d => y(d.depth + 1))
        .attr('dx', '-6') // margin
        .attr('dy', '.35em') // vertical-align
        .attr('text-anchor', (d) => 'end')
        .text(d => (d.data).name)
        .attr('class', 'monospace');

    /*
    path
        .data(partition.value(d => d.data.size).nodes)
        .attrTween("d", arcTween);
*/

    // reset transform
    g.attr('transform', 'translate(0, 0)');

    g.attr(
        'transform',
        'translate(' + (margin.left + width / 2) + ',' + (margin.top + height / 2) + ')')

    return Promise.resolve(d3n.svgString());
};module.exports = d3TieredPieSVG;