export const percentageFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 0,
});

export const fractionalPercentageFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

export function formatPercentage(value: number | bigint) {
  return percentageFormatter.format(value);
}

export function formatFractionalPercentage(value: number | bigint) {
  return fractionalPercentageFormatter.format(value);
}
