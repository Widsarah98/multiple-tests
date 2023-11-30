import { expect } from '@wdio/globals';
import LoginPage from '../multiplePageObjects/multipleLoginPage.js';
import SecurePage from '../multiplePageObjects/multipleSecurePage.js';
import Page from '../multiplePageObjects/multiplePage.js';


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.loggedIn).toBeExisting()
        await expect(SecurePage.loggedIn).toHaveTextContaining(
            'Swag Labs')
    })
})

describe('My Login application', () => {
    it('should give me an error message when I login with invalid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard', 'secret_sauce')
        await expect(SecurePage.errorAlert).toBeExisting()
        await expect(SecurePage.errorAlert).toHaveTextContaining(
            'Epic')
    })
})

describe('My Login application', () => {
    it('should give me an error message when I login with invalid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_')
        await expect(SecurePage.errorAlert).toBeExisting()
        await expect(SecurePage.errorAlert).toHaveTextContaining(
            'Epic')
    })
})