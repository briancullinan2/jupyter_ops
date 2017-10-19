var importer = require('../Core');

var downloadGoogleTakeout;
var googleTakeout = (products = 'all?') => {
    return importer.import('selenium cell')
        .then(runSeleniumCell => runSeleniumCell([
            'log in google',
            'download google takeout'
        ]))
        .then(r => {
            downloadGoogleTakeout = r[1];
            return downloadGoogleTakeout(products);
        })
        .then(r => {
            // TODO: save it in the project path?
            return r;
        })
        .catch(e => console.log(e))
};
module.exports = googleTakeout;
googleTakeout;

