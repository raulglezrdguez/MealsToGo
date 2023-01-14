import { RestaurantsEntity, Offers } from '../../utils/camelizeTypes';
import { mockImages, mocks } from './mock';

export const restaurantRequest = (
  location = '37.7749295,-122.4194155',
): Promise<RestaurantsEntity[]> => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];

    if (!mock) {
      reject('No location found');
    }
    setTimeout(() => {
      const results: RestaurantsEntity[] = mock?.results
        ? mock.results.map(result => ({
            ...result,
            isClosedTemporarily: result.businessStatus === 'CLOSED_TEMPORARILY',
            isOpenNow: result.permanentlyClosed
              ? false
              : result.openingHours
              ? result.openingHours.openNow
              : false,
            photosList: [mockImages[Math.floor(Math.random() * 7)]],
            offers: [Offers[Math.floor(Math.random() * Offers.length)]],
          }))
        : [];
      resolve(results);
    }, 2000);
  });
};
