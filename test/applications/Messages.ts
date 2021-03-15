export class Messages {

    getPopupSuccessfulMessageOnAddingProductToWishList(productName: string) : string {
        return "Success: You have added " + productName +  " to your wish list!";
    }

    getPopupSuccessfulMessageOnAddingProductComparison(productName: string) : string {
        return "Success: You have added " + productName +  " to your product comparison!";
    }

    getPopupSuccessfulMessageOnAddingProductToCart(productName: string) : string {
        return "Success: You have added " + productName +  " to your shopping cart!";
    }

    getConfirmationPageSuccessfulFirstLineMessage() :string {
        return "Your order has been successfully processed!";
    }

    getConfirmationPageSuccessfulSecondLineMessage() :string {
        return "You can view your order history by going to the my account page and by clicking on history.";
    }

    getConfirmationPageSuccessfulThirdLineMessage() :string {
        return "If your purchase has an associated download, you can go to the account downloads page to view them.";
    }

    getConfirmationPageSuccessfulFourthLineMessage() :string {
        return "Please direct any questions you have to the store owner.";
    }

    getConfirmationPageSuccessfulFifthLineMessage() :string {
        return "Thanks for shopping with us online!";
    }
}