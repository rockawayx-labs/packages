export function objectHasValues<T>(object?: T): object is T {
  if (!object) {
    return false;
  }
  return Object.values(object).some(v => !!v);
}

export function objectKeys<O extends object>(o: O) {
  return Object.keys(o) as Array<keyof O>;
}
