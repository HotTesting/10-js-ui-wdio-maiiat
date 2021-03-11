import {shared} from './lesson4_class_sb_user'

describe('Admin', function () {

    it('can do some admin stuff', function () {
        console.log('admin')
        //...
    })

    shared({username: 'Admin'})
})