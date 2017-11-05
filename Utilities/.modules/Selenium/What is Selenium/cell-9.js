var importer = require('../Core');
var {getCredentials, createWebdriverClient} = importer.import([
    'webdriver client',
    'decrypt password'
]);

var runSeleniumCell = (search) => {
    var client = createWebdriverClient();
    var {getAllXPath, getAllUntil} = importer.import([
        'all xpath elements',
        'get all elements until',
    ], {client})
    return importer.import(search, {
        browser: client,
        client,
        getCredentials,
        getAllXPath,
        getAllUntil
    })
};
module.exports = runSeleniumCell;
