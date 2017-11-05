// initialize
var fs = require('fs');var JSONStream = require('JSONStream');var jp = require('jsonpath');

/*var streamJson = (file, parse, match = ((c) => true)) => {
    var stream = fs.createReadStream(file)        .pipe(JSONStream.parse(parse));
    stream.on('data', (m) => match(m));
    console.log(file);
    // create a promise out of this stream    return new Promise((resolve, reject) => {        stream.on('error', e => reject(e));        stream.on('close', () => resolve());    });};
*/

var streamJson = (file, path, match = ((c) => true)) => {
    
    const json = JSON.parse(fs.readFileSync(file).toString());
    const nodes = jp.nodes(json, '$..*');
    return nodes.filter(n => typeof n.value === 'object' && n.value !== null).forEach(n => match({
        path: n.path.slice(1),
        value: n.value}));
};
// $$.done() for our dumb parser