export class ShoppingCartButtonComponent {
    private get root(): WebdriverIO.Element {
        return $('#cart');
    }

    getValue() : string {
        const cartValue = $('#cart-total').getText();
        return cartValue;
    }

    getItemsValue() : number {
        const cartItemsValue = parseInt($('#cart-total').getText().split('"').pop().split('i')[0]);
        return cartItemsValue;
    }

    getPriceValue() : number {
        const cartPriceValue = parseInt($('#cart-total').getText().split('$').pop().split('"')[0]);
        return cartPriceValue;
    }

}