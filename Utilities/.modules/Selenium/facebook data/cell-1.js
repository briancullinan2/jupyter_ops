var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var project = PROFILE_PATH + '/Conversations';

var scrollFacebookThreads = (threads) => {
    return client
        .execute(() => {
            document.getElementsByClassName(
                'scrollable')[0]
                .scrollTop += 10000;
        })
        .pause(2000)
        .then(() => getFacebookThreads(threads))
};

var getFacebookThreads = (threads) => {
    return client
        .execute(() => {
            var iterator = document.evaluate(
                '//*[contains(@data-href, "messages")]/@data-href',
                document, null,
                XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
            var co = [];
            var m;
            while ((m = iterator.iterateNext()) && co.push(m)) ;
            return co;
        })
        .then(els => {
            var newThreads = els.value.filter(e => threads.indexOf(e) === -1);
            threads = threads.concat(newThreads);
            return newThreads.length > 0
                ? scrollFacebookThreads(threads)
                : Promise.resolve(threads);
        })
};

var threads, results;
var listFacebookThreads = (threads) => {
    try {
        threads = JSON.parse(fs.readFileSync(project + '/facebook-threads.json'));
    }
    catch (e) {
        threads = [];
    }
    return client.getUrl()
        .then(url => url.indexOf('/messages/t') == -1
            ? client
                .click('[data-tooltip-content="Messages"]')
                .click('a[href*="/messages/t"]')
            : Promise.resolve([]))
        .pause(2000)
        .then(() => getFacebookThreads(threads || []))
        .then(r => threads = r)
        .then(url => url.indexOf('/messages/archived') == -1
            ? client.url('https://www.facebook.com/messages/archived')
                .pause(1000)
                .click('.scrollable a[href="#"]')
            : Promise.resolve([]))
        .pause(2000)
        .then(() => getFacebookThreads(threads || []))
        // list all message threads
        .then(r => {
            result = r;
            fs.writeFileSync(
                project + '/facebook-threads.json',
                JSON.stringify(r, null, 4));
            return result;
        })
};
module.exports = listFacebookThreads;
listFacebookThreads;

