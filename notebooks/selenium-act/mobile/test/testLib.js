exports.setUsername = function (client, username) {
    client.setValue('[placeholder="Email"]', username);
};

exports.setFirstName = function (client, username) {
    client.setValue('[placeholder="First name"]', username);
};

exports.setPassword = function (client, password) {
    client.setValue('#password', password);
};

exports.clickTrial = function (client) {
    client.click('[href*="/trial"]');
};

exports.clickPricing = function (client) {
    client.click('[href="/buy"]');
};

exports.clickSubscribe = function (client) {
    client.click('[href*="/buy/subscriptions/Act"]');
};

exports.clickBilling = function (client) {
    client.click('[href="/buy/billing"]');
};

exports.clickConfirm = function (client) {
    client.click('[href="/buy/confirm"]');
};

exports.clickStartTrial = function (client) {
    client.click('.mat-card-actions button');
};

exports.setUrl = function (client, url) {
    client.setValue('#serverUrl', url);
};

exports.setDatabase = function (client, database) {
    client.setValue('#database', database);
};

exports.clickSaveDatabase = function (client) {
    client.click('.checkbox-wrapper');
};

exports.clickLogin = function (client) {
    client.click('#login-button');
};

exports.clickSettings = function (client) {
    client.click('.glyphicon-cog');
};

exports.clickSettingsOption = function (client, option) {
    client.click('.menu-option-label*=' + option);
};

exports.clickContactMenu = function (client) {
    client.click('.glyphicon-user');
};

exports.clickActivityMenu = function (client) {
    client.click('.glyphicon-calendar');
};

exports.clickHistoryMenu = function (client) {
    client.click('.glyphicon-time');
};

exports.clickHistoryCreate = function (client) {
    client.click('#add-history-button');
};

exports.setHistoryText = function (client, text) {
    client.setValue('#add-history-text-area', text);
};

exports.clickHistoryCancel = function (client) {
    client.click('#cancel-create-history');
};

exports.clickHistorySave = function (client) {
    client.click('#submit-create-history');
};

exports.clickContact = function (client, contact) {
    client.click('.contact-info=' + contact);
};

exports.clickSearchDropdown = function (client, search) {
    client.click('.input-group-btn');
    client.click('label*=' + search);
};


exports.clickSearch = function (client) {
    client.click('#contact-search-submit');
};

exports.setContactSearch = function (client, search) {
    client.setValue('#contact-search-text-field', search);
};

exports.clickSortDropdown = function (client, sort) {
    client.element('#search-field-dropdown').click('label*=' + sort);
};

exports.clickSearchClear = function (client) {
    client.click('.clear-search');
};

exports.clickHistoryItem = function (client, child) {
    if (!child)
        child = 1;
    let temp = 'ul:nth-child(' + child + ')';
    console.log(client.element('.center-pane-inner').element(temp));
    client.element('.center-pane-inner').element(temp).click('div');
};

exports.clickLanguage = function (client, language) {
    client.element('.language-settings').click('li*=' + language);
};
