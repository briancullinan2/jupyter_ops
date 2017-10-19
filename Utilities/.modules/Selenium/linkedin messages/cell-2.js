var scrollLinkedInThreads = (threads) => {
    // TODO: add check for needing to go to LinkedIn
    // TODO: add check for needing to login
    // scroll to bottom of messages
    return client
        .execute(() => {
            document.getElementsByClassName(
                'msg-conversations-container__conversations-list')[0]
                .scrollTop += 10000;
        })
        .pause(2000)
        .then(() => getLinkedInThreads(threads));
}

var getLinkedInThreads = (threads) => {
    return client
        .execute(() => {
            var iterator = document.evaluate(
                '//*[@data-control-name="view_message"]/@href',
                document, null,
                XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
            var co = [];
            var m;
            while ((m = iterator.iterateNext()) && co.push(m.value)) ;
            return co;
        })
        .then(els => {
            var newThreads = els.value.filter(e => threads.indexOf(e) === -1);
            threads = threads.concat(newThreads);
            return newThreads.length > 0
                ? scrollLinkedInThreads(threads)
                : Promise.resolve(threads);
        });
}

var listLinkedInThreads = (threads) => {
    return client.getUrl().then(url => url.indexOf('/messaging') == -1
        ? client.click('a[href*="/messaging/"]')
        : Promise.resolve([]))
        .pause(2000)
        .then(() => getLinkedInThreads(threads || []))
};
module.exports = listLinkedInThreads;
listLinkedInThreads;
