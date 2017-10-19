var assert = require('assert');
var testNotebook = 'test import.ipynb';
var testCells = [
    {cell_type: 'code', source: []},
    {cell_type: 'markdown', source: ['how to test for errors line 2?']},
    {cell_type: 'code', source: ['(function (err) { throw error; })']}
];
global[testNotebook + '[1]']
    = eval(testCells[testCells.length - 1].source.join('').trim());
var markdownCache = cacheCells(testCells, testNotebook);
assert(markdownCache[0].id == testNotebook + '[1]');
