import input from './__fixtures__/validAnagrams.json' assert { type: 'json' };
import handler from '../index.js';

handler(input[0].a, input[0].b)
  .then((message) => {
    console.log('Success: ' + JSON.stringify(message, null, 2));
  })
  .catch((e) => {
    if (typeof e === 'object') {
      console.log('Exception: ' + JSON.stringify(e, null, 2));
    } else {
      console.log('Exception: ' + e);
    }
  });
