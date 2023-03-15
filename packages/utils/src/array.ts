export function generateNumberArray(first: number, last: number, increment = 1): number[] {
  return new Array((last - first) / increment + 1).fill(0).map((_, index) => first + index * increment);
}

export function rotate<T>(array: T[], n: number): T[] {
  return [...array.slice(n), ...array.slice(0, n)];
}

export function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export function split<T>(array: T[], size: number): T[][] {
  const length = Math.ceil(array.length / size);
  return Array.from({length}, (_, i) => array.slice(i * size, i * size + size));
}

export function findConsecutiveRanges(values: number[]): [number, number][] {
  const sortedValues = [...values].sort((a, b) => a - b);

  const ranges: [number, number][] = [];

  for (const value of sortedValues) {
    const lastRange = ranges[ranges.length - 1];
    if (lastRange && lastRange[1] === value - 1) {
      lastRange[1] = value;
    } else {
      ranges.push([value, value]);
    }
  }

  return ranges;
}
