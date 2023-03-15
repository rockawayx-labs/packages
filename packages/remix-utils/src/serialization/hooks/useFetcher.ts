import {useFetcher as useRemixFetcher} from '@remix-run/react';
import {useMemo} from 'react';
import type {DeserializedData} from '../types';
import {deserialize} from '../utils/deserialize';

export function useFetcher<T>() {
  const fetcher = useRemixFetcher();

  return useMemo(
    () => ({
      ...fetcher,
      data: fetcher.data ? deserialize<DeserializedData<T>>(fetcher.data) : undefined,
    }),
    [fetcher]
  );
}
