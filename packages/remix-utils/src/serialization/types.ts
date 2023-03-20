import type {TypedResponse} from '@remix-run/node';
import type {SuperJSONResult} from 'superjson/dist/types';

export type SerializedData<T> = {
  meta?: SuperJSONResult['meta'];
  json: T;
};

export type DeserializedData<T> = T extends (...args: any[]) => infer Output
  ? Awaited<Output> extends TypedResponse<infer U>
    ? Awaited<ReturnType<TypedResponse<U>['json']>> extends SerializedData<infer V>
      ? SerializedData<V>['json']
      : never
    : never
  : T;
