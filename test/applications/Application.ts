import { ConfirmationPage } from "./pages/checkout/ConfirmationPage";
import { CheckoutPage } from "./pages/checkout/index";
import { HomePage } from "./pages/home/HomePages";
import { ProductCategoryPage } from "./pages/ProductCategoryPage";


export class App {
    home: HomePage;
    productCategory: ProductCategoryPage;
    checkout: CheckoutPage;
    confirmation: ConfirmationPage;

    constructor() {
        this.home = new HomePage();
        this.productCategory = new ProductCategoryPage();
        this.checkout = new CheckoutPage();
        this.confirmation = new ConfirmationPage();
    }
}