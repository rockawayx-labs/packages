import {json as remixJson} from '@remix-run/node';
import {serialize} from 'superjson';
import type {SerializedData} from '../types';

export function json<Data>(data: Data, init?: number | ResponseInit) {
  const serialized = serialize(data) as SerializedData<Data>;
  return remixJson(serialized, init);
}
