export class AbortError extends Error {
  public readonly name = 'AbortError';

  constructor(message: string) {
    super(message);
  }
}

export function isAbortError(error: unknown): error is AbortError {
  return error instanceof Error && error.name === 'AbortError';
}
