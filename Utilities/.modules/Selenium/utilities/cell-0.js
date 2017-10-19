var scrollClient = (selector, up = false) => {
    // scroll to bottom of messages
    return client
        .execute((selector, up = false) => {
            if (selector === '' || selector === false) {
                window.scroll(window.scrollX, window.scrollY + (up ? -100000 : 100000));
                return;
            }
            var people = document.evaluate(
                selector,
                document, null,
                XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            people.scrollTop = people.scrollTop + (up ? -100000 : 100000);
        }, selector, up)
};
module.exports = scrollClient;
scrollClient;
