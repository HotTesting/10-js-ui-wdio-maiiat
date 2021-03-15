export class Urls {

    openMyAccountRegisterURL() {
        browser.url('/index.php?route=account/register');
        const content = $('#content')
        expect(content).toBeDisplayed({wait: 5000})
    }

    openMyAccountLoginURL() {
        browser.url('/index.php?route=account/login');
        const content = $('#content')
        expect(content).toBeDisplayed({wait: 5000})
    }

    openMyAccountLogoutURL() {
        browser.url('/index.php?route=account/logout');
        const content = $('#content')
        expect(content).toBeDisplayed({wait: 5000})
    }

    openMyWishListURL() {
        browser.url('/index.php?route=account/wishlist');
        const content = $('#content')
        expect(content).toBeDisplayed({wait: 5000})

    }

    openCheckoutURL() {
        browser.url('/index.php?route=checkout/checkout');
        const content = $('#content')
        expect(content).toBeDisplayed({wait: 5000})
    }
}