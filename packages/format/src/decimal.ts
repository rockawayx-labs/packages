import type {Decimal} from 'decimal.js';

export const decimalFormatter = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  maximumFractionDigits: 0,
});

export function formatDecimal(value: Decimal) {
  return decimalFormatter.format(value.toNumber());
}
