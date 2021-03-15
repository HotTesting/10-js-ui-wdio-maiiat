import {Urls} from "../Urls";

export class LogoutPage {

    makeLogout(){
        new Urls ().openMyAccountLogoutURL();
        const continueLogoutButton = $('a.btn.btn-primary');
        continueLogoutButton.click();
    }
}