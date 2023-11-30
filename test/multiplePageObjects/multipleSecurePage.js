import { $ } from '@wdio/globals'
import Page from './multiplePage.js';


class SecurePage extends Page {
    
    get loggedIn () {
        return $('.app_logo');
    }
    
    get errorAlert () {
        return $('//h3[@data-test="error"]')
    }

    get selectProduct () {
        return $('//a[@id="item_4_title_link"]')
    }
}

export default new SecurePage();
