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

   
    async login (username, password) {
        await this.insertUsername.setValue(username);
        await this.insertPassword.setValue(password);
        await this.btnLogin.click();
    }




    open () {
        return super.open();
    }
}

export default new LoginPage();
