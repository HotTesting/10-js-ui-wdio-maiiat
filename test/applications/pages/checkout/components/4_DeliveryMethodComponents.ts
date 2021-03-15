export class DeliveryMethodComponent {
    private get root(): WebdriverIO.Element {
        return $('div#collapse-shipping-method').parentElement()
    }

    isOpened(): boolean {
        return $('a[href$="#collapse-shipping-method"]').isDisplayed();
    }

    continue() {
        const continueButton = this.root.$('#collapse-shipping-method input.btn.btn-primary[type="button"][value = "Continue"]');
        expect(continueButton).toBeClickable({ message: 'Expected Delivery Method Continue button to be visible' });
        continueButton.click();
    }
}