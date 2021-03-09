// Use http://93.126.97.71:10082/mp3-players to simplify these tests. Mp3 players does not have custom params on details page.

// bonus points:
// - use preconditions
// - use dataprovider
describe('Items', function () {
    // You must be logged in to use wishlist

    beforeEach(function () {

    });

    it('can be added to wishlist', function () {

    })

    it('can be selected for comparison by registered user', function () {

    })

    it('can be selected for comparison by guest', function () {

    })

    it('can be added to cart by guest', function () {

        browser.url('/index.php?route=account/login');
        const chapters = $$('a.list-group-item');
        expect(chapters[0]).toHaveText("Login");

        browser.url('/macbook');

        const addToCardButton = $('#button-cart');
        expect(addToCardButton).toBeDisplayed({wait: 2000});

        const amountOfItemsInBasket = $('#cart-total');
        expect(addToCardButton).toBeDisplayed({wait: 2000});
        expect(amountOfItemsInBasket).toHaveTextContaining('0 item(s)');

        addToCardButton.click();
        expect(amountOfItemsInBasket).toHaveTextContaining('1 item(s)');

        addToCardButton.click();
        expect(amountOfItemsInBasket).toHaveTextContaining('2 item(s)');
    })

    it('can be added to cart by registered user', function () {

        browser.url('/index.php?route=account/login');
        const chapters = $$('a.list-group-item');
        expect(chapters[0]).toHaveText("Login");

        const loginButton = $('input.btn.btn-primary');
        expect(loginButton).toBeDisplayed({wait: 2000});

        const emailLogin = $('input[name="email"]');
        emailLogin.setValue("testmail@gmail.com");

        const passwordLogin = $('input[name="password"]');
        passwordLogin.setValue("123456");

        const chaptersAfterLogin = $$('a.list-group-item');
        expect(chaptersAfterLogin[0]).toHaveText("My Account");

        browser.url('/macbook');

        const addToCardButton = $('#button-cart');
        expect(addToCardButton).toBeDisplayed({wait: 2000});

        const amountOfItemsInBasket = $('#cart-total');
        expect(addToCardButton).toBeDisplayed({wait: 2000});
        expect(amountOfItemsInBasket).toHaveTextContaining('0 item(s)');

        addToCardButton.click();
        expect(amountOfItemsInBasket).toHaveTextContaining('1 item(s)');

        addToCardButton.click();
        expect(amountOfItemsInBasket).toHaveTextContaining('2 item(s)');

    })
})