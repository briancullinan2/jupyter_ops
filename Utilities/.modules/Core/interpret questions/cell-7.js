var importer = require(__dirname);
var runAllPromises = importer.runAllPromises;
var imported = importer.imported;
// An intention is the same as interpret but gracefully executes or returns markdown
var intend = (message, ...args) => {
    var intentions = message;
    if (typeof message === 'string') {
        intentions = [message];
    }
    return runAllPromises(intentions.map(m => {
        return Promise.resolve(interpret(m))
            .then(r => {
                if (r.length === 1 ||
                    typeof imported[cacheIds[r[0]].notebook][r[0]]
                    !== 'undefined') {
                    // TODO: dependency injection here?
                    return imported[cacheIds[r[0]].notebook][r[0]]
                        .apply(this, [...args]);
                } else {
                    return interpretMarkdown([r]);
                }
            })
    }));
};
module.exports = intend;
