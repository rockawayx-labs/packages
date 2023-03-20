import {deserialize as superjsonDeserialize} from 'superjson';
import type {SuperJSONValue} from 'superjson/dist/types';
import type {SerializedData} from '../types';

export function deserialize<T>(data: SerializedData<SuperJSONValue>) {
  return superjsonDeserialize<T>(data);
}
