
export class MyWishListComponent {
    constructor(private root: WebdriverIO.Element) {
    }

    title(): string {
        return this.root.$('#content tbody tr td.text-left a').getText();
    }

    addToCart() {
        const addToCartButton = this.root.$('button[onclick*="cart.add"] i.fa-shopping-cart');
        expect(addToCartButton).toBeVisible({ message: 'Expected add to cart button to be visible' });
        addToCartButton.click();
    }

    removeItem() {
        const compareButton = this.root.$('a[data-original-title*="Remove"]');
        expect(compareButton).toBeVisible({ message: 'Expected add to compare button to be visible' });
        compareButton.click();
    }
}

