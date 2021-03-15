import {Messages} from "../../Messages";

export class ConfirmationPage {

    isOpened(): boolean {
        return $('h1=Your order has been placed!').isDisplayed();
    }

    verifyConfirmationPageSuccessfulTextAfterOrderPlacedForRegistredUser(){
        const messages = new Messages();
        expect($$('#content p')[0]).toHaveTextContaining(messages.getConfirmationPageSuccessfulFirstLineMessage());
        expect($$('#content p')[1]).toHaveTextContaining(messages.getConfirmationPageSuccessfulSecondLineMessage());
        expect($$('#content p')[2]).toHaveTextContaining(messages.getConfirmationPageSuccessfulThirdLineMessage());
        expect($$('#content p')[3]).toHaveTextContaining(messages.getConfirmationPageSuccessfulFourthLineMessage());
        expect($$('#content p')[4]).toHaveTextContaining(messages.getConfirmationPageSuccessfulFifthLineMessage());
    }

    verifyConfirmationPageSuccessfulTextAfterOrderPlacedForGuest(){
        const messages = new Messages();
        expect($$('#content p')[0]).toHaveTextContaining(messages.getConfirmationPageSuccessfulFirstLineMessage());
        expect($$('#content p')[1]).toHaveTextContaining(messages.getConfirmationPageSuccessfulFourthLineMessage());
        expect($$('#content p')[2]).toHaveTextContaining(messages.getConfirmationPageSuccessfulFifthLineMessage());
    }
}