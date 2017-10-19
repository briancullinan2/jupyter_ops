var getGoogleTimeline = () => {
    console.log('Google: Logging timeline history');
    return client
        .url('https://www.google.com/maps/timeline')
        .loginGoogle()
        .waitUntil(() => client.getUrl()
            .then(url => url.indexOf('timeline') > -1, 20000, ''))
        .catch(function (e) {
            console.log(e);
        })
        .pause(3000)
        .click('button[jsaction="header.select-today"]')
        .pause(2000);
}
if (typeof client.getGoogleTimeline == 'undefined') {
    client.addCommand('getGoogleTimeline', getGoogleTimeline);
}
module.exports = getGoogleTimeline;
