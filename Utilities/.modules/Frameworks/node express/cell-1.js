if (typeof server != 'undefined') {
    server.close();
}
var app = express();
app.use('/', function (req, res) {
    var url = host + req.url;
    req.pipe(request(url)).pipe(res);
});

$$.async();
try {
    var server = app.listen(port, () => $$.done('server up and running on port ' + port));
    server.on('error', (e) => $$.done(e));
} catch (e) {
    $$.done(e);
}

