
export class CheckoutOptionsComponent {
    private get root(): WebdriverIO.Element {
        return $('div#collapse-checkout-option').parentElement();
    }

    isOpened(): boolean {
        return $('a[href$="#collapse-checkout-option"]').isDisplayed();
    }

    selectGuestCheckout() {
        const guestCheckoutRadio = this.root.$('input[type="radio"][value="guest"]');
        expect(guestCheckoutRadio).toBeClickable({ message: 'Expected Guest Checkout radio button to be visible. Make sure you are not logged in' });
        guestCheckoutRadio.click();
    }

    continue() {
        const continueButton = this.root.$('input[type="button"][value="Continue"]#button-account');
        expect(continueButton).toBeClickable({ message: 'Expected Checkout Option Continue button to be visible' });
        continueButton.click();
    }
}