import { NortheastOrSouthwestOrLocation } from '../../utils/camelizeTypes';
import { locations } from './location.mock';

export const locationRequest = (
  location: string,
): Promise<NortheastOrSouthwestOrLocation | null> => {
  return new Promise((resolve, reject) => {
    const result = locations[location];
    if (!result) {
      reject('No location found');
    }
    const res = result.results ? result.results[0].geometry.location : null;
    resolve(res);
  });
};
