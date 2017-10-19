var testLogin = () => {
    return client.url('http://web.avidbrain.com/#/index')
        .click('a*=Log In')
        .click('.emailInputBox')
        .keys('.emailInputBox', 'megamindbrian@gmail.com')
        .click('[type="password"]')
        .keys('[type="password"]', 'P4$$w0rd!')
        .click('[type="submit"]')
        .pause(1000)
};
module.exports = testLogin;
testLogin;


