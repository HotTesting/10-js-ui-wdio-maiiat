export class BillingDetailsComponent {
    private get root(): WebdriverIO.Element {
        return $('div#collapse-payment-address').parentElement();
    }

    isOpened(): boolean {
        return $('a[href$="#collapse-payment-address"]').isDisplayed();
    }

    continue() {
        const continueButton = this.root.$('#collapse-payment-address input.btn.btn-primary[type="button"][value = "Continue"]');
        expect(continueButton).toBeClickable({ message: 'Expected Billing Details Continue button to be visible' });
        continueButton.click();
    }

    isBillingDetailsCheckedWithExistingAdress() : boolean {
        return $('input[name="payment_address"][value = "existing"]').isSelected();
    }

    chooseExistingAddress() {
        const existingAddressRadioButton = $('input[name="payment_address"][value = "existing"]');
        existingAddressRadioButton.click();
    }

    chooseNewAddress() {
        const newAddressRadioButton = $('input[name="payment_address"][value = "new"]');
        newAddressRadioButton.click();
    }

    fillBillingDetailsForRegisteredUser(data: {
        firstName: string,
        lastName: string,
        address1: string,
        city: string,
        postCode: string,
        country: string,
        region: string
    }) {
        console.log('[BillingDetailsComponent] Filling biling details step', JSON.stringify(data, null, 2));
        expect(this.root.$('#input-payment-firstname')).toBeClickable();
        this.root.$('#input-payment-firstname').setValue(data.firstName);
        this.root.$('#input-payment-lastname').setValue(data.lastName);
        this.root.$('#input-payment-address-1').setValue(data.address1);
        this.root.$('#input-payment-city').setValue(data.city);
        this.root.$('#input-payment-postcode').setValue(data.postCode);
        this.root.$('#input-payment-country').selectByVisibleText(data.country);
        this.root.$('#input-payment-zone').selectByVisibleText(data.region);
    }

    fillBillingDetailsForGuest(data: {
        firstName: string,
        lastName: string,
        email: string,
        telephone: string,
        address1: string,
        city: string,
        postCode: string,
        country: string,
        region: string
    }) {
        console.log('[BillingDetailsComponent] Filling biling details step', JSON.stringify(data, null, 2));
        expect(this.root.$('#input-payment-firstname')).toBeClickable();
        this.root.$('#input-payment-firstname').setValue(data.firstName);
        this.root.$('#input-payment-lastname').setValue(data.lastName);
        this.root.$('#input-payment-email').setValue(data.email);
        this.root.$('#input-payment-telephone').setValue(data.telephone);
        this.root.$('#input-payment-address-1').setValue(data.address1);
        this.root.$('#input-payment-city').setValue(data.city);
        this.root.$('#input-payment-postcode').setValue(data.postCode);
        this.root.$('#input-payment-country').selectByVisibleText(data.country);
        this.root.$('#input-payment-zone').selectByVisibleText(data.region);
    }
}