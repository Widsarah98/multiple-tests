import { expect } from '@wdio/globals';
import LoginPage from '../multiplePageObjects/multipleLoginPage.js';
import SecurePage from '../multiplePageObjects/multipleSecurePage.js';
import Page from '../multiplePageObjects/multiplePage.js';


describe('Logging in and adding item to cart', () => {
    it('should login with valid credentials and add an item to the cart', async () => {
        await SecurePage.addingToCart(SecurePage.selectBackpack, SecurePage.backpackDetails);
        // await SecurePage.backToProductsBtn.click();
        await SecurePage.continueShoppingBtn.click();
        await SecurePage.addingToCart(SecurePage.selectJacket, SecurePage.jacketDetails);

       

    })

})