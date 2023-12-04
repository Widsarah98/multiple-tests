import { $ } from '@wdio/globals'
import Page from './multiplePage.js';

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
        await this.insertUsername.setValue(username);
        await this.insertPassword.setValue(password);
        await this.btnLogin.click();
        await this.hamburgerMenu.click();
        await this.logoutBtn.click();
        await browser.pause(5000);
        await expect(this.btnLogin).toBeExisting();
    }




    open () {
        return super.open();
    }
}

export default new LoginPage();
