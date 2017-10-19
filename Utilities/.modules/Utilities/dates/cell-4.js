var execSync = require('child_process').execSync;
try {
    require.resolve('d3-node');
} catch (e) {
    execSync('npm install d3-node');
}
var D3Node = require('d3-node');

var graphDates = (events) => {
    var d3n = new D3Node(); // initializes D3 with container element 
    var d3 = d3n.d3;

    // set the dimensions and margins of the graph
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = 700 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    // set the ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    // define the line
    var valueline = d3.line()
        .x(function (d) {
            return x(d.start);
        })
        .y(function (d) {
            return y(d.days);
        });

    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3n.createSVG(
        width + margin.left + margin.right,
        height + margin.top + margin.bottom)
        .append('g')
        .attr(
            'transform',
            'translate(' + margin.left + ',' + margin.top + ')');

    // Scale the range of the data
    x.domain(d3.extent(events, function (d) {
        return d.start;
    }));
    y.domain([0, d3.max(events, function (d) {
        return d.days;
    })]);

    // Add the valueline path.
    svg.append('path')
        .data([events])
        .attr('class', 'line')
        .attr('fill', 'none')
        .attr('stroke', '#000')
        .attr('d', valueline);

    // Add the X Axis
    svg.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));

    // Add the Y Axis
    svg.append('g')
        .call(d3.axisLeft(y));

    return d3n.svgString();
};
module.exports = graphDates;
graphDates;

