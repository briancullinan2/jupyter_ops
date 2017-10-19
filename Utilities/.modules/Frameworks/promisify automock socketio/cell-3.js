var client = require('socket.io-client');

var sockifyClient = (req, dep, host) => {
    let ctx;
    ctx = automock.mockValue(req, {
        stubCreator: (name) => {
            return function () {
                var args = ['call', dep, name.split('.')[1]];
                for (var i = 0; i < arguments.length; i++) {
                    args[args.length] = arguments[i];
                }
                socket.emit.apply(socket, args);
            };
        },
        name: dep
    });
    var promises = promisifyMock(ctx, dep);
    promises.___close = () => socket.emit('close');
    var socket = client.connect(host);
    socket.on('connect', function () {
        // TODO: socket.emit('handler') service provider
        socket.emit('require', dep, function () {

        });
        socket.on('resolve', function () {

        });
    });
    return promises;
};
sockifyClient;

