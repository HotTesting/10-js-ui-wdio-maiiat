
export class ProductCardComponent {
    constructor(private root: WebdriverIO.Element) {
    }

    title(): string {
        return this.root.$('h4').getText();
    }

    addToCart() {
        const addToCartButton = this.root.$('button[onclick*="cart.add"] i.fa-shopping-cart');
        expect(addToCartButton).toBeVisible({ message: 'Expected add to cart button to be visible' });
        addToCartButton.click();
    }

    addToWishList() {
        const addToWishList = this.root.$('button[data-original-title="Add to Wish List"]');
        expect(addToWishList).toBeVisible({ message: 'Expected add to wishlist button to be visible' });
        addToWishList.click();
    }

    addToComparison() {
        const compareButton = this.root.$('button[data-original-title="Compare this Product"]');
        expect(compareButton).toBeVisible({ message: 'Expected add to compare button to be visible' });
        compareButton.click();
    }

    getPriseWithTax(): number {
        const price = this.root.$('div.caption p.price');
        expect(price).toBeVisible({ message: 'Expected add to compare button to be visible' });
        return parseInt(price.getText().substring(price.getText().indexOf("$") + 1 , price.getText().lastIndexOf("E")));
    }
}

