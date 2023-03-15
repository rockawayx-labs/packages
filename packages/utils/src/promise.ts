import {AbortError} from './error';

export function withTimeout<T>(promise: Promise<T>, ms?: number): Promise<T> {
  if (!ms) {
    return promise;
  }

  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => reject(new AbortError(`Timed out in ${ms}ms.`)), ms);

    promise.then(
      response => {
        clearTimeout(timeoutId);
        resolve(response);
      },
      error => {
        clearTimeout(timeoutId);
        reject(error);
      }
    );
  });
}
