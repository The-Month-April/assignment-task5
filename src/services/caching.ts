/**
 * Functions Inputs/Outputs:
 * - getFromNetworkFirst:
 *   Inputs: key (string), request (Promise<T>)
 *   Output: Promise<T> - Data from network or cache
 * - setInCache:
 *   Inputs: key (string), value (any)
 *   Output: Promise for AsyncStorage operation
 * - getFromCache:
 *   Input: key (string)
 *   Output: Promise<T> with cached value or rejection
 *
 * Component Capabilities:
 * - Manages data caching with AsyncStorage
 * - Implements network-first caching strategy
 * - Handles JSON serialization/deserialization
 */

import AsyncStorage from "@react-native-async-storage/async-storage";

export const getFromNetworkFirst = async <T>(
  key: string,
  request: Promise<T>
): Promise<T> => {
  try {
    const response = await request;
    setInCache(key, response);
    return response;
  } catch (e) {
    return getFromCache<T>(key);
  }
};

export const setInCache = (key: string, value: any) => {
  const jsonValue = JSON.stringify(value);
  return AsyncStorage.setItem(key, jsonValue);
};

export const getFromCache = async <T>(key: string): Promise<T> => {
  const json = await AsyncStorage.getItem(key);
  return await (json != null
    ? Promise.resolve(JSON.parse(json))
    : Promise.reject(`Key "${key}" not in cache`));
};
