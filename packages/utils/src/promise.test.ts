import {withTimeout} from './promise';

describe('withTimeout', () => {
  test('no timeout, resolved immediately', async () => {
    await expect(withTimeout(Promise.resolve('immediately'))).resolves.toBe('immediately');
  }, 200);

  test('no timeout, rejected immediately', async () => {
    await expect(withTimeout(Promise.reject('immediately'))).rejects.toThrowError('immediately');
  }, 200);

  test('no timeout, resolved after 50ms', async () => {
    const promise = new Promise(resolve => setTimeout(() => resolve('after 50ms'), 50));
    await expect(withTimeout(promise)).resolves.toBe('after 50ms');
  }, 200);

  test('no timeout, rejected after 50ms', async () => {
    const promise = new Promise((_, reject) => setTimeout(() => reject('after 50ms'), 50));
    await expect(withTimeout(promise)).rejects.toThrowError('after 50ms');
  }, 200);

  test('100ms timeout, resolved immediately', async () => {
    await expect(withTimeout(Promise.resolve('immediately'), 100)).resolves.toBe('immediately');
  }, 200);

  test('100ms timeout, rejected immediately', async () => {
    await expect(withTimeout(Promise.reject('immediately'), 100)).rejects.toThrowError('immediately');
  }, 200);

  test('100ms timeout, resolved after 50ms', async () => {
    const promise = new Promise(resolve => setTimeout(() => resolve('after 50ms'), 50));
    await expect(withTimeout(promise, 100)).resolves.toBe('after 50ms');
  }, 200);

  test('100ms timeout, rejected after 50ms', async () => {
    const promise = new Promise((_, reject) => setTimeout(() => reject('after 50ms'), 50));
    await expect(withTimeout(promise, 100)).rejects.toThrowError('after 50ms');
  }, 200);

  test('100ms timeout, resolved after 150ms', async () => {
    const promise = new Promise(resolve => setTimeout(() => resolve('after 150ms'), 150));
    await expect(withTimeout(promise, 100)).rejects.toThrowError('Timed out in 100ms.');
  }, 200);

  test('100ms timeout, rejected after 150ms', async () => {
    const promise = new Promise((_, reject) => setTimeout(() => reject('after 150ms'), 150));
    await expect(withTimeout(promise, 100)).rejects.toThrowError('Timed out in 100ms.');
  }, 200);

  test('100ms timeout, never resolved or rejected', async () => {
    const promise = new Promise(() => undefined);
    await expect(withTimeout(promise, 100)).rejects.toThrowError('Timed out in 100ms.');
  }, 200);
});
