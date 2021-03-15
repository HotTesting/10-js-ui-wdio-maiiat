import {Urls} from "../Urls";
import {MyWishListComponent} from "./components/MyWishListComponent";

export class MyWishListPage {

    get products(): MyWishListComponent[] {
        return $$('#content tbody tr').map(elem => {
            return new MyWishListComponent(elem);
        })
    }

    isMyWishListEmpty() : boolean {
        new Urls().openMyWishListURL();
        return $('#content p').isDisplayed();
    }
}