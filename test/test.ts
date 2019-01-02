import { expect, tap } from '@pushrocks/tapbundle';

import * as smartstatus from '../ts/index';

tap.test('should get a status by codeString', async () => {
  const status = smartstatus.HttpStatus.getHttpStatusByString('404');
  console.log(status);
});

tap.start();
