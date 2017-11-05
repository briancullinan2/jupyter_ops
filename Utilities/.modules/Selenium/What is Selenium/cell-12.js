var testLive = () => {
    return client
        .url('https://purchasesprint.actops.com')
        .click('[href*="/auth"], [routerlink*="/auth"]');
}
module.exports = testLive();

