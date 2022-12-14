import camelcaseKeys from 'camelcase-keys';

import antwerp from './antwerp.json';
import chicago from './chicago.json';
import toronto from './toronto.json';
import san_francisco from './san_francisco.json';
import { IRestaurants } from '../../../utils/camelizeTypes';
// import { ICamelizeRestaurant } from '../../../utils/types';

export const mocks: { [location: string]: IRestaurants } = {
  // export const mocks: { [location: string]: ICamelizeRestaurant } = {
  '51.219448,4.402464': camelcaseKeys(antwerp, { deep: true }),
  '43.653225,-79.383186': camelcaseKeys(toronto, { deep: true }),
  '41.878113,-87.629799': camelcaseKeys(chicago, { deep: true }),
  '37.7749295,-122.4194155': camelcaseKeys(san_francisco, { deep: true }),
};

export const mockImages: any[] = [
  require('../../../assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg'),
  require('../../../assets/claudio-schwarz-4qJlXK4mYzU-unsplash.jpg'),
  require('../../../assets/content-pixie-m-gqDRzbJLQ-unsplash.jpg'),
  require('../../../assets/hisu-lee-JVK7ssGd1qc-unsplash.jpg'),
  require('../../../assets/ivan-torres-MQUqbmszGGM-unsplash.jpg'),
  require('../../../assets/jeswin-thomas-Ht8RTni-Vi4-unsplash.jpg'),
  require('../../../assets/loija-nguyen-NYBnDWeOX2c-unsplash.jpg'),
];
