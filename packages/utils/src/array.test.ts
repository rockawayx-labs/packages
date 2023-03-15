import {findConsecutiveRanges} from './array';

describe('findConsecutiveRanges', () => {
  test('no element', () => {
    expect(findConsecutiveRanges([])).toStrictEqual([]);
  });

  test('one element', () => {
    expect(findConsecutiveRanges([1])).toStrictEqual([[1, 1]]);
  });

  test('one range', () => {
    expect(findConsecutiveRanges([4, 5, 6, 7, 8, 9])).toStrictEqual([[4, 9]]);
  });

  test('multiple ranges', () => {
    expect(findConsecutiveRanges([0, 1, 2, 4, 5, 6, 7, 9])).toStrictEqual([
      [0, 2],
      [4, 7],
      [9, 9],
    ]);
  });
});
