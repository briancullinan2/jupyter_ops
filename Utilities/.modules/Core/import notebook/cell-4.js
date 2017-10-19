// initialize

var runAllPromises = (promises) => {
    return promises.reduce((promise, func) => {
        return promise.then(result => {
            return (typeof func == 'function'
                ? (new Promise(func)) : Promise.resolve(func))
                .then(Array.prototype.concat.bind(result));
        });
    }, Promise.resolve([]));
};

// $$.done() for our dumb parser

