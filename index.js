// How to parse a well formatted simple notebook the cheap way?
var imports = ((filename) => {
    var f = fs.readFileSync(filename).toString();
    var re = new RegExp('initialize([\\s\\S]*?)done', 'ig');
    var m; co = []; while ((m = re.exec(f)) && co.push(m[1]));
    var code = JSON.parse('["//'+co.join('","')+'"]').join('');
    return eval(code + '\n\n;\n\n([importNotebook, getCells]);');
})('How to find answers.ipynb');
module.exports = {
    importNotebook: imports[0],
    getCells: imports[1]
};
