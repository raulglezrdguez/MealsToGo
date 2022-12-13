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

export const mockImages = [
  require('../../../assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg'),
  'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pancakes-600x750.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table-600x400.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking-600x400.jpg',
];
