import {LoginPage} from '../applications/pages/LoginPage';
import {LogoutPage} from '../applications/pages/LogoutPage';
import {ProductCategoryPage} from '../applications/pages/ProductCategoryPage';
import {HomePage} from "../applications/pages/home/HomePages";
import {TopLinksComponent} from "../applications/pages/components/TopLinksComponent";
import {MyWishListPage} from "../applications/pages/MyWishListPage";
import {Messages} from "../applications/Messages";
import {ShoppingCartButtonComponent} from "../applications/pages/components/ShoppingCartButtonComponent";
import {CheckoutPage} from "../applications/pages/checkout";
import {ConfirmationPage} from "../applications/pages/checkout/ConfirmationPage";
import {AlertMessagesPopupPanel} from "../applications/pages/components/AlertMessagesPopupPanel";

// Use http://93.126.97.71:10082/mp3-players to simplify these tests. Mp3 players does not have custom params on details page.

// bonus points:
// - use preconditions
// - use dataprovider

// - Переписать существующие тесты чтобы они использовали PageObject и PageComponent паттерны. Опционально - использовать Application
// - Написать тест на покупку зарегистрированным пользователем, и гостем
// - Тест на покупку где биллинг адрес и деливери адрес разные
// - Переписать использование browser.pause(...) на expect или waitUntil

describe('Items', function () {
    const loginPage = new LoginPage();
    const logoutPage = new LogoutPage();
    const productCategoryPage = new ProductCategoryPage();
    const homePage = new HomePage();
    const topLink = new TopLinksComponent();
    const myWishListPage = new MyWishListPage();
    const messages = new Messages();
    const shoppingCartButton = new ShoppingCartButtonComponent();
    const checkout = new CheckoutPage();
    const confirmation = new ConfirmationPage();
    const allertMessagePopupPanel = new AlertMessagesPopupPanel();

    const category = 'MP3 Players';
    const prductName = 'iPod Shuffle';

    beforeEach(function () {
        browser.deleteAllCookies();
        browser.url('/');
    });

    it ('can be added to wishlist', function () {
        // You must be logged in to use wishlist

        if (!loginPage.isUserLoggedIn()) {
            loginPage.makeLogin();
        }

        if (!myWishListPage.isMyWishListEmpty()) {
            const iPodShuffleInWishList = myWishListPage.products.find(product => product.title() === prductName);
            expect(iPodShuffleInWishList).toBeDefined();
            iPodShuffleInWishList.removeItem();
        }

        homePage.openAllForCategory(category);
        const iPodShuffle = productCategoryPage.products.find(product => product.title() === prductName);
        expect(iPodShuffle).toBeDefined();

        let amountOfWishListBefore = topLink.getAmountInWishList();
        iPodShuffle.addToWishList();
        browser.waitUntil(() => allertMessagePopupPanel.isAppear(), {
            timeoutMsg: "Allert Popup panel should be appeared"
        });
        expect($('div.alert').getText()).toContain(messages.getPopupSuccessfulMessageOnAddingProductToWishList(prductName));
        let amountOfWishListAfter = topLink.getAmountInWishList();
        expect(amountOfWishListBefore).toBeLessThan(amountOfWishListAfter);

    })

    it ('can be selected for comparison by registered user', function () {

        if (!loginPage.isUserLoggedIn()) {
            loginPage.makeLogin();
        }

        homePage.openAllForCategory(category);
        const iPodShuffle = productCategoryPage.products.find(product => product.title() === prductName);
        expect(iPodShuffle).toBeDefined();

        iPodShuffle.addToComparison();
        browser.waitUntil(() => allertMessagePopupPanel.isAppear(), {
            timeoutMsg: "Allert Popup panel should be appeared"
        });
        expect($('div.alert').getText()).toContain(messages.getPopupSuccessfulMessageOnAddingProductComparison(prductName));
    })

    it ('can be selected for comparison by guest', function () {
        if (loginPage.isUserLoggedIn()) {
            logoutPage.makeLogout();
        }

        homePage.openAllForCategory(category);
        const iPodShuffle = productCategoryPage.products.find(product => product.title() === prductName);
        expect(iPodShuffle).toBeDefined();

        iPodShuffle.addToComparison();
        browser.waitUntil(() => allertMessagePopupPanel.isAppear(), {
            timeoutMsg: "Allert Popup panel should be appeared"
        });
        expect($('div.alert').getText()).toContain(messages.getPopupSuccessfulMessageOnAddingProductComparison(prductName));
    })

    it ('can be added to cart by registered user', function () {
        if (!loginPage.isUserLoggedIn()) {
            loginPage.makeLogin();
        }

        homePage.openAllForCategory(category);
        const iPodShuffle = productCategoryPage.products.find(product => product.title() === prductName);
        expect(iPodShuffle).toBeDefined();

        let itemsInCartButtonBefore = shoppingCartButton.getItemsValue();
        let priceInCartButtonBefore = shoppingCartButton.getPriceValue();

        iPodShuffle.addToCart();
        browser.waitUntil(() => allertMessagePopupPanel.isAppear(), {
            timeoutMsg: "Allert Popup panel should be appeared"
        });

        let itemsInCartButtonAfter = shoppingCartButton.getItemsValue();
        let priceInCartButtonAfter = shoppingCartButton.getPriceValue();

        expect($('div.alert').getText()).toContain(messages.getPopupSuccessfulMessageOnAddingProductToCart(prductName));
        expect(itemsInCartButtonBefore).toEqual(itemsInCartButtonAfter - 1);
        expect(priceInCartButtonBefore).toEqual(priceInCartButtonAfter - iPodShuffle.getPriseWithTax());
    })

    it ('can be added to cart by guest', function () {
        if (loginPage.isUserLoggedIn()) {
            logoutPage.makeLogout();
        }

        homePage.openAllForCategory(category)
        const iPodShuffle = productCategoryPage.products.find(product => product.title() === prductName);
        expect(iPodShuffle).toBeDefined();

        let itemsInCartButtonBefore = shoppingCartButton.getItemsValue();
        let priceInCartButtonBefore = shoppingCartButton.getPriceValue();

        iPodShuffle.addToCart();
        browser.waitUntil(() => allertMessagePopupPanel.isAppear(), {
            timeoutMsg: "Allert Popup panel should be appeared"
        });

        let itemsInCartButtonAfter = shoppingCartButton.getItemsValue();
        let priceInCartButtonAfter = shoppingCartButton.getPriceValue();
        let priceOfTheProduct = iPodShuffle.getPriseWithTax();

        expect($('div.alert').getText()).toContain(messages.getPopupSuccessfulMessageOnAddingProductToCart(prductName));
        expect(itemsInCartButtonBefore).toEqual(itemsInCartButtonAfter - 1);
        console.log("priceInCartButtonBefore: " + priceInCartButtonBefore+ "; priceInCartButtonAfter: " + priceInCartButtonAfter + "; priceOfTheProduct: " + priceOfTheProduct);
        expect(priceInCartButtonBefore).toEqual(priceInCartButtonAfter - priceOfTheProduct);
    })

    it ('can be bought by registered user', function () {
        if (!loginPage.isUserLoggedIn()) {
            loginPage.makeLogin();
        }

        homePage.openAllForCategory(category)
        const iPodShuffle = productCategoryPage.products.find(product => product.title() === prductName)
        expect(iPodShuffle).toBeDefined();
        iPodShuffle.addToCart();
        expect($('div.alert').getText()).toContain(messages.getPopupSuccessfulMessageOnAddingProductToCart(prductName));

        checkout.open();
        //TODO I don't know why but this test failed time to time without this pause even with browser.waitUntil on 172 row :(
        browser.pause(500);
        browser.waitUntil(() => checkout.billingDetails.isOpened(), {
            timeoutMsg: "Expected Billing Details component to be loaded"
        });
        if (!checkout.billingDetails.isBillingDetailsCheckedWithExistingAdress()) {
            checkout.billingDetails.chooseExistingAddress();
        }
        checkout.billingDetails.continue();

        browser.waitUntil(() => checkout.deliveryDetails.isOpened(), {
            timeoutMsg: "Expected Delivery Details component to be loaded"
        });
        if (!checkout.deliveryDetails.isDeliveryDetailsCheckedWithExistingAdress()) {
            checkout.deliveryDetails.chooseExistingAddress();
        }
        checkout.deliveryDetails.continue();

        browser.waitUntil(() => checkout.deliveryMethod.isOpened(), {
            timeoutMsg: "Expected Delivery Method component to be loaded"
        });
        checkout.deliveryMethod.continue();

        browser.waitUntil(() => checkout.paymentMethod.isOpened(), {
            timeoutMsg: "Expected Payment Method component to be loaded"
        });
        checkout.paymentMethod.acceptTermsAndConditions();
        checkout.paymentMethod.continue();

        browser.waitUntil(() => checkout.confirmOrder.isOpened(), {
            timeoutMsg: "Expected Confirm Order component to be loaded"
        });
        checkout.confirmOrder.continue();

        browser.waitUntil(() => confirmation.isOpened(), {
            timeoutMsg: "Expected confirmation page to be loaded"
        })
        //TODO Can't understand why I'm receiving such Error:  Unable to load spec files quite likely because they rely on `browser` object that is not fully initialised.
        confirmation.verifyConfirmationPageSuccessfulTextAfterOrderPlacedForRegistredUser();
    })

    it ('can be bought by guest with different Billing and Delivery address', function () {
        if (loginPage.isUserLoggedIn()) {
            logoutPage.makeLogout();
        }

        homePage.openAllForCategory(category);
        const iPodShuffle = productCategoryPage.products.find(product => product.title() === prductName);
        expect(iPodShuffle).toBeDefined();
        iPodShuffle.addToCart();
        expect($('div.alert').getText()).toContain(messages.getPopupSuccessfulMessageOnAddingProductToCart(prductName));

        checkout.open();
        browser.waitUntil(() => checkout.checkoutOptions.isOpened(), {
            timeoutMsg: "Expected Checkout Options component to be loaded"
        });
        checkout.checkoutOptions.selectGuestCheckout();
        checkout.checkoutOptions.continue();

        browser.waitUntil(() => checkout.billingDetails.isOpened(), {
            timeoutMsg: "Expected Billing Details component to be loaded"
        });
        checkout.billingDetails.fillBillingDetailsForGuest({
            firstName: 'test',
            lastName: 'test',
            email: `test+${Date.now()}@test.com`,
            telephone: '123123123',
            address1: 'test',
            city: 'test',
            postCode: '123123',
            country: 'Ukraine',
            region: 'Kyiv'
        });
        checkout.billingDetails.continue();

        browser.waitUntil(() => checkout.deliveryDetails.isOpened(), {
            timeoutMsg: "Expected Delivery Details component to be loaded"
        });
        checkout.deliveryDetails.open();
        checkout.deliveryDetails.fillDeliveryDetailsForGuest({
            firstName: 'test2',
            lastName: 'test2',
            address1: 'test2',
            city: 'test2',
            postCode: '1231232',
            country: 'Albania',
            region: 'Kurbin'
        });
        checkout.deliveryDetails.continue();

        //TODO I don't know why but this test failed time to time without this pause even with browser.waitUntil on 267 row :(
        browser.pause(500);
        browser.waitUntil(() => checkout.deliveryMethod.isOpened(), {
            timeoutMsg: "Expected Delivery Method component to be loaded"
        });
        checkout.deliveryMethod.continue();

        browser.waitUntil(() => checkout.paymentMethod.isOpened(), {
            timeoutMsg: "Expected Payment Method component to be loaded"
        });
        checkout.paymentMethod.acceptTermsAndConditions();
        checkout.paymentMethod.continue();

        browser.waitUntil(() => checkout.confirmOrder.isOpened(), {
            timeoutMsg: "Expected Confirm Order component to be loaded"
        });
        checkout.confirmOrder.continue();

        browser.waitUntil(() => confirmation.isOpened(), {
            timeoutMsg: "Expected confirmation page to be loaded"
        });
    })
    //TODO Can't understand why I'm receiving such Error:  Unable to load spec files quite likely because they rely on `browser` object that is not fully initialised.
    confirmation.verifyConfirmationPageSuccessfulTextAfterOrderPlacedForGuest();
})