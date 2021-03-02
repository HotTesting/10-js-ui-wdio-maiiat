describe('Website', () => {

    it('should open', () => {
        console.log(browser.sessionId)
        browser.url('/');
        // expect($('#logo')).toBeDisplayed();
        // browser.pause(3000);
        console.time('Session restart took')
        browser.reloadSession()
        console.log(browser.sessionId)
        console.log('*** Session restart took ***')
        console.timeEnd('Session restart took')
    });

})