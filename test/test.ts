import { expect, tap } from 'tapbundle'

import * as smartstatus from '../dist/index'

tap.test('should create valid status classes', async () => {
    let myStatus301 = new smartstatus.status301()
    return expect(myStatus301).to.be.instanceOf(smartstatus.HttpStatus)
})