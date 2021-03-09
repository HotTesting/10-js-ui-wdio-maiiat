/**
 - Try to implement as much tests as you can
 - Do not overload tests with logic, be simple
 - browser.pause() allowed
 - copy/paste is allowed
 - prefer css selectors
 - don't forget about assertions
 */

// this test gives you 20 points
// http://93.126.97.71:10082/index.php?route=account/return/add
// Notice that datepicker is optional
describe("Product return", function () {
    it("can be submitted", function () {
        browser.deleteCookies();
        browser.url('/index.php?route=account/return/add');
        const content = $('#content');
        expect(content).toBeDisplayed({wait: 2000});

        const firstName = content.$('#input-firstname');
        firstName.setValue('Test');

        const lastName = content.$('#input-lastname');
        lastName.setValue('Test');

        const email = content.$('#input-email');
        email.setValue(`test${Date.now()}@gmail.com`);

        const telephone = content.$('#input-telephone');
        telephone.setValue('0931112233');

        const orderID = content.$('#input-order-id');
        orderID.setValue('1234567');

        const productName = content.$('#input-product');
        productName.setValue('Produce Name Test');

        const productCode = content.$('#input-model');
        productCode.setValue('productId123456');

        const reason = content.$('label*=Dead On Arrival');
        reason.click();

        const submit = content.$('input[type="submit"][value="Submit"]');
        submit.click();

        expect(content.$('h1')).toHaveText('Product Returns')
        expect(content.$$('#content p')[0]).toHaveText('Thank you for submitting your return request. Your request has been sent to the relevant department for processing.')
        expect(content.$$('#content p')[1]).toHaveText('You will be notified via e-mail as to the status of your request.')
    });
});

// http://93.126.97.71:10082/index.php?route=account/voucher
// this test gives you 20 points
describe("Gift Certificate", function () {
    it("can be purchased", function () {
        browser.deleteCookies();
        browser.url('/index.php?route=account/voucher');
        const content = $('#content');
        expect(content).toBeDisplayed({wait: 2000});

        const recName = content.$('#input-to-name');
        recName.setValue('Test');


        const recEmail = content.$('#input-to-email');
        recEmail.setValue(`test@gmail.com`);

        const yourName = content.$('#input-from-name');
        yourName.setValue('Test');

        const yourEmail = content.$('#input-from-email');
        yourEmail.setValue(`test2@gmail.com`);

        const theme = content.$('label*=Birthday');
        theme.click();

        const agreePolicy = content.$('input[type="checkbox"][name="agree"]')
        agreePolicy.click()

        const submit = content.$('input[type="submit"][value="Continue"]');
        submit.click();

        expect(content.$('h1')).toHaveText('Purchase a Gift Certificate')
        expect(content.$('#content p')).toHaveText('Thank you for purchasing a gift certificate! Once you have completed your order your gift certificate recipient will be sent an e-mail with details how to redeem their gift certificate.')
    });
});

// this test gives you 20 points
// http://93.126.97.71:10082/index.php?route=information/contact
describe("Contact us form", function () {
    it("must send messages to shop administration", function () {
        browser.deleteCookies();
        browser.url('/index.php?route=information/contact');
        const content = $('#content');
        expect(content).toBeDisplayed({wait: 2000});

        const name = content.$('#input-name');
        name.setValue('Test');

        const email = content.$('#input-email');
        email.setValue(`test${Date.now()}@gmail.com`);

        const enquiry = content.$('#input-enquiry');
        enquiry.setValue('Some message for enquiry field');

        const submit = content.$('input[type="submit"]');
        submit.scrollIntoView();
        submit.click();

        expect(content.$('h1')).toHaveText('Contact Us')
    });
});

// Each implemented test gives you 20 points
describe("Items search", function () {
    it("should show results in case multiple items matches", function () {
        browser.deleteCookies();
        browser.url('/');
        const content = $('#content');
        expect(content).toBeDisplayed({wait: 2000});

        const searchField = $('input.form-control.input-lg');
        searchField.setValue('macbook');

        const searchButton = $('span.input-group-btn');
        searchButton.click();

        expect(content.$('h2')).toHaveText('Products meeting the search criteria');

        const items = $$('div.product-layout.product-grid');
        expect(items.length).toEqual(3);

        items.forEach(a => {
            expect(a.$('h4 a')).toHaveTextContaining('MacBook');
        });
    });

    it("should redirect to 'no matching results' in case no items matched", function () {
        browser.deleteCookies();
        browser.url('/');
        const content = $('#content');
        expect(content).toBeDisplayed({wait: 2000});

        const searchField = $('input.form-control input-lg');
        searchField.setValue('nonexistvalue');

        const searchButton = $('span.input-group-btn');
        searchButton.click();

        const items = $$('div.product-layout.product-grid');
        expect(items.length).toEqual(0);

        expect(content.$('h2')).toHaveText('Products meeting the search criteria');
    });
});