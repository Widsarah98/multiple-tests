import { $ } from '@wdio/globals'
import Page from './multiplePage.js';
import SecurePage from './multipleSecurePage.js';

class LoginPage extends Page {
    
    get insertUsername () {
        return $('#user-name');
    }

    get insertPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('#login-button');
    }

    get hamburgerMenu () {
        return $('#react-burger-menu-btn')
    }

    get logoutBtn () {
        return $('#logout_sidebar_link')
    }

   
    async login (username, password) {
        await this.insertUsername.setValue(username);
        await this.insertPassword.setValue(password);
        await this.btnLogin.click();
    }


    async loginLogout (username, password) {
        await this.open();
        await this.login('standard_user', 'secret_sauce');
        await expect(SecurePage.loggedIn).toBeExisting();
        await expect(SecurePage.loggedIn).toHaveTextContaining(
            'Swag Labs')
        await this.hamburgerMenu.click();
        await this.logoutBtn.click();
        await expect(this.btnLogin).toBeExisting();
    
    }

    open () {
        return super.open();
    }
}

export default new LoginPage();
