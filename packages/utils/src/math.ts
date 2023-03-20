export function average(...values: number[]): number {
  const sum = values.reduce((sum, value) => sum + value, 0);
  return sum / (values.length || 1);
}
