import {ProductCardComponent} from "./components/ProductCardComponent";

export class ProductCategoryPage {
    get products(): ProductCardComponent[] {
        return $$('div.product-layout').map(elem => {
            return new ProductCardComponent(elem);
        })
    }

    isAtLeastOneProductOffered(): boolean {
        const content = $('#content');
        content.waitForDisplayed({timeout: 3000});
        return $$('div.product-layout')[0].isDisplayed();
    }

}