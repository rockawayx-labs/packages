import type {Decimal} from 'decimal.js';
import {formatDecimal} from './decimal';

export function formatTokenAmount(value: Decimal, tokenSymbol: string) {
  return `${formatDecimal(value)} ${tokenSymbol}`;
}
