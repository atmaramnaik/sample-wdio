var assert = require('assert');

describe('webdriver.io page', function() {
    it('should have the right title', function () {
        browser.url('/');
        var title = browser.getTitle();
        assert.equal(title, 'Welcome: Mercury Tours');
    });
});