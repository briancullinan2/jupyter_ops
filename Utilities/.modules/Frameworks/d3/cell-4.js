var D3Node = require('d3-node');

var margin = {top: 25, right: 150, bottom: 25, left: 150},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var d3PieChart = (values) => {
    var d3n = new D3Node(); // initializes D3 with container element 
    var d3 = d3n.d3;

    /*
    var start = 0;
    for(var v in values) {
        if(values.hasOwnProperty(v)) {
            start += values[v].value;
            values[v].offset = start;
        }
    }
    */

    var svg = d3n.createSVG(
        width + margin.left + margin.right,
        height + margin.top + margin.bottom)
    var radius = Math.min(width, height) / 2;
    var g = svg.append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var pie = d3.pie()
        .sort(null)
        .value(function (d) {
            return d.value;
        });

    var path = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    var label = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    var arc = g.selectAll('.arc')
        .data(pie(values))
        .enter().append('g')
        .attr('class', 'arc');

    arc.append('path')
        .attr('d', path)
        .attr('fill', function (d) {
            return color(d.data.label);
        });

    arc.append('text')
        .attr('transform', function (d) {
            return 'translate(' + label.centroid(d) + ')';
        })
        .attr('dy', '0.35em')
        .text(function (d) {
            return d.data.label + ' - ' + d.data.value;
        });

    return d3n.svgString();
}
module.exports = d3PieChart;
d3PieChart;

