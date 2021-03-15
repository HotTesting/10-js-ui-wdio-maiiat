export class TopLinksComponent {
    private get root(): WebdriverIO.Element {
        return $('nav#top');
    }

    openCheckout() {
        this.root.$('a[title="Checkout"]').click();
    }

    openShoppingCart() {
        this.root.$('a[title="Shopping Cart"]').click();
    }

    openWishList() {
        this.root.$('#wishlist-total').click();
    }

    getAmountInWishList() : number{
        const amountOfWishListElements = parseInt($('#wishlist-total').getAttribute('title').split('(').pop().split(')')[0]);
        return  amountOfWishListElements;
    }

    openMyAccount() {
        this.root.$('a[title="My Account"]').click();
    }

    isUserLoggedIn() : boolean {
        this.openMyAccount();
        const listOfDataInMyAccount = $$ ('ul[class=dropdowm-menu.dropdowm-menu-right] a');
        return (listOfDataInMyAccount[0]).getText() == 'My Account';
    }
}