var getAllXPathBrowser = (selector) => {

    var getArrayXPath = (selector, ctx) => {
        if (typeof ctx == 'undefined') {
            ctx = document;
        }
        var iterator = document.evaluate(
            selector,
            ctx, null,
            XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
        var co = [];
        var m;
        while ((m = iterator.iterateNext()) && co.push(m.nodeValue || m)) ;
        return co;
    };

    var getObjectXPath = (object, ctx) => {
        var result = {};
        // TODO: parse object
        for (var p in object) {
            if (object.hasOwnProperty(p)) {
                result[p] = resolveXPathQueries(object[p], ctx);
            }
        }
        return result;
    }

    var resolveXPathQueries = (selector, ctx) => {
        var inputArr = selector;
        if (!Array.isArray(inputArr)) {
            inputArr = [inputArr];
        }

        // parse array of string and objects
        var result = [], previousResults;
        for (var i = 0; i < inputArr.length; i++) {
            if (typeof inputArr[i] == 'string') {
                if (typeof previousResults != 'undefined') {
                    result = result.concat(previousResults);
                }
                // store in case the next query is a mapped object
                previousResults = getArrayXPath(inputArr[i], ctx);
            } else if (typeof inputArr[i] == 'object') {
                if (typeof previousResults != 'undefined') {
                    previousResults = previousResults.map(p =>
                        getObjectXPath(inputArr[i], p));
                    result = result.concat(previousResults);
                    previousResults = undefined;
                } else {
                    result[result.length] = getObjectXPath(inputArr[i], ctx);
                }
            } else if (Array.isArray(inputArr[i])) {
                result = result.concat(resolveXPathQueries(inputArr[i], ctx));
            } else if (typeof inputArr[i] == 'function') {
                // TODO: what to do here?
            }
        }
        if (typeof previousResults != 'undefined') {
            result = result.concat(previousResults);
        }

        if (!Array.isArray(selector) && result.length == 1) {
            return result[0];
        }
        return result;
    };
    return resolveXPathQueries(selector);
}
// TODO: better way to do this for selenium versus browser?
var getAllXPath = (selector) => client.execute(getAllXPathBrowser, selector)
    .then(r => r.value)
    .catch(e => console.log(e));
if (typeof client.getAllXPath == 'undefined') {
    client.addCommand('getAllXPath', getAllXPath);
}
module.exports = getAllXPath;
getAllXPath;
