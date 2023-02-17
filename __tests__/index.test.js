import {
  describe, test, expect,
} from 'vitest';
import index from '../index.js';
import validAnagrams from './__fixtures__/validAnagrams.json';
import invalidAnagrams from './__fixtures__/invalidAnagrams.json';

describe('Anagram Tests', () => {
  test('Valid Anagrams', async () => {
    let isAllValid = true;

    for (let idx = 0; idx < validAnagrams.length; idx += 1) {
      isAllValid &&= await index(validAnagrams[idx].a, validAnagrams[idx].b);
    }

    expect(isAllValid).toBeTruthy();
  });

  test('Invalid Anagrams', async () => {
    let isAllValid = true;

    for (let idx = 0; idx < invalidAnagrams.length; idx += 1) {
      isAllValid &&= await index(invalidAnagrams[idx].a, invalidAnagrams[idx].b);
    }

    expect(isAllValid).toBeFalsy();
  });
});
