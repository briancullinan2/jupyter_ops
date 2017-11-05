var importer = require('../Core');
var runSeleniumCell = importer.import('selenium cell');
var runHighFiver = () => {
    var highFive = runSeleniumCell('high five people youearnedit');
    return highFive();
};
module.exports = runHighFiver;

// node -e "require('/Users/brian.cullinan/Documents/jupytangular2/Core').interpret('automate youearnedit').then(r=>r.runInNewContext()()).then(e=>{ console.log(e); process.exit(e); }).catch(e=>{console.log(e); process.exit(e) });"
