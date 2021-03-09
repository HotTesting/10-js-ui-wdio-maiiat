import {HomePage} from "./pages/HomePages";
import {ProductCategoryPage} from "./pages/ProductCategoryPage";
import {CheckoutPage} from "./pages/checkout";
import {ConfirmationPage} from "./pages/checkout/ConfirmationPage";


export class App {
    home: HomePage
    productCategory: ProductCategoryPage
    checkout: CheckoutPage
    confirmation: ConfirmationPage

    constructor() {
        this.home = new HomePage()
        this.productCategory = new ProductCategoryPage()
        this.checkout = new CheckoutPage()
        this.confirmation = new ConfirmationPage()
    }
}