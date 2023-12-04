import { expect } from '@wdio/globals';
import LoginPage from '../multiplePageObjects/multipleLoginPage.js';
import SecurePage from '../multiplePageObjects/multipleSecurePage.js';
import Page from '../multiplePageObjects/multiplePage.js';

describe('Checking out with a product', () => {
    it('should login with valid credentials', async () => {

        await SecurePage.fillOutCheckout(SecurePage.selectBackpack, SecurePage.backpackDetails);

    })

})

describe('Trying to checkout without filling out all the necessary fields', () => {
    it('should give you an error message.', async () => {
        
        await SecurePage.checkoutEmptyFieldsError(SecurePage.selectJacket, SecurePage.jacketDetails);
    
    })
})