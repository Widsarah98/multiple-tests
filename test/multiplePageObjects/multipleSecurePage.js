import { $ } from '@wdio/globals'
import Page from './multiplePage.js';
import LoginPage from './multipleLoginPage.js';


class SecurePage extends Page {
    
    get loggedIn () {
        return $('.app_logo');
    }
    
    get errorAlert () {
        return $('//h3[@data-test="error"]')
    }

    get selectBackpack () {
        return $('//a[@id="item_4_title_link"]')
    }

    get selectJacket () {
        return $('#item_5_title_link')
    }

    get jacketDetails () {
        return $('//div[@class="inventory_details_name large_size"][contains(text(),"Fleece Jacket")]')
    }

    get backpackDetails () {
        return $('//div[@class="inventory_details_name large_size"]')
    }

    get addToCart () {
        return $('.btn.btn_primary.btn_small.btn_inventory')
    }

    get continueShoppingBtn () {
        return $('#continue-shopping')
    }

    get backToProductsBtn () {
        return $('#back-to-products')
    }

    get redOne () {
        return $('.shopping_cart_badge')
    }

    get cartIcon () {
        return $('.shopping_cart_link')
    }

    get inCartBackPack () {
        return $('#item_4_title_link')
    }

    get inCartFleeceJacket () {
        return $('')
    }

    get checkoutBtn () {
        return $('#checkout')
    }

    get checkoutYourInfo () {
        return $('.title')
    }

    get firstNameField () {
        return $('#first-name')
    }

    get lastNameField () {
        return $('#last-name')
    }

    get zipCode () {
        return $('#postal-code')
    }

    async checkout (firstName, lastName, zip) {
        await this.firstNameField.setValue(firstName);
        await this.lastNameField.setValue(lastName);
        await this.zipCode.setValue(zip);
    }


    async addingToCart (selectorProduct, productDetails) {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(this.loggedIn).toBeExisting();
        await selectorProduct.click();
        await expect(productDetails).toBeExisting();
        // await browser.pause(30000);
        await this.addToCart.click();
        await expect(this.redOne).toBeExisting();
        await this.cartIcon.click();
        await expect(selectorProduct).toBeExisting();
    }

    async fillOutCheckout (productSelector, detailsOfProduct) {
        await this.addingToCart(productSelector, detailsOfProduct);
        await this.checkoutBtn.click();
        await expect(this.checkoutYourInfo).toBeExisting();
        await this.checkout('Sarah', 'Hansen', '84027');
    }
}

export default new SecurePage();
