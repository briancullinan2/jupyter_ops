exports.getUsername = function (client) {
    return client.getText('#name');
};

exports.getUsernameLabel = function (client) {
    return client.getText('[for="name"]');
};

exports.getUsernamePlaceholder = function (client) {
    return client.getAttribute('#name', 'placeholder');
};

exports.getUsernameError = function (client) {
    return client.element('[name="loginForm"]').element('div:nth-child(1)').getText('.error-message');
};

exports.getPassword = function (client) {
    return client.getText('#password');
};

exports.getPasswordLabel = function (client) {
    return client.getText('[for="password"]');
};

exports.getPasswordPlaceholder = function (client) {
    return client.getAttribute('#password', 'placeholder');
};

exports.getPasswordError = function (client) {
    return client.element('[name="loginForm"]').element('div:nth-child(2)').getText('.error-message');
};

exports.getUrl = function (client) {
    return client.getText('#serverUrl');
};

exports.getUrlLabel = function (client) {
    return client.getText('[for="serverUrl"]');
};

exports.getUrlPlaceholder = function (client) {
    return client.getAttribute('#serverUrl', 'placeholder');
};

exports.getUrlError = function (client) {
    return client.element('[name="loginForm"]').element('div:nth-child(3)').getText('.error-message');
};

exports.getDatabase = function (client) {
    return client.getText('#database');
};

exports.getDatabaseLabel = function (client) {
    return client.getText('[for="database"]');
};

exports.getDatabasePlaceholder = function (client) {
    return client.getAttribute('#database', 'placeholder');
};

exports.getDatabaseError = function (client) {
    return client.element('[name="loginForm"]').element('div:nth-child(4)').getText('.error-message');
};

exports.getRememberLabel = function (client) {
    return client.element('.store-server-database').getText('span');
};

exports.getLoginButtonLabel = function (client) {
    return client.getText('#login-button');
};

exports.getLogoutButtonLabel = function (client) {
    return client.getText("[name='logoutForm']");
};


exports.getSearchField = function (client) {
    return client.getAttribute('#contact-search-text-field', 'placeholder');
};

exports.getSearchDropdown = function (client) {
    return client.getText('#search-field-dropdown');
};

exports.getActivityHeader = function (client) {
    return client.getText('#top-activity-header');
};

exports.getHistoryHeader = function (client) {
    return client.getText('#top-notification-header');
};

exports.getHistoryItemInnerText = function (client, child) {
    if (!child)
        child = 1;
    var temp = 'ul:nth-child(' + child + ')';
    return client.element('.center-pane-inner').element(temp).getText('.expanded-notification bubble');
};
