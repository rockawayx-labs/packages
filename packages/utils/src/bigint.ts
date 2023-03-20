export function maxBigInt(...values: bigint[]): bigint {
  return values.reduce((max, value) => (value > max ? value : max), values[0] ?? 0n);
}

export function minBigInt(...values: bigint[]): bigint {
  return values.reduce((min, value) => (value < min ? value : min), values[0] ?? 0n);
}

export function generateBigIntArray(from: bigint, to: bigint): bigint[] {
  const length = Number(to - from + 1n);
  return new Array(length).fill(0n).map((_, index) => from + BigInt(index));
}

export function generateBigIntRangesArray(from: bigint, to: bigint, size: number): [bigint, bigint][] {
  if (from > to) {
    throw new Error(`'from' must be less than or equal to 'to'`);
  }
  if (size <= 0) {
    throw new Error('size must be greater than 0');
  }

  const length = Math.ceil(Number(to - from + 1n) / size);

  return new Array(length)
    .fill(0n)
    .map((_, index) => [from + BigInt(index * size), minBigInt(to, from + BigInt(index * size + size - 1))]);
}
