import {useMatches as useRemixMatches} from '@remix-run/react';
import type {SuperJSONValue} from 'superjson/dist/types';
import {deserialize} from '../utils/deserialize';
import type {SerializedData} from '../types';

function isSerialized(data: unknown): data is SerializedData<SuperJSONValue> {
  return typeof data === 'object' && !!data && 'json' in data;
}

export function useMatches() {
  const matches = useRemixMatches();

  return matches.map(m => {
    return {
      ...m,
      data: isSerialized(m.data) ? deserialize<SuperJSONValue>(m.data) : m.data,
    };
  });
}
