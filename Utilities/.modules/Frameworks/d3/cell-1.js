var D3Node = require('d3-node');var cloud = require('d3-cloud');
var Canvas = require('canvas');
var margin = {top: 20, right: 20, bottom: 30, left: 50},    width = 960 - margin.left - margin.right,    height = 500 - margin.top - margin.bottom;function drawD3Cloud(wordCount) {    var d3n = new D3Node(); // initializes D3 with container element     var d3 = d3n.d3;    var fill = d3.scaleOrdinal(d3.schemeCategory20);    d3n.createSVG(        width + margin.left + margin.right,        height + margin.top + margin.bottom)        .append('g')        .attr(            'transform',            'translate(' + (margin.left + width / 2) + ',' + (margin.top + height / 2) + ')')        .selectAll('text')        .data(wordCount)        .enter().append('text')        .style('font-size', function (d) {            return d.size + 'px';        })        .style('font-family', 'Impact')        .style('fill', function (d, i) {            return fill(i);        })        .attr('text-anchor', 'middle')        .attr('transform', function (d) {            return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';        })        .text(function (d) {            return d.text;        });    return d3n.svgString();};
var d3CloudToSVG = (wordCount) => {
    return new Promise(resolve => {
        cloud()
            .canvas(function () {
                return new Canvas(1, 1);
            })
            .size([width, height])
            .words(wordCount)
            .padding(0)
            .rotate(function () {
                return ~~(Math.random() * 120) - 60;
            })
            .font('Impact')
            .fontSize(function (d) {
                return d.size;
            })
            .on('end', function (wordCount) {
                resolve(drawD3Cloud(wordCount));
            })
            .start();
    });
};
module.exports = d3CloudToSVG;
