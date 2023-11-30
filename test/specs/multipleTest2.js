import { expect } from '@wdio/globals';
import LoginPage from '../multiplePageObjects/multipleLoginPage.js';
import SecurePage from '../multiplePageObjects/multipleSecurePage.js';
import Page from '../multiplePageObjects/multiplePage.js';


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.loggedIn).toBeExisting()
        await this.btnLogin.click();

    })

})