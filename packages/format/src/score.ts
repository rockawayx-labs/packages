export const scoreDifferenceFormatter = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
  signDisplay: 'always',
});

export function formatScoreDifference(value: number | bigint) {
  return scoreDifferenceFormatter.format(value);
}
