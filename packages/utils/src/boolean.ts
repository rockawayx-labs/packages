const truthyStrings = ['1', 'true', 'yes'];

export function parseBoolean(value: unknown): boolean {
  return truthyStrings.includes(String(value).toLowerCase());
}
