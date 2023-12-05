import { expect } from '@wdio/globals';
import LoginPage from '../multiplePageObjects/multipleLoginPage.js';
import SecurePage from '../multiplePageObjects/multipleSecurePage.js';
import Page from '../multiplePageObjects/multiplePage.js';


describe('My logging out application', () => {
    it('should login with valid credentials and logout when I click logout', async () => {
        await LoginPage.loginLogout('standard_user', 'secret_sauce')
    })
})