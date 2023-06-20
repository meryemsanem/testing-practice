import { stringLength, reverseString } from './task1-2';

test('length', () => {
  const str2 = 'hello';
  const len = 5;
  expect(stringLength(str2)).toBe(len);
});

test('reverse', () => {
  const str = 'hello';
  const rev = 'olleh';
  expect(reverseString(str)).toBe(rev);
});
