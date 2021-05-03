import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/portal/profile.portal.page';

describe('Auto', () => {
    beforeEach( () => {
        LoginPage.open();
    });

    afterEach( () =>{
        browser.execute('window.localStorage.clear()');
    });

    it('user logs in with valid data', () => {
        LoginPage.setLogin('lepek42435@asfalio.com');
        LoginPage.setPassword('SophiaB2019');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    it( 'submit button is disabled if login and password are absent', () => {
        LoginPage.submitButtonIsDisabled();
    });

    it( 'fails if invalid data provided',() =>{
        LoginPage.setLogin('example@example.com');
        LoginPage.setPassword('123456');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();

    });
    it( 'login input is required', () => {
        LoginPage.setLogin('example@example.com');
        LoginPage.emptyLoginInput();
        LoginPage.loginRequiredError();
    });

});


