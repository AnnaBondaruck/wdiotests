import LoginPage from '../test/pageobjects/login.page';
import ProfilePage from '../test/pageobjects/portal/profile.portal.page';

module.exports = {

    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.

    before: function (capabilities, specs) {
        browser.addCommand('login', function (username, password) {
            LoginPage.open();
            LoginPage.setLogin(username);
            LoginPage.setPassword(password);
            LoginPage.clickSubmitButton();
            ProfilePage.isOpen();
        })
    },

    afterTest: function(test, context, { error, result, duration, passed, retries}) {
        if (error) {
            browser.takeScreenshot();
        }
    }
}
