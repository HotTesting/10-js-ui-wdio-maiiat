export class AlertMessagesPopupPanel {
    private get root(): WebdriverIO.Element {
        return $('div.alert.alert-success.alert-dismissible').parentElement();
    }

    isAppear(): boolean {
        return $('div.alert.alert-success.alert-dismissible').isDisplayed();
    }
}