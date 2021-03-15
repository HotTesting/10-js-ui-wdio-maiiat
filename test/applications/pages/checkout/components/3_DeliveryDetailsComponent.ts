export class DeliveryDetailsComponent {
    private get root(): WebdriverIO.Element {
        return $('div#collapse-shipping-address').parentElement();
    }

    isOpened(): boolean {
        return $('a[href$="#collapse-shipping-address"]').isDisplayed();
    }

    open() {
        const deliveryDetails = this.root.$('a[href$="#collapse-shipping-address"]');
        expect(deliveryDetails).toBeClickable({ message: 'Expected Delivery Details chapter to be visible' });
        deliveryDetails.click();
    }

    continue() {
        const continueButton = this.root.$('#collapse-shipping-address input.btn.btn-primary[type="button"][value = "Continue"]');
        expect(continueButton).toBeClickable({ message: 'Expected Delivery Details Continue button to be visible' });
        continueButton.click();
    }

    isDeliveryDetailsCheckedWithExistingAdress() : boolean {
        return $('input[name="payment_address"][value = "existing"]').isSelected();
    }

    chooseExistingAddress() {
        const existingAddressRadioButton = $('input[name="shipping_address"][value = "existing"]');
        existingAddressRadioButton.click();
    }

    chooseNewAddress() {
        const newAddressRadioButton = $('input[name="shipping_address"][value = "new"]');
        newAddressRadioButton.click();
    }

    fillDeliveryDetailsForRegisteredUser(data: {
        firstName: string,
        lastName: string,
        address1: string,
        city: string,
        postCode: string,
        country: string,
        region: string
    }) {
        console.log('[DeliveryDetailsComponent] Filling delivery details step', JSON.stringify(data, null, 2));
        expect(this.root.$('#input-shipping-firstname')).toBeClickable();
        this.root.$('#input-shipping-firstname').setValue(data.firstName);
        this.root.$('#input-shipping-lastname').setValue(data.lastName);
        this.root.$('#input-shipping-address-1').setValue(data.address1);
        this.root.$('#input-shipping-city').setValue(data.city);
        this.root.$('#input-shipping-postcode').setValue(data.postCode);
        this.root.$('#input-shipping-country').selectByVisibleText(data.country);
        this.root.$('#input-shipping-zone').selectByVisibleText(data.region);
    }

    fillDeliveryDetailsForGuest(data: {
        firstName: string,
        lastName: string,
        address1: string,
        city: string,
        postCode: string,
        country: string,
        region: string
    }) {
        console.log('[DeliveryDetailsComponent] Filling delivery details step', JSON.stringify(data, null, 2));
        expect(this.root.$('#input-shipping-firstname')).toBeClickable();
        this.root.$('#input-shipping-firstname').setValue(data.firstName);
        this.root.$('#input-shipping-lastname').setValue(data.lastName);
        this.root.$('#input-shipping-address-1').setValue(data.address1);
        this.root.$('#input-shipping-city').setValue(data.city);
        this.root.$('#input-shipping-postcode').setValue(data.postCode);
        this.root.$('#input-shipping-country').selectByVisibleText(data.country);
        this.root.$('#input-shipping-zone').selectByVisibleText(data.region);
    }
}