export class PaymentMethodComponent {
    private get root(): WebdriverIO.Element {
        return $('div#collapse-payment-method').parentElement()
    }

    isOpened(): boolean {
        return $('a[href$="#collapse-payment-method"]').isDisplayed();
    }

    acceptTermsAndConditions() {
        const checkbox = $('input[type="checkbox"][name="agree"]')
        expect(checkbox).toBeVisible({ message: 'Expected accept terms and conditions checkbox to be visible' });
        checkbox.click();
    }

    continue() {
        const continueButton = this.root.$('#collapse-payment-method input.btn.btn-primary[type="button"][value = "Continue"]');
        expect(continueButton).toBeClickable({ message: 'Expected Payment Method Continue button to be visible' });
        continueButton.click();
    }
}