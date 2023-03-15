import {generateBigIntRangesArray} from './bigint';

describe('generateBigIntRangesArray', () => {
  test('one element', () => {
    expect(generateBigIntRangesArray(1n, 1n, 2)).toStrictEqual([[1n, 1n]]);
  });

  test('one range', () => {
    expect(generateBigIntRangesArray(0n, 9n, 10)).toStrictEqual([[0n, 9n]]);
  });

  test('multiple ranges', () => {
    expect(generateBigIntRangesArray(0n, 9n, 3)).toStrictEqual([
      [0n, 2n],
      [3n, 5n],
      [6n, 8n],
      [9n, 9n],
    ]);
  });
});
