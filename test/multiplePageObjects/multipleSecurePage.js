import { $ } from '@wdio/globals'
import Page from './multiplePage.js';


class SecurePage extends Page {
    
    get loggedIn () {
        return $('.app_logo');
    }
    
    get errorAlert () {
        return $('//h3[@data-test="error"]')
    }
}

export default new SecurePage();
