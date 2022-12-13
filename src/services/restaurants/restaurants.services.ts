import { RestaurantsEntity } from '../../utils/camelizeTypes';
import { mocks } from './mock';

export const restaurantRequest = (
  location = '37.7749295,-122.4194155',
): Promise<RestaurantsEntity[] | string> => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('No location found');
    }
    const results = mock.results
      ? mock.results.map(result => ({
          ...result,
          isClosedTemporarily: result.businessStatus === 'CLOSED_TEMPORARILY',
          isOpenNow: result.permanentlyClosed
            ? false
            : result.openingHours
            ? result.openingHours.openNow
            : false,
        }))
      : [];
    resolve(results);
  });
};

// export const restaurantRequest = async (
//   location = '37.7749295,-122.4194155',
// ) => {
//   const mock = mocks[location];
//   if (!mock) {
//     return null;
//   }
//   return mock;
// };
