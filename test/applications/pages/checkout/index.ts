import {CheckoutOptionsComponent} from "./components/1_CheckoutOptionsComponent";
import {BillingDetailsComponent} from "./components/2_BillingDetailsComponent";
import {DeliveryMethodComponent} from "./components/4_DeliveryMethodComponents";
import {PaymentMethodComponent} from "./components/5_PaymentMethodComponent";
import {ConfirmOrderComponent} from "./components/6_ConfirmOrderComponent";
import {Urls} from "../../Urls";
import {DeliveryDetailsComponent} from "./components/3_DeliveryDetailsComponent";

export class CheckoutPage {

    get checkoutOptions () {
        return new CheckoutOptionsComponent();
    }

    get billingDetails () {
        return new BillingDetailsComponent();
    }

    get deliveryDetails () {
        return new DeliveryDetailsComponent();
    }

    get deliveryMethod () {
        return new DeliveryMethodComponent();
    }

    get paymentMethod () {
        return new PaymentMethodComponent();
    }

    get confirmOrder () {
        return new ConfirmOrderComponent();
    }

    open() {
        new Urls().openCheckoutURL();
    }
}