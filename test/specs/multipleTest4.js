import { expect } from '@wdio/globals';
import LoginPage from '../multiplePageObjects/multipleLoginPage.js';
import SecurePage from '../multiplePageObjects/multipleSecurePage.js';
import Page from '../multiplePageObjects/multiplePage.js';


describe('Logging out', () => {
    it('When I click logout I should be logged out', async () => {
        await LoginPage.loginLogout('problem_user', 'secret_sauce');
    })
})