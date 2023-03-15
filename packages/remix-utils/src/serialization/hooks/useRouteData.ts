import {useMatches} from './useMatches';
import type {DeserializedData} from '../types';

export function useRouteData<T>(routeId: string) {
  const matches = useMatches();
  const data = matches.find(match => match.id === routeId)?.data;

  if (!data) {
    throw new Error(`Could not find route data at "${routeId}"`);
  }

  return data as DeserializedData<T>;
}
