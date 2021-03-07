// import * as crypto from 'crypto-js';
// import * as crypto from 'crypto'

describe('Website', function () {
    it.skip('should be alive', function () {
        browser.url('/')
        // expect($('#logo')).toBeDisabled()
    })

    it('should allow user to register', function () {
        browser.url('/index.php?route=account/register')
        const content = $('#content')
        expect(content).toBeDisplayed({wait: 5000})

        const firstname = content.$('#input-firstname')
        firstname.setValue('Test')

        const lastName = content.$('#input-lastname')
        lastName.setValue('Test')

        const email = content.$('#input-email')
        const emailValue = `test${Date.now()}@test.com`;
        // const emailValue = (`test${(crypto as any).randomuuid()}+@test.cp`).replace('-',"")
        // const emailValue = (`test${cryptoJS.lib.WordArray.random(16)}+@test.cp`).replace('-',"")
        email.setValue(emailValue)
        console.log(emailValue)

        const telephone = content.$('#input-telephone')
        telephone.setValue('123456')

        const password = content.$('#input-password')
        password.setValue('password')

        const confirmPassword = content.$('#input-confirm')
        confirmPassword.setValue('password')

        const agreePolicy = content.$('input[type="checkbox"][name="agree"]')
        agreePolicy.click()

        const continueButton = content.$('input[type="submit"][value="Continue"]')
        continueButton.click()

        expect(content.$('h1')).toHaveText('Your Account Has Been Created!')
    })
})