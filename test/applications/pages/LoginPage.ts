import {Urls} from "../Urls";

export class LoginPage {

    registerNewAccount(){
        const continueNewCustomerButton =  $('a.btn.btn-primary');
        continueNewCustomerButton.click();
    }

    makeLogin(){
        new Urls ().openMyAccountLoginURL();
        const emailLogin = $('input[name="email"]');
        emailLogin.setValue("testmail@gmail.com");

        const passwordLogin = $('input[name="password"]');
        passwordLogin.setValue("123456");

        const loginButton =  $('input.btn.btn-primary');
        loginButton.click();
    }

    isUserLoggedIn() : boolean{
        new Urls ().openMyAccountLoginURL();
        const content = $('#content');
        content.waitForDisplayed({ timeout: 5000 });
        const emailLogin = $('input[name="email"]');
        const myAccount = $$('#content h2');
        return (!emailLogin.isDisplayed() && myAccount[0].getText() === 'My Account');
    }
}