import { expect, tap } from '@pushrocks/tapbundle';

import * as smartstatus from '../ts/index';

tap.test('should create valid status classes', async () => {
  const myStatus301 = new smartstatus.status301();
  console.log(myStatus301.code);
  console.log(myStatus301.text);
  console.log(myStatus301.description);
  return expect(myStatus301).to.be.instanceOf(smartstatus.HttpStatus);
});

tap.start();
