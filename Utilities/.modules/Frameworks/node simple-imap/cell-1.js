$$.async();
var config = {
    imap: {
        user: process.env.GOOGLE_USER,
        password: process.env.GOOGLE_PASS,
        host: 'imap.gmail.com',
        port: 993,
        tls: true,
        autotls: 'required',
        authTimeout: 3000
    }
};
var connection;
imaps.connect(config).then((conn) => {
    connection = conn;
    return conn.openBox('INBOX');
}).then(inbox => {
    $$.done('inbox opened');
}).catch((e) => $$.done(e));