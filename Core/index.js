// How to parse a well formatted simple notebook the cheap way?
var path = require('path');

if(typeof importer == 'undefined') {
    var importer = ((notebook) => {
        var filename = path.basename(notebook);
        var f = fs.readFileSync(notebook).toString();
        var re = new RegExp('initialize([\\s\\S]*?)done', 'ig');
        var m; co = []; while ((m = re.exec(f)) && co.push(m[1]));
        var code = JSON.parse('["//'+co.join('","')+'"]').join('');
        var result = eval(code + '\n\n;\n\n(imported);');
        var importer = Object.assign({}, result[filename]);
        return importer;
    });
    importer = importer(path.join(__dirname, 'How to find answers.ipynb'));
}

module.exports = importer;

