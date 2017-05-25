import assert from 'assert';
import {} from 'jasmine';
import {} from 'chai';
const testLib = require('../testLib.js');
const assertLib = require('../assertLib.js');


describe('webdriver.io page', function () {

    it('should purchase cloud premium', function () {
        browser.url('localhost:4200');
        testLib.clickPricing(browser);
        testLib.clickSubscribe(browser);
        testLib.clickBilling(browser);
        testLib.clickConfirm(browser);
    });

    it('should register for a trial', function () {
        browser.url('localhost:4200');
        testLib.clickTrial(browser);
        testLib.setFirstName(browser, 'Brian');
        testLib.setUsername(browser, 'megamindbrian@gmail.com');
        testLib.clickStartTrial(browser);
        browser.waitForExist('.done .mat-card-title', 1000);
    });


});

