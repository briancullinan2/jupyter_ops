htmlPrint = '';
messages.forEach(message => {
    var header = message.parts.filter(function (part) {
        return part.which.indexOf('HEADER') > -1;
    });
    var subject = header[0].body.subject[0];
    var from = header[0].body.from[0];
    htmlPrint += '<li>subject: ' + subject + ', from: ' + from + '</li>\n';
});
$$.mime({'text/markdown': 'Usage:\n\n```html\n' + htmlPrint + '\n```\nOuput:\n'});

