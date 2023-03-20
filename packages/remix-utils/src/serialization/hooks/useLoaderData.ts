import {useLoaderData as useRemixLoaderData} from '@remix-run/react';
import {useMemo} from 'react';
import type {DeserializedData} from '../types';
import {deserialize} from '../utils/deserialize';

export function useLoaderData<T>() {
  const data = useRemixLoaderData();
  return useMemo(() => deserialize<DeserializedData<T>>(data), [data]);
}
